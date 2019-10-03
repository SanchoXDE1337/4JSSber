window.addEventListener("load", function(event) {
    const buttonTel = document.querySelector('.button').firstChild;
    const buttonInv = document.querySelector('.button').lastChild;
    const tyan = document.querySelector('.girl');
    const ball = document.querySelector('#ball');

    let firstClickTel = true;
    let firstClickInv = true;

    buttonTel.addEventListener("click", function () {
        if(firstClickTel) {
            tyan.style.display = 'none';
            ball.classList.add('bouncing');
        } else {
            tyan.style.display = 'block';
            ball.classList.remove('bouncing');
        }
        firstClickTel = !firstClickTel;
    });

    buttonInv.addEventListener("click", function () {
        if(firstClickInv) {
            tyan.style.visibility = 'hidden';
        } else {
            tyan.style.visibility = 'visible';
        }
        firstClickInv = !firstClickInv;
    })
});