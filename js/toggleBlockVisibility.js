function toggleBlockVisibility(elemId, classNameHide, classNameShow, btnId) {
    const element = document.getElementById(elemId);
    let btn = document.getElementById(btnId);
 
    if (!element.classList.contains(classNameHide)){
        removeClass(elemId, classNameShow);
        addClass(elemId, classNameHide);
        btn.firstChild.data = "Show more";
    }
    else {
        addClass(elemId, classNameShow);
        removeClass(elemId, classNameHide);
        btn.firstChild.data = "Show less";
    }
}

function addClass(elemId, className) {
    const element = document.getElementById(elemId);
    if (element == null || typeof (element) === 'undefined') {
        return;
    }

    if (!element.classList.contains(className))
        element.classList.add(className);
}

function removeClass(elemId, className) {
    const menuElement = document.getElementById(elemId);
    if (menuElement == null || typeof (menuElement) === 'undefined') {
        return;
    }

    if (menuElement.classList.contains(className))
        menuElement.classList.remove(className);
}