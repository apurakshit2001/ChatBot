document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggleCheckbox");

    toggle.addEventListener("change", () => {
        let chatWindow = document.getElementById("chat-window");
        if (toggle.checked) {
            chatWindow.style.backgroundColor = "black";

        } else {

            chatWindow.style.backgroundColor = "#f9f9f9";



        }
    });
});
