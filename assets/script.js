// Getting access to menu toggle and side bar
let menu_toggle = document.querySelector(".menu-toggle");
let sidebar = document.querySelector(".sidebar");

// Create event listner for changes of toggle and sidebar for a click"
menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("is-active");
    sidebar.classList.toggle("is-active");
})