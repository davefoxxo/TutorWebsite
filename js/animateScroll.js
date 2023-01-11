const leftHiddenElements = document.querySelectorAll(".hidden-left");
const rightHiddenElements = document.querySelectorAll(".hidden-right");

const leftObserver = new IntersectionObserver((hiddenElements) => {
    hiddenElements.forEach((element) => {
        if(element.isIntersecting) {
            element.target.classList.add("show-left");
        } else {
            element.target.classList.remove("show-left");
        }
    })
})

const rightObserver = new IntersectionObserver((hiddenElements) => {
    hiddenElements.forEach((element) => {
        if(element.isIntersecting) {
            element.target.classList.add("show-right");
        } else {
            element.target.classList.remove("show-right");
        }
    })
})

leftHiddenElements.forEach((element) => leftObserver.observe(element));
rightHiddenElements.forEach((element) => rightObserver.observe(element));