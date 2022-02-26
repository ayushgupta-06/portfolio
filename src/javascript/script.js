let hamBurger = document.querySelector(".hamburger-menu");
hamBurger.addEventListener("click", hamBurgerFunc);

let hamBurgerLine = document.querySelectorAll(".hamburger-menu-line");
let navBar = document.querySelector("#navbar-container");

let logo = document.querySelector(".logo");
function hamBurgerFunc() {
  if (logo.style.display != "none") {
    // logo
    logo.style.display = "none";
    // navbar
    navBar.style.height = "fit-content";
    navBar.style.display = "block";
    navBar.style.backgroundColor = "#23b5b5";
    // hamburger
    hamBurger.style.width = "2em";
    hamBurger.style.display = "flex";
    hamBurger.style.position = "relative";
    hamBurger.style.left = "75%";
    hamBurger.style.flexDirection = "column";
    hamBurger.style.alignItems = "center";

    // hamburger line
    hamBurgerLine[0].style.display = "none";
    hamBurgerLine[1].style.transform = "rotate(50deg)";
    hamBurgerLine[1].style.position = "relative";
    hamBurgerLine[1].style.top = "10px";
    hamBurgerLine[1].style.backgroundColor = "#f2f2f2";
    hamBurgerLine[1].style.width = "100%";
    hamBurgerLine[1].style.height = ".1em";
    hamBurgerLine[2].style.transform = "rotate(-50deg)";
    hamBurgerLine[2].style.position = "relative";
    hamBurgerLine[2].style.bottom = "13px";
    hamBurgerLine[2].style.backgroundColor = "#f2f2f2";
    hamBurgerLine[2].style.width = "100%";
    hamBurgerLine[2].style.backgroundColor = ".1em";

    // ul
    let ul = document.createElement("ul");
    navBar.appendChild(ul);
    let aTag1 = document.createElement("a");
    let aTag2 = document.createElement("a");
    let aTag3 = document.createElement("a");
    let aTag4 = document.createElement("a");
    let aTag5 = document.createElement("a");
    aTag1.setAttribute("href", "#main-container");
    aTag2.setAttribute("href", "#about-container");
    aTag3.setAttribute("href", "#");
    aTag4.setAttribute("href", "#");
    aTag5.setAttribute("href", "#");
    ul.appendChild(aTag1);
    ul.appendChild(aTag2);
    ul.appendChild(aTag3);
    ul.appendChild(aTag4);
    ul.appendChild(aTag5);
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    li1.className = "nav-li";
    li2.className = "nav-li";
    li3.className = "nav-li";
    li4.className = "nav-li";
    li5.className = "nav-li";

    aTag1.appendChild(li1);
    aTag2.appendChild(li2);
    aTag3.appendChild(li3);
    aTag4.appendChild(li4);
    aTag5.appendChild(li5);
    let li1Txt = document.createTextNode("HOME");
    let li2Txt = document.createTextNode("ABOUT");
    let li3Txt = document.createTextNode("SKILLS");
    let li4Txt = document.createTextNode("PROJECTS");
    let li5Txt = document.createTextNode("SOCIALS");
    let li = document.querySelectorAll(".nav-li");
    li1.appendChild(li1Txt);
    li2.appendChild(li2Txt);
    li3.appendChild(li3Txt);
    li4.appendChild(li4Txt);
    li5.appendChild(li5Txt);
    // ul styling
    ul.style.width = "100vw";
    ul.style.height = "fit-content";
    ul.style.listStyle = "none";
    ul.style.position = "relative";
    // li styling
    for (let k = 0; k < li.length; k++) {
      li[k].style.width = "100%";
      li[k].style.height = "20px";
      li[k].style.padding = "5px";
      li[k].style.color = "#f2f2f2";
      li[k].style.textAlign = "center";
      li[k].style.fontFamily = "Oxygen";
      li[k].style.cursor = "pointer";
      li[k].addEventListener("mouseover", onLiFocusState);
      li[k].addEventListener("mouseout", onLiNormalState);
      li[k].addEventListener("click", linkClicked);
      function onLiFocusState() {
        li[k].style.backgroundColor = "#1c8f8f";
      }
      function onLiNormalState() {
        li[k].style.backgroundColor = "#23b5b5";
      }

      function linkClicked() {
        //logo
        logo.style.display = "block";
        //navbar
        navBar.style.display = "flex";
        navBar.style.alignItems = "center";
        navBar.style.justifyContent = "space-between";
        navBar.style.height = "15vh";
        navBar.style.backgroundColor = "#0c112b";
        //hamburger
        hamBurger.style.position = "static";
        hamBurger.style.width = "3em";
        hamBurger.style.display = "block";
        hamBurger.style.backgroundColor = "#23b5b5";
        //hamburger line
        for (let i = 0; i < hamBurgerLine.length; i++) {
          hamBurgerLine[i].style.display = "block";
          hamBurgerLine[i].style.position = "static";
          hamBurgerLine[i].style.transform = "rotate(0deg)";
          hamBurgerLine[i].style.backgroundColor = "#f2f2f2";
        }
        navBar.lastChild.remove();
      }
    }
  } else {
    //logo
    logo.style.display = "block";
    //navbar
    navBar.style.display = "flex";
    navBar.style.alignItems = "center";
    navBar.style.justifyContent = "space-between";
    navBar.style.height = "15vh";
    navBar.style.backgroundColor = "#0c112b";
    //hamburger
    hamBurger.style.position = "static";
    hamBurger.style.width = "3em";
    hamBurger.style.display = "block";
    hamBurger.style.backgroundColor = "#23b5b5";
    //hamburger line
    for (let i = 0; i < hamBurgerLine.length; i++) {
      hamBurgerLine[i].style.display = "block";
      hamBurgerLine[i].style.position = "static";
      hamBurgerLine[i].style.transform = "rotate(0deg)";
      hamBurgerLine[i].style.backgroundColor = "#f2f2f2";
    }
    navBar.lastChild.remove();
  }
}

// Type Write Effect
// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 1500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
    
  }
  
  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // Initial Type Speed
    let typeSpeed = 50;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt");
  txtElement.style.borderRight = "4px solid #abacad";
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
