const card= document.querySelector('.card');
const container= document.querySelector('.container');
// other items
const title=document.querySelector('.title');
const sneaker=document.querySelector('.sneaker img');
const purchase=document.querySelector('.purchase button');
const description=document.querySelector('.info h3');
const sizes=document.querySelector('.sizes');

container.addEventListener('mousemove', (e)=>{
//To check the position of x and y axis respectively on windows
// console.log(e.pageX,e.pageY);
let xAxis= (window.innerWidth/2-e.pageX)/15;
let yAxis= (window.innerHeight/2-e.pageY)/15;
card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
console.log(xAxis,yAxis);
});
// animate in
container.addEventListener('mouseenter', (e)=>{
    card.style.transition="none";
    sneaker.style.transition="none";

    title.style.transform="translateZ(150px)";
    sneaker.style.transform="translateZ(200px) rotateZ(-45deg)";
    description.style.transform="translateZ(425px) perspective(425px)";
    sizes.style.transform="translateZ(95px)";
    purchase.style.transform="translateZ(65px)";
});

// animate out
container.addEventListener('mouseleave', (e)=>{
    card.style.transform=`rotateX(0deg) rotateY(0deg)`;
    card.style.transition="all ease 0.5s"
    title.style.transform="translateZ(0px)";
    sneaker.style.transform="translateZ(0px) rotateZ(0deg)";
    sneaker.style.transition="all 0.75s ease-in"
    description.style.transform="translateZ(0px)";
});