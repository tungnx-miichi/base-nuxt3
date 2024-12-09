
export const snackbar = reactive({
    visible: false,
    message: "",
    color: "success", // Có thể là 'success', 'error', hoặc các màu khác trong Vuetify
});

export const useSnackbar = () => {

    const showSnackbar = (message: string, color: string = "success") => {
        snackbar.message = message;
        snackbar.color = color;
        snackbar.visible = true;
    };

    return { snackbar, showSnackbar };
};