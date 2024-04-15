/*
Just hide 'Youtube Shorts' element.
*/

console.log("[Youtube Shorts Hide] plugin loaded");

// credit to:
// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

const elementsToHide = [
    "[is-shorts]", // Box on the main page
    "ytd-reel-shelf-renderer" // Box in the suggestions sidebar on video detail page
];

elementsToHide.forEach((element) => {
    waitForElement(element).then((elementToHide) => {
        console.log('[Youtube Shorts Hide] YouTube Shorts element found, hiding it :-)');
        elementToHide.style.display = "none";
    });
});
