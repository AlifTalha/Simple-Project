const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if (height == '' || height <= 0 || isNaN(height)) {

        result.innerHTML = 'Please Give Valid Height!';

    }
    else if (weight == '' || weight <= 0 || isNaN(weight)) {

        result.innerHTML = 'Please Give Valid weight!';

    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let range;
        if(bmi<18.6){
            range = "Your BMI Is ' Under Weight '";
        }
        else if(bmi>=18.6 && bmi<=24.9){
            range = "Your BMI Is In ' Normal Range ' ";
        }
        else{
            range = "Your BMI Is ' Over Weight ' ";
        }
        result.innerHTML = `<span>${bmi}</span><br><p>${range}</p>`;
    }

});