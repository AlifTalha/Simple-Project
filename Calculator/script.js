let input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let str = '';

buttonsArray.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        if (e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }
        else if (e.target.innerHTML == 'AC') {
            str = '';
            input.value = str;
        }
        else if (e.target.innerHTML == '=') {
            str = eval(str);
            input.value = str ;
        }
        else {
            str += e.target.innerHTML;
            input.value = str;
        }  
    });
});
