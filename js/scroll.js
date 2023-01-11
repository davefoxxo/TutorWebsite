const navbar = document.getElementById("navbar");
let prevOffset = 0;

window.onscroll = () => {
    let currentOffset = window.pageYOffset;
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

$("#navbar a, .btn").on("click", function(e) {
    if(this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100

            }, 800 //ms
        ) 
    }
})