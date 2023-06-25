let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");
let buuton = document.getElementsByClassName("field__form__btn")

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
let userNum;

btn.onclick = function (evt) {
    // debugger
    evt.preventDefault();
    userNum = input.value;
    console.log(userNum, randNum);
    if (userNum > randNum) {
        check.textContent = "Пока что не угадали";
        help.textContent = "Многовато будет";
        item++;
        count.textContent = item;
    } else if (userNum < randNum) {
        check.textContent = "Пока что не угадали";
        help.textContent = "Маловато будет";
        item++;
        count.textContent = item;
    } else {
        check.textContent = "Поздравляю! Вы угадали число";
        help.textContent = "В самый раз "+randNum;
        item++;
        count.textContent = item;
        buuton[0].className = "field__form__btn1";
        buuton[0].classList.remove("field__form__btn1");
    }

};

function reload () {
    location.reload();
}


