const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        
        btns.forEach(button => button.classList.remove('selected'));

        e.target.classList.add('selected');
        
        body.style.backgroundColor = e.target.id;
    });
});
