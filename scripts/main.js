function randomNum() {
    if (document.getElementById('randomNumP')) {
        document.getElementById('randomNumP').remove();
    }

    const randomNum = Math.floor(Math.random() * 10) + 1;
    const body = document.getElementsByTagName('body')[0];

    const pNum = document.createElement('p');
    pNum.setAttribute('id', 'randomNumP');
    pNum.textContent = "Random Number = " + randomNum;

    body.appendChild(pNum);
}