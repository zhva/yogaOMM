function addEvent(object, type, callback) {
    if (object == null || typeof (object) === 'undefined') {
      return;
    }
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
    }
    else if (object.attachEvent) {
      object.attachEvent(`on${type}`, callback);
    }
    else {
      object[`on${type}`] = callback;
    }
}

function addClass(menuId, className) {
    const element = document.getElementById(menuId);
    if (element == null || typeof (element) === 'undefined') {
        return;
    }

    if (!element.classList.contains(className))
        element.classList.add(className);
}

function removeClass(menuId, className) {
    const menuElement = document.getElementById(menuId);
    if (menuElement == null || typeof (menuElement) === 'undefined') {
        return;
    }

    if (menuElement.classList.contains(className))
        menuElement.classList.remove(className);
}

function toggleClass(menuId, className, isOn) {
    if (isOn)
        addClass(menuId, className);
    else
        removeClass(menuId, className);
}

function isElementHit(elementId, target) {
    const element = document.getElementById(elementId);
    if (element == null || typeof (element) === 'undefined') {
        return false;
    }

    return element.contains(target);
}
  

function addEventHandlers(){
    document.addEventListener('click', (event) => {
        let isHamburgerMenuClicked = isElementHit('navigationId', event.target);
        toggleClass('navigationId', 'mobile-menu', isHamburgerMenuClicked);

    });

    addEvent(window, 'resize', () => {
        toggleMobileState();
    });

    addEvent(window, 'scroll', () => {
        removeClass('navigationId', 'mobile-menu');
    });
}

function toggleMobileState() {
    let isMobile = window.innerWidth < 875;
    if (isMobile) {
        setupMobileControls();
    }
    else {
        setupDesktopControls();
    }
}

function setupMobileControls() {
    addClass('navigationId', 'hidden');
}

function setupDesktopControls() {
    removeClass('navigationId', 'hidden');
}


/*-----------------------------------------------------------------------------------*/


function showNextQuote(elemId) {
    const element = document.getElementById(elemId);
    if (element == null || typeof (element) === 'undefined') {
        return;
    }

    var chilDivs = element.getElementsByClassName('slide');

    for (let i = 0; i < chilDivs.length; i++) {
        if (chilDivs[i].style.opacity == 1) {
            let nextElemIndex = (i == chilDivs.length - 1) ? 0 : i + 1;
            chilDivs[i].style.opacity = 0;
            chilDivs[nextElemIndex].style.opacity = 1;
            break;
        }
    }
}

function startSlider () {
    const slider = document.getElementById('quotesSlider');
    if (slider == null || typeof (slider) === 'undefined') {
        return;
    } 

    var childSlides = slider.getElementsByClassName('slide');
    for (let i = 0; i < childSlides.length; i++) {
        childSlides[i].style.opacity = 0;
    }
    childSlides[0].style.opacity = 1;

    setInterval(function() { showNextQuote('quotesSlider') }, 7000);
}
/*-----------------------------------------------------------------------------------*/
function init(){
    addEventHandlers();
    toggleMobileState();
    startSlider();  
};


