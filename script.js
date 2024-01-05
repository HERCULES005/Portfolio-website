const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 200;

const currentFrame = (index) => `./Atomic_New/${(index+1).toString()}.jpg`;

const images =[];
let ball = {frame: 0};

for(let i=0;i<frameCount;i++){
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}
//To resgister the plugin otherwise will show error
gsap.registerPlugin(ScrollTrigger);

gsap.to(ball,{
    frame : frameCount-1,
    snap:"frame",
    ease : "none",
    scrollTrigger:{
        scrub:1,
        pin:"canvas",
        end :"500%"
    },
    onUpdate:render,
});
// gsap.to(ball, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//       scrub: 0.5,
//       pin: "canvas",
//       end: "500%",
//     },
//     onUpdate: render,
//   });
gsap.fromTo(
    ".ball-text",
      {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 1,
  
        start: "40%",//Time from Animation starts
        end: "60%", //Where it ends
      },
      onComplete: () => {
        gsap.to(".ball-text", { opacity: 0 });
      },
    }
  );
//Welcome text
gsap.fromTo(
    ".agent",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 1,
  
        start: "0%",//Time from Animation starts
        end: "30%", //Where it ends
      },
      onComplete: () => {
        gsap.to(".agent", { opacity: 0 });
      },
    }
  );



images[0].onload = render;
console.log(images);
// function render(){
//     context.clearRect(0,0,canvas.width,canvas.height);
//     context.drawImage(images[ball.frame] ,0 ,0);
// }
function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;
  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);//0,0 are position
  }