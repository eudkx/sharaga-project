// const boxes = document.querySelector('.portfolio-photos');
// // const boxes_png = window.getComputedStyle(boxes.children[0].children[2]).height;
// console.dir(window.getComputedStyle(boxes.children[2]).height);
// for (let i of boxes.children) {
//   // i.style.height = '1000px';
//   console.log(i);
//   console.log(window.getComputedStyle(i.children[0]));
//   i.style.height = `${window.getComputedStyle(i.children[0]).height}px`;
// }


const navbar = document.querySelector(".nav-content");
const array = new Array();
const something = navbar.children[1].innerText.toLowerCase();
function test(str) {
  const something = str.innerText.toLowerCase();
  if (something.includes(" ")) {
    const there_are = something.indexOf(" ");
    var there = something.slice(0, there_are);
    there = "#" + there;
    return there;

  } else {
    return "#" + something;
  }
}
let counter = 0
for (let i in navbar.children) {
  if (counter >= 6) {
    break;
  } else {
    counter++;
    console.log(navbar.children[i])
    array.push(test(navbar.children[i]));
  }

}
console.log(array);

navbar.children[1].addEventListener("click", (e) => {
  e.preventDefault();
  // const y = document.querySelector(array[1]).getBoundingClientRect().top - 150 + yOffset;
  // console.log(y)
  document.querySelector(array[1]).scrollIntoView({
    block: "start",
    behavior: "smooth",
  })
  // document.documentElement.scrollTo({top: y, behavior: "smooth"})
  
})
// console.log(document.querySelector(array[1]), navbar.children[1])

navbar.children[2].addEventListener("click", (e) => {
  e.preventDefault();
  // const y = document.querySelector(array[2]).getBoundingClientRect().top + window.pageYOffset - 150;
  // document.documentElement.scrollTo({
  //   top: y,
  //   behavior: "smooth"
  // })
  document.querySelector(array[2]).scrollIntoView({
    block: "start",
    behavior: "smooth",
  })
})
console.log(array)
navbar.children[3].addEventListener("click", (e) => {
  e.preventDefault();
  // const y = document.querySelector(array[2]).getBoundingClientRect().top + window.pageYOffset - 150;
  // document.documentElement.scrollTo({
  //   top: y,
  //   behavior: "smooth"
  // })
  document.querySelector(".team-title > a").scrollIntoView({
    block: "start",
    behavior: "smooth",
  })
})

navbar.children[5].addEventListener("click", (e) => {
  e.preventDefault();
  // const y = document.querySelector(array[2]).getBoundingClientRect().top + window.pageYOffset - 150;
  // document.documentElement.scrollTo({
  //   top: y,
  //   behavior: "smooth"
  // })
  document.querySelector(".touching-title > a").scrollIntoView({
    block: "start",
    behavior: "smooth",
  })
})



// if (document.documentElement.clientWidth < 900) {
//   document.querySelector(".nav-content").style.display = "none";
//   const burger = 
// }

const arrow = document.querySelector(".wrapping");
const footer = document.querySelector("footer")
const footer_first = document.querySelector(".footer-first")
arrow.addEventListener("click", () => {
  arrow.classList.toggle("arrow-active");
  footer_first.classList.toggle("footer-active");
})
function fontDecrease(x) {
  if (x.matches) {
    const navbar = document.body.querySelector(".nav-content");
    const nav = document.body.querySelector(".nav");
    const nav1 = document.body.querySelector("nav");
    const burger = document.body.querySelector('.burger');
    navbar.style.display = "none";
    burger.style.display = "flex";

    burger.addEventListener("click", () => {
      navbar.style.display = "none";
      navbar.classList.toggle("content-active");
      burger.classList.toggle("burger-active");
      nav.classList.toggle("nav-active");
      nav1.classList.toggle("nav-active");
    })} else {
      // burger.classList.remove("burger-active");
    }

    // document.querySelector(".nav").insertAdjacentElement("beforeend", burger);

  // title.forEach(title => {title.style.fontSize = `${parseInt(window.getComputedStyle(title).fontSize) - Math.floor(document.documentElement.clientWidth / 100 * 2)}`
  // });


}
let x = window.matchMedia("(max-width: 740px)");
fontDecrease(x);


const video = document.querySelector(".video");

video.addEventListener("click", () => {
  video.innerHTML = `<iframe width="2114" height="872" src="https://www.youtube.com/embed/8VFzHYtOARw" title="Never Gonna Give You Up but every time he says never it gets bass boosted" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

const after = document.body.querySelector('.nav-scroll');
after.style.backgroundColor = "#FCBB08";
console.log(after);
console.log(window.pageYOffset, document.body.clientHeight);
window.addEventListener("scroll", () => {
  after.style.width = `${100 * window.pageYOffset / (document.body.clientHeight - 500)}%`
  console.log(window.pageYOffset, document.documentElement.clientHeight);
})