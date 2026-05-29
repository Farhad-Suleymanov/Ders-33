// let btn = document.querySelectorAll("button");
// btn.forEach((element) => {
//     element.addEventListener("mouseover",(event) =>{
//         event.target.style.color = "gray";

        
//     });
// });

///////////////////////////

let btn = document.querySelectorAll("button");
let firstBlue = true;
btn.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.style.textDecoration = "line-through";
        if(firstBlue){
            event.target.style.color = "blue";
            firstBlue = false;
        }

    });
});

//////////////////////////////////

document.addEventListener('keyup', (event) => {
     if (event.key == "Enter") {
         console.log(event.key);
     }
    });