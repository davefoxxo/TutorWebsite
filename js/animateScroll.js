const createObservers = (hiddenClass, showClass) => {

    let hiddenElements = document.querySelectorAll(hiddenClass);

    let myObserver = new IntersectionObserver((hiddenElements) => {
        hiddenElements.forEach((element) => {
            if(element.isIntersecting) {
                element.target.classList.add(showClass);
            } else {
                element.target.classList.remove(showClass);
            }
        })
    })

    hiddenElements.forEach((element) => myObserver.observe(element));
}

const iter = [
            [".hidden-left", "show-left"],
            [".hidden-right", "show-right"],
            [".hidden-bottom", "show-bottom"]
           ]
iter.forEach((sublist) => {createObservers(sublist[0], sublist[1])})