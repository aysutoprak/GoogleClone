function darkMode() {
    var element = document.body;
    var element1 = document.getElementById("dark");
    var element2 = document.getElementById("search-btn");
    var element3 = document.getElementById("lucky");
    element.classList.toggle("dark-mode-background");
    element1.classList.toggle("dark-mode-dark-button");
    element2.classList.toggle("dark-button");
    element3.classList.toggle("dark-button");
 }