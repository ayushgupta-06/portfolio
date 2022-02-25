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
    // navBar.style.border = "2px solid white";
    navBar.style.height = "fit-content";
    navBar.style.display = 'block';
    navBar.style.backgroundColor = '#23b5b5';
    // hamburger
    hamBurger.style.width = "15%";
    hamBurger.style.display = "flex";
    hamBurger.style.position = 'relative';
    hamBurger.style.left = '75%';
    hamBurger.style.flexDirection = "column";
    hamBurger.style.alignItems = "center";

    // hamburger line
    hamBurgerLine[0].style.display = "none";
    hamBurgerLine[1].style.transform = "rotate(50deg)";
    hamBurgerLine[1].style.position = "relative";
    hamBurgerLine[1].style.top = "10px";
    hamBurgerLine[1].style.backgroundColor = '#f2f2f2';
    hamBurgerLine[2].style.transform = "rotate(-50deg)";
    hamBurgerLine[2].style.position = "relative";
    hamBurgerLine[2].style.bottom = "13px";
    hamBurgerLine[2].style.backgroundColor = "#f2f2f2";
    
    // ul
    let ul = document.createElement('ul');
    navBar.appendChild(ul);
    let li1 = document.createElement('li');
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    li1.className = 'nav-li';
    li2.className = "nav-li";
    li3.className = "nav-li";
    li4.className = 'nav-li'
    li5.className = "nav-li";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    let li1Txt = document.createTextNode('HOME');
    let li2Txt = document.createTextNode("ABOUT");
    let li3Txt = document.createTextNode("SKILLS");
    let li4Txt = document.createTextNode("PROJECTS");
    let li5Txt = document.createTextNode("CONTACT");
    let li = document.querySelectorAll(".nav-li");
    li1.appendChild(li1Txt);
    li2.appendChild(li2Txt);
    li3.appendChild(li3Txt);
    li4.appendChild(li4Txt);
    li5.appendChild(li5Txt);
    // li1Txt.className = "li-txt";
    // li2Txt.className = "li-txt";
    // li3Txt.className = "li-txt";
    // li4Txt.className = 'li-txt';
    // li5Txt.className = "li-txt";
    // let liTxt = document.querySelectorAll('.li-txt');
    // ul styling
    // ul.style.border = '2px solid black';
    ul.style.width = '100%';
    ul.style.height = "fit-content";
    ul.style.listStyle = 'none';
    ul.style.position = 'relative';
    // li styling
    for(let k = 0; k<li.length; k++){
    li[k].style.width = '100%';
    li[k].style.height = '20px'
    // li[k].style.border = '1px solid #f2f2f2';
    li[k].style.padding = "5px";
    li[k].style.backgroundColor = '#23b5b5';
    li[k].style.color = '#f2f2f2';
    li[k].style.textAlign = "center";
    }
  } 
  else {
    //logo
    logo.style.display = "block";
    //navbar
    navBar.style.display = 'flex';
    navBar.style.alignItems = "center";
    navBar.style.justifyContent = 
    "space-between";
    navBar.style.height = "15vh";
    navBar.style.backgroundColor = "#0c112b"
    // navBar.style.border = "2px solid white";
    //hamburger
    hamBurger.style.position = 'static';
    hamBurger.style.width = "3.5em";
    hamBurger.style.display = "block";
   

    //hamburger line
    for (let i = 0; i < hamBurgerLine.length; i++) {
      hamBurgerLine[i].style.display = "block";
      hamBurgerLine[i].style.position = "static";
      hamBurgerLine[i].style.transform = "rotate(0deg)";
      hamBurgerLine[i].style.backgroundColor = "#23b5b5";
    }
      navBar.lastChild.remove();
      // for(let j=0; j<li.length; j++)
      // {
      //   li[j].style.display = 'none';
      // }
    }
  }

  // typewriter effect
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
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}