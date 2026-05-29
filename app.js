// let btn = document.querySelectorAll("button");
// btn.forEach((element) => {
//     element.addEventListener("mouseover",(event) =>{
//         event.target.style.color = "gray";

        
//     });
// });

///////////////////////////

let btn = document.querySelectorAll("button");
function line(event){
    event.target.style.textDecoration = "line-through";
}
function color(event){
    event.target.style.color = "blue";
    event.target.removeEventListener("click", color);
}
btn.forEach((element) => {
    element.addEventListener("click", line);
    element.addEventListener("click", color);
});

//////////////////////////////////

document.addEventListener('keyup', (event) => {
     if (event.key == "Enter") {
         console.log(event.key);
     }
    });