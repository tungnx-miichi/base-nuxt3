<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { GEO_JSON_JAPAN } from '../map/index.ts'

// GeoJSON
const geoJsonData = ref({
  type: 'FeatureCollection',
  features: [],
})

const data = [
  { id: 370, name: 'いわき市', pre: '福島県', density: 1111 },
  { id: 853, name: '敦賀市', pre: '福井県', density: 500 },
]
const map = ref(null)
const geoJsonLayer = ref(null) // Đặt geoJsonLayer là một tham chiếu có thể truy cập được toàn cục
const zoomLevelToHideTooltip = 4 // Mức zoom mà tooltip sẽ bị ẩn
const mapInstance = ref()

onMounted(() => {
  const test = GEO_JSON_JAPAN.map((feature) => {
    const match = data.find(
      (item) =>
        item.id === feature.id ||
        (item.name === feature.properties.name &&
          item.pre === feature.properties.pre),
    )

    if (match) {
      feature.properties.density = match.density
    }

    return feature
  })

  geoJsonData.value.features = test

  // Instance map
  mapInstance.value = L.map(map.value).setView([37.7503, 140.4677], 5) // Coordinates

  // Add Tile Layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapInstance.value)

  // Add legend
  const legend = L.control({ position: 'bottomright' })
  legend.onAdd = () => {
    const div = L.DomUtil.create('div', 'info legend')
    const grades = [0, 10, 20, 50, 100, 200, 500, 1000]

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' +
        getColor(grades[i] + 1) +
        '"></i> ' +
        grades[i] +
        (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+')
    }

    return div
  }
  legend.addTo(mapInstance.value)

  // Add GeoJSON to map
  geoJsonLayer.value = L.geoJSON(geoJsonData.value, {
    style: (feature) => ({
      // Style to map
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 1,
    }),
    onEachFeature: (feature, layer) => {
      // Add tooltip
      const tooltip = layer.bindTooltip(feature.properties.name, {
        direction: 'center',
        permanent: true,
        className: 'custom-tooltip',
      })

      layer.tooltipInstance = tooltip
    },
  }).addTo(mapInstance.value)

  // Listen event zoom map
  mapInstance.value.on('zoom', () => {
    const currentZoom = mapInstance.value.getZoom()
    geoJsonLayer.value.eachLayer((layer) => {
      if (layer._map) {
        if (currentZoom < zoomLevelToHideTooltip) {
          layer.closeTooltip() // Hide tooltip
        } else {
          layer.openTooltip() // Show tooltip
        }
      }
    })
  })

  // Render color map
  function getColor(d) {
    return d > 1000
      ? '#800026'
      : d > 500
        ? '#BD0026'
        : d > 200
          ? '#E31A1C'
          : d > 100
            ? '#FC4E2A'
            : d > 50
              ? '#FD8D3C'
              : d > 20
                ? '#FEB24C'
                : d > 10
                  ? '#FED976'
                  : '#FFEDA0'
  }
})
</script>

<template>
  <p>aaaaa</p>
  <div ref="map" class="map-container"></div>
</template>

<style lang="css" scoped>
.map-container {
  width: 100%;
  height: 500px;
}
:deep() {
  .legend {
    padding: 6px 8px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .legend i {
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 8px;
    opacity: 0.7;
  }

  .leaflet-tooltip {
    background: transparent;
    border: none;
    box-shadow: none;
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
  .leaflet-tooltip-center {
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
}
</style>
