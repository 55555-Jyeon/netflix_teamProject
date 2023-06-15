
/* QNA */
/* 자주 묻는 질문 */
const questionList = document.querySelector('#question-list');

var answer = document.querySelectorAll('.answer');

/* answer box */
const answer01 = questionList.querySelector('#answer01');
const answer02 = questionList.querySelector('#answer02');
const answer03 = questionList.querySelector('#answer03');
const answer04 = questionList.querySelector('#answer04');
const answer05 = questionList.querySelector('#answer05');
const answer06 = questionList.querySelector('#answer06');

/* question box에 있는 + 이미지 */
const plus01 = questionList.querySelector('.plus-01');
const plus02 = questionList.querySelector('.plus-02');
const plus03 = questionList.querySelector('.plus-03');
const plus04 = questionList.querySelector('.plus-04');
const plus05 = questionList.querySelector('.plus-05');
const plus06 = questionList.querySelector('.plus-06');

const form = document.querySelector('#moveonClick');


function shortAnswer01(){

    if(answer01.style.display === 'none'){
        answer01.style.display = 'block';
        answer01.style.transitionProperty = 'display';
        answer01.style.transitionDuration = '.6s';
        answer01.style.transitionTimingFunction = 'ease-in';
        form.style.marginTop = '11%';
        plus01.style.transform = 'rotate(45deg)';
    } else {
        answer01.style.display = 'none';
        form.style.marginTop = '0';
        plus01.style.transform = 'rotate(0deg)';
    }
}

function shortAnswer02(){

    if(answer02.style.display === 'none'){
        answer02.style.display = 'block';
        form.style.marginTop = '11%';
        plus02.style.transform = 'rotate(45deg)';
    } else {
        answer02.style.display = 'none';
        form.style.marginTop = '0';
        plus02.style.transform = 'rotate(0deg)';
    }
}
function shortAnswer03(){

    if(answer03.style.display === 'none'){
        answer03.style.display = 'block';
        form.style.marginTop = '8%';
        plus03.style.transform = 'rotate(45deg)';
    } else {
        answer03.style.display = 'none';
        form.style.marginTop = '0';
        plus03.style.transform = 'rotate(0deg)';
    }
}

function shortAnswer04(){

    if(answer04.style.display === 'none'){
        answer04.style.display = 'block';
        form.style.marginTop = '13%';
        plus04.style.transform = 'rotate(45deg)';
    } else {
        answer04.style.display = 'none';
        form.style.marginTop = '0';
        plus04.style.transform = 'rotate(0deg)';
    }
}
function shortAnswer05(){

    if(answer05.style.display === 'none'){
        answer05.style.display = 'block';
        form.style.marginTop = '8%';
        plus05.style.transform = 'rotate(45deg)';
    } else {
        answer05.style.display = 'none';
        form.style.marginTop = '0';
        plus05.style.transform = 'rotate(0deg)';
    }
}

function shortAnswer06(){

    if(answer06.style.display === 'none'){
        answer06.style.display = 'block';
        form.style.marginTop = '12%';
        plus06.style.transform = 'rotate(45deg)';
    } else {
        answer06.style.display = 'none';
        form.style.marginTop = '0';
        plus06.style.transform = 'rotate(0deg)';
    }
}
