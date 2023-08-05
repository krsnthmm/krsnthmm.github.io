// target all elements to save to constants
const homebtn = document.querySelector("#homebtn");
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page1HomeBtn = document.querySelector("#page1home");
const page2HomeBtn = document.querySelector("#page2home");
const page3HomeBtn = document.querySelector("#page3home");
var allSubtopicPages = document.querySelectorAll(".page");

// for navbar
const menuBtn = document.querySelector("#menuIcon");
const menuItemsList = document.querySelector("nav ul");

// for collapsible containers
var collapsible = document.querySelectorAll(".collapsible");

// for ikebana arrangement
const arrangementState = document.querySelector(".parent");
const massImg = document.querySelector("#bnw.image2");
const colourImg = document.querySelector("#colour.image2");
const lineImg = document.querySelector(".image3");
const mass = document.querySelector("#elem1")
const colour = document.querySelector("#elem2")
const line = document.querySelector("#elem3")
var allArrangementElements = document.querySelectorAll(".elem")
var state = 0;

togglePage(0); /* default page: home page */
hideAllArrangementElems();

function hideAllSubtopics(){ /* function to hide all pages */
    for(let onePage of allSubtopicPages) { /* go through all subtopic pages */
        onePage.style.display="none"; /* hide it */
    }
}

function hideAllArrangementElems() { /* function to hide all arrangement element containers */
    for (let oneElement of allArrangementElements) {
        oneElement.style.display="none";
    }
}

function togglePage(pgNum){ /* function to show selected page no */
    hideAllSubtopics();

    //select the page based on the parameter passed in
    let onePage=document.querySelector("#page"+pgNum);

    //show the page
    onePage.style.display="block";
}

function toggleArrangementElem(elemNum) { /* function to show selected arrangement element */
    hideAllArrangementElems();

    //select the page based on the parameter passed in
    let oneElem=document.querySelector("#elem"+elemNum);

    //show the page
    oneElem.style.display="block";

}

function toggleMenus(){ /* toggle menu icon rotation and menu state */
    menuBtn.classList.toggle("rotate");
    menuItemsList.classList.toggle("menuHide");
}

function toggleState(stateNum) { /* function to toggle ikebana arrangement states */
    switch(stateNum) {
        case 1:
            toggleArrangementElem(1);
            massImg.style.display = "block";
            break;

        case 2:
            toggleArrangementElem(2);
            massImg.style.display = "none";
            colourImg.style.display = "block";
            break;

        case 3:
            toggleArrangementElem(3);
            lineImg.style.display = "block";
            break;

        default:
            hideAllArrangementElems();
            colourImg.style.display = "none";
            lineImg.style.display = "none";
            break;
    }
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/

// from navbar
menuBtn.addEventListener("click", toggleMenus);
homebtn.addEventListener("click", function () {
    togglePage(0);
});
page1btn.addEventListener("click", function () {
    togglePage(1);
});
page2btn.addEventListener("click", function () {
    togglePage(2);
});
page3btn.addEventListener("click", function () {
    togglePage(3);
});

// from home page
page1HomeBtn.addEventListener("click", function () {
    togglePage(1);
});
page2HomeBtn.addEventListener("click", function () {
    togglePage(2);
});
page3HomeBtn.addEventListener("click", function () {
    togglePage(3);
});

// for collapsible containers
collapsible.forEach((coll) => {
    coll.addEventListener("click", function() {
        coll.classList.toggle("active");
        var content = coll.nextElementSibling; /* gets the relevant elements */

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.overflow = "hidden";
            content.style.padding = "0% 10%";
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.overflow = "auto";
            content.style.padding = "20px 10%";
        }
    });
});

// for toggling arrangement elements state
arrangementState.addEventListener("click", function() {
    if (state < 3) {
        state++;
    }
    else {
        state = 0;
    }
    toggleState(state);
});