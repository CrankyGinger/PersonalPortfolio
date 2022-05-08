
 function toggle_light_mode() {
    var app = document.getElementsByTagName("body")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    } 
    
}




window.addEventListener("storage", function () {
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
    } 
});

function linkClicked(){
    alert("You are leaving this site");
}

function myfunction(){
    
}