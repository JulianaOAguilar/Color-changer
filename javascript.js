var box = document.getElementById("box");
var container = document.getElementById("container");
var body = document.getElementById("body");


function theme() {


    var icon = document.getElementById("icon");

    if (document.getElementById("theme").className === "theme-light") {
        document.getElementById("theme").className = "theme-dark";
        document.getElementById("theme").style.backgroundColor = "#5E0034";
        document.getElementById("theme").style.color = "white";
       
        
        container.style.backgroundColor = "#13000A";
        container.style.borderColor= "black";
        body.style.backgroundColor = "#2B0018";
        box.style.borderColor = "black";
        
    


    } else {
        document.getElementById("theme").className = "theme-light";
        document.getElementById("theme").style.backgroundColor = "#f3ecdb";
        document.getElementById("theme").style.color = "black";
        
    
        container.style.borderColor = "#F798BE";
        container.style.backgroundColor = "#F3ECDB";
        body.style.backgroundColor = "#EFDCE7";
        box.style.borderColor = "#F798BE";
        
    }

    if (icon.data.includes("light_mode_50dp_000000_FILL0_wght400_GRAD0_opsz48.svg")) {
        icon.data = "icons/dark_mode_50dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.svg";
      
    } else {
      icon.data = "icons/light_mode_50dp_000000_FILL0_wght400_GRAD0_opsz48.svg"; 
     
    }
    
    


}

function show(event) {
    var color = event.target.id;
    box.style.backgroundColor = color;

    if (color === '#000000') {
        box.style.color = "white";
    } else {
        box.style.color = "black";
    }
}