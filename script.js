
// Shery.mouseFollower({
//   //Parameters are optional.
//   // skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
 
//   // duration: 4,
// });



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Update ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Configure ScrollTrigger to use Locomotive Scroll
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Timeline for animations
const tl = gsap.timeline();

// CodeMover animation
tl.from(".codeMover", {
  scale: 0,
  scrollTrigger: {
    scrub: 1,
    scroller: "#main",
    trigger: ".codeMover",
    pin: ".page1",
    start: "top 75%",
    end: "top 50%"
  }
}, "alone");

// CodeText animation
tl.from(".codeMover .codeText", {
  color: "transparent",
  duration: 2
}, "alone");

// MainHeading animations
tl.to(".codeText", {
  color: "#F49741",
  scrollTrigger: {
    scroller: "#main",
    trigger: ".codeText",
    start: "top 65%",
    end: "top 80%",
    scrub: 1
  }
}).from(".MainHeading1, .MainHeading2, .MainHeading3, .MainHeading4, .MainHeading5, .MainHeading6, .MainHeading7, .MainHeading8, .MainHeading9, .MainHeading10 , .MainHeading" , {
  duration: 0.6,
  opacity:0,
  scale: 0,
  stagger: 0.2
}, "alone");


// TriangleSvg animation
gsap.to(".triangleSvg", {
  rotate: 360,
  scale: 9,
  left: "10%",
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".triangleSvg",
    scrub: 4,
    start: "top 40%"
  }
}, "svg");

// ImgCon animation

tl.to(".myImg", {
  opacity: 1,
  transform: "translateY(0)",
  scrollTrigger: {
    scrub: 5,
    // pin: ".ImgCon",
    scroller: "#main",
    trigger: ".myImg",
    // markers:true,
    end: "+=300",
    start: "top 60%"
  }
});

gsap.to("#main", {
  color: "white",
  backgroundColor: "#101720",
  // backgroundColor:"#222",

  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    scrub: 1,
    // markers:true,

    start: "top 10%",
    end: "top 99%",
  }
})

gsap.to('.rotator',{
  rotate:360,
  duration:20,
  delay:0,
  repeat:-1,
})




gsap.to(".linesContact",{
  opacity:0.5,
  repeat:-1,
  duration:8,
  scale:2
})
gsap.from(".smallCircle",{
  borderRadius:"100%",
  repeat:-1,
  duration:10,
  scale:1.4,
  rotate:-360,
})



const projects = document.querySelectorAll('.project')

projects.forEach(elem => {
  var rotateimg = 0;
  var diffroate = 0;
  elem.addEventListener("mouseleave", () => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      // ease:Power5,
    })
    gsap.to(elem.querySelector(".project_name"), {
      x: 0,
      opacity: 1,
    })

  })
  elem.addEventListener("mousemove", (dets) => {
    diffroate = dets.clientX - rotateimg;
    rotateimg = dets.clientX;
    let diffy = dets.clientY - elem.getBoundingClientRect().top //- (elem.getBoundingClientRect().height/2);
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      // delay:0.3,
      top: dets.clienty,
      left: dets.clientX,//-(elem.getBoundingClientRect().width)/4,
      rotate: diffroate,
    });
    gsap.to(elem.querySelector(".project_name"), {
      x: 50,
      opacity: 0.7,
    })
  });


  // ==TIME ============
  


let TIMEE = new Date();


const clock = document.querySelector("#timing");
const year = document.querySelector("#time_year");

setInterval(() => {
  let min = (TIMEE.getMinutes() < 10 ? "0" : "") + TIMEE.getMinutes()
  let hrs = (TIMEE.getHours() < 10 ? "0" : "") + TIMEE.getHours()
  clock.innerText = `${hrs} : ${min}`
  year.innerText = `${TIMEE.getFullYear()}`
}, 500);




})

// projects.forEach(project=>{

//   project.addEventListener('mousemove',(e)=>{
//     gsap.to(project.querySelector('img'),{
//       left:e.offsetX + 'px',
//       top:e.offsetY - 100 + 'px',
//       opacity:1,
//     })
//   })
//   project.addEventListener('mouseleave',(e)=>{
//     gsap.to(project.querySelector('img'),{
//      opacity:0
//     })
//   })

// })




// Refresh ScrollTrigger and Locomotive Scroll
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

