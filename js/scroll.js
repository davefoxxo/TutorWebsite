const navbar = document.getElementById("navbar");
let prevOffset = 0;

window.onscroll = () => {
    let currentOffset = window.pageYOffset;

    // Become solid when near or at the very top of the page
    if(currentOffset > 75) {
        navbar.style.backgroundColor = "#603f8bcc";
    } else {
        navbar.style.backgroundColor = "#603f8bff";
    }

    let mobileMode = window.matchMedia("(max-width: 850px)");
    // Turn off bouncing header when in mobile mode
    if(mobileMode.matches || currentOffset === 0) {
        navbar.classList.remove("top");
        navbar.style.position = "fixed";
        navbar.style.top = "0px";
        navbar.style.transform = "translateY(0px)";

        return;
    }




    if(currentOffset > prevOffset) {
        navbar.style.transform = "translateY(-70px)";
        
    } else {
        navbar.style.transform = "translateY(0px)";
    }
    
    prevOffset = currentOffset;
}

