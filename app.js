const allRight = document.querySelector(".allRight");
const allLeft = document.querySelector(".allLeft");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const main = document.getElementsByTagName("main");
const elementsLeftSide = document.getElementsByClassName("first-list");
const elementsRightSide = document.getElementsByClassName("second-list");
allRight.addEventListener("click", () => {
  const ul = document.createElement("ul");
  ul.style.borderWidth = 0;
  ul.style.marginTop = 0;
  const lastsection = document.querySelector(".lastsection");
  lastsection.style.paddingBottom = 0;
  while (elementsLeftSide.length != 0) {
    for (let element of elementsLeftSide) {
      ul.append(element);
      element.classList.remove("first-list");
      element.classList.add("second-list");
        lastsection.append(ul);
        element.children[0].checked = false;
    }
  }
});

allLeft.addEventListener("click", () => {
  const ul = document.createElement("ul");
  ul.style.borderWidth = 0;
  ul.style.marginTop = 0;
  const firstsection = document.querySelector(".firstsection");
  firstsection.style.paddingBottom = 0;
  while (elementsRightSide.length != 0) {
    for (let element of elementsRightSide) {
      ul.append(element);
      element.classList.remove("second-list");
      element.classList.add("first-list");
        firstsection.append(ul);
        element.children[0].checked = false;
    }
  }
});

right.addEventListener("click", (e) => {
  for (element of elementsLeftSide) {
    if (element.children[0].checked) {
      const ul = document.createElement("ul");
      ul.style.borderWidth = 0;
      ul.style.marginTop = 0;
      const lastsection = document.querySelector(".lastsection");
      lastsection.style.paddingBottom = 0;
      ul.append(element);
      element.classList.remove("first-list");
      element.classList.add("second-list");
      lastsection.append(ul);
      element.children[0].checked = false;
    }
  }
});

left.addEventListener("click", (e) => {
  for (element of elementsRightSide) {
    if (element.children[0].checked) {
      const ul = document.createElement("ul");
      ul.style.borderWidth = 0;
      ul.style.marginTop = 0;
      const firstsection = document.querySelector(".firstsection");
      firstsection.style.paddingBottom = 0;
      ul.append(element);
      element.classList.remove("first-list");
      element.classList.add("second-list");
      firstsection.append(ul);
      element.children[0].checked = false;
    }
  }
});
