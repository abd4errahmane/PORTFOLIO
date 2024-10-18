
const currentPage = window.location.pathname.split('/').pop();

const menuItems = document.querySelectorAll('.menus a');

menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPage) {
        item.classList.add('activemenu');
    }
});

const text = "I'm Abderrahmane, Computer Science Student and Front-End web developer Welcome to my personal Website.";
const animatedText = document.getElementById("myname");

const websitename = text.slice(94,101)
let startND = 94;
let endND = 101;
const websitHTML = `<span id="website"> ${websitename}</span>`

const bossname = text.slice(4, 16);
let start = 4;
let end = 16;
const nameHTML = `<span> ${bossname}</span>`

let cursor = `<span class="cursor"> </span>`;

let index = 0;
let finalText = "";
function typeText(){
    if(index<text.length){
        if(index === start){
            finalText += nameHTML;
            index = end;
        }
        else if(index === startND){
            finalText += websitHTML;
            index = endND;
        }
        else{
            finalText += text.charAt(index);
            index++;
            
        }
        animatedText.innerHTML = finalText + cursor;

        setTimeout(typeText, 80);
    }
}

window.onload = typeText();

let tl = gsap.timeline();

tl.set(".logo1",{
    opacity:0,
    y:70
})
tl.to(".logo1",{
    opacity:1,
    y:0,
    ease:'power1'
})

gsap.set(".block-langauge",{
    opacity:0,
})
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".block-langauge",
        start: "top 80%",
        end:"top 60%",
        toggleActions: "play resume reverse resume",
        markers: false,
}});

tl1.to(".block-langauge",{
    y: -60,
    duration: 0.5,
    opacity:1,
    ease:'power1',
    stagger:{
        amount:3,
        each:0,
    }
}
)

const tl2 = gsap.timeline({
});

tl2.set(".about-me",{
    opacity:0,
    y:30,
})
tl2.set(".logo",{
    rotateY:420,
    opacity:0,
})
tl2.set(".text1",{
    x: 120,
    opacity:0,
})
tl2.set(".text2",{
    opacity:0,
    x: 120,
})

tl2.to(".about-me",{
    y: 0,
    opacity:1,
})
tl2.to(".logo",{
    rotateY:0,
    opacity:1,
    duration:1,
})
tl2.to(".logo",{
    y:0,
    opacity:1,
    duration:1,
    delay:-1
})
tl2.to(".text1",{
    x:0,
    opacity:1,
    duration: 1.2,
    delay:-0.5
}),
tl2.to(".text2",{
    opacity: 1,
    x: 0,
    duration: 1.2,
    delay: -0.5
})

gsap.utils.toArray(".project").forEach((project) => {
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: project,
        toggleActions: "play resume reverse resume",
        markers: false,
        start: "top 80%",
        end: "top 60%",
      }
    });
  
    // Step 1: Initially hide the element
    gsap.set(project, {
      opacity: 0,
      x: 70,
    });
  
    // Step 2: Animate the appearance of each "project"
    tl5.to(project, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "linear",
    });
  });
  
