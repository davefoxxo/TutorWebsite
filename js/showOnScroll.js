const createObservers = (hiddenClass, showClass) => {

    let hiddenElements = document.querySelectorAll(hiddenClass);

    let myObserver = new IntersectionObserver((hiddenElements) => {
        hiddenElements.forEach((element) => {
            if(element.isIntersecting) {
                element.target.classList.add(showClass);
            }
        })
    })

    hiddenElements.forEach((element) => myObserver.observe(element));
}

const iter = [
            {
                hiddenClass: ".hidden-left", 
                showClass: "show-left"
            },
            {
                hiddenClass: ".hidden-right", 
                showClass: "show-right"
            },
            {
                hiddenClass: ".hidden-bottom", 
                showClass: "show-bottom"
            },
           ]
iter.forEach((subObject) => {createObservers(subObject.hiddenClass, subObject.showClass)})