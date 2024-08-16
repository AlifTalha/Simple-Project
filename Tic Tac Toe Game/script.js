
const btns = document.querySelectorAll(".btn");

const reset = document.querySelector('.reset');
const newbtn = document.querySelector('.newbtn');
const winner = document.querySelector('.winner');

let Player = true;
let count = 0;


let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btns.forEach((btn) => {

    btn.addEventListener('click', function () {

        if (Player) {
            btn.innerHTML = "X";
            Player = false;
        }
        else {
            btn.innerHTML = "0";
            Player = true;
        }
        btn.disabled = true;
        count++;

        checkWinner();

        if (count === 9 && count != checkWinner()) {
            winner.innerHTML = `GameOver!`;
        }

    });

});


const checkWinner = ()=> {
    for (let perrten of winCondition) {
        let pos1value = btns[perrten[0]].innerText;
        let pos2value = btns[perrten[1]].innerText;
        let pos3value = btns[perrten[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                winner.innerHTML = `Winner is :  ${pos1value}`;


                for (const btn of btns) {
                    btn.disabled = true;
                }

            }

        }
    }

};

reset.addEventListener('click', function () {
    Player = true;
    count = 0;
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerHTML = "";
    }
    winner.innerHTML = "";

});


newbtn.addEventListener("click",()=>{

    Player = true;
    count = 0;
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
    winner.innerHTML = "";
});