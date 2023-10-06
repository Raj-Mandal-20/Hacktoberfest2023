


const wrapper = document.querySelector('.wrapper');




// here I added the loader 
var load =  document.querySelector('.loader');
setTimeout(() => {
    
   load.style.display="none";
}, 3000);

function changeColor(){
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   return `rgb(${red},${green},${blue})`;
}

setInterval(()=>{
   // console.log(changeColor());
   wrapper.style.backgroundColor = changeColor();
}, 1000);
// changeColor();