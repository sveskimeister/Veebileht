// Leia nupu element
var themeToggleBtn = document.getElementById("themeToggle");

// Lisa sündmuskuulaja nupule
themeToggleBtn.addEventListener("click", function() {
    // Kontrolli, kas nupul on klass "btn-dark"
    if (themeToggleBtn.classList.contains("btn-dark")) {
        // Eemalda "btn-dark" klass ja lisa "btn-light" klass
        themeToggleBtn.classList.remove("btn-dark");
        themeToggleBtn.classList.add("btn-light");
        // Muuda nupu tekst
        themeToggleBtn.textContent = "Muuda teemat tumeks";
        // Lisa või eemalda "dark" klass body elemendile
        document.body.classList.toggle("dark");
    } else {
        // Eemalda "btn-light" klass ja lisa "btn-dark" klass
        themeToggleBtn.classList.remove("btn-light");
        themeToggleBtn.classList.add("btn-dark");
        // Muuda nupu tekst
        themeToggleBtn.textContent = "Muuda teemat heledaks";
        // Lisa või eemalda "dark" klass body elemendile
        document.body.classList.toggle("dark");
    }
});
