let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector(".btn")
let msgbox = document.querySelector(".msg")
let resetbtn = document.querySelector(".btn")

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

showWinner=(winner)=>{
    msgbox.innerHTML=`Congratulations Winner is ${winner}`
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const resetGame=()=>{
    turnO=true;
    boxes.forEach((box)=>{
        box.innerHTML=""
        box.disabled=false;
        msgbox.innerHTML="";
        
    })
}    

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false
        } else {
            box.innerHTML = "X";
            turnO = true
        }
        box.disabled = true;
        console.log("Box was clicked")
        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winPatterns) {
        let posValue1 = boxes[pattern[0]].innerHTML;
        let posValue2 = boxes[pattern[1]].innerHTML;
        let posValue3 = boxes[pattern[2]].innerHTML;

        if (posValue1 != "" && posValue2 != "" && posValue3 != "") {
            if (posValue1 === posValue2 && posValue2 === posValue3) {
                console.log("Winner",posValue1)
                showWinner(posValue1);
            }
        }
    }    
}

resetbtn.addEventListener("click",resetGame)