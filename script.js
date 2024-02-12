let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newGame=document.querySelector("#new-game-btn");
let msg=document.querySelector(".msg");
let body=document.querySelector("body");

// msg.style.display="";
msg.style.display="none";
let flag=true;  





// const reset = () => {
//     console.log("hello bhai");
//     for(let box of boxes){
//         // box.innerText="";
//         console.log("hello bro");
//         // box.disabled=false;
//     }
// }

newGame.addEventListener("click",() => {
  
    for(let box of boxes){
        box.innerText="";
       
        box.disabled=false;
        msg.style.display="none";
        flag=true;  
    }
    for(let i=0 ; i<9 ; i++){
        boxes[i].style.backgroundColor="#564F34";
    }
});
resetBtn.addEventListener("click",() => {
   
    for(let box of boxes){
        box.innerText="";
      
        box.disabled=false;
        msg.style.display="none";
        flag=true;  
    }
    for(let i=0 ; i<9 ; i++){
        boxes[i].style.backgroundColor="#564F34";
    }
});




let win=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]



];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(flag){//player 1 -> X
            box.innerText="X";
            flag=false;
            
        }
        else{//plater 2 -> O
            box.innerText="O";
            flag=true;
        }
        box.disabled=true;
        winner();
       
    });
});
const showWinner = (val1Pos) => {
    msg.style.display="";
    msg.innerText=`Congrat's, Player ${val1Pos} is Winner`;
    for(let box of boxes){
        box.disabled=true;

    }
    // boxes.style.backgroundColor="#5A8547";
    for(let i=0 ; i<9 ; i++){
        boxes[i].style.backgroundColor="#5A8547";
    }
    
}

const winner = () => {
    for(let pattern of win){
        // console.log(boxes[pattern[0]],boxes[pattern[0]],boxes[pattern[0]]);
        let val1Pos=boxes[pattern[0]].innerText;
        let val2Pos=boxes[pattern[1]].innerText;
        let val3Pos=boxes[pattern[2]].innerText;

        if(val1Pos != "" && val2Pos != "" && val3Pos != ""){
           if(val1Pos === val2Pos && val2Pos === val3Pos){
               
                showWinner(val1Pos);
            } 
        }
       
    }
}

