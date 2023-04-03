//your JS code here. If required.
let mainDev = document.getElementById('main');
let img1 = document.getElementsByClassName('img1');
let img2 = document.getElementsByClassName('img2');
let img3 = document.getElementsByClassName('img3');
let img4 = document.getElementsByClassName('img4');
let img5 = document.getElementsByClassName('img5');
// let arr=[img1,img2,img3,img4,img5];
for (let i = 1; i <= 5; i++) {
    let img = document.createElement('img');
    img.setAttribute("src", `img${i}`);
    img.setAttribute('data-ns-img', i);
    img.onclick = function (e) {
        readCaptcha(this);
    }
    img.width = 220;
    img.height = 220;
    mainDev.append(img);
}
let n = Math.floor(Math.random() * 5) + 1;
let img = document.createElement('img');
img.setAttribute('src', `img${n}`);
img.setAttribute('data-ns-img', n);
img.width = 220;
img.height = 220;
img.onclick = function (e) {
    readCaptcha(this);
}
mainDev.append(img);
let flag = false;
let captcha = [];
let click1 = 0;
let click2 = 0;
let verify = document.getElementById('verify');
// let verify=document.createElement('button');
// verify.innerHTML='verify';
function readCaptcha(e) {
    // counter++;
    e.getAttribute('data-ns-img');
    // captcha.push(e.getAttribute('data-ns-img'));
    // console.log(captcha);
    if (flag)
        click2 = e.getAttribute('data-ns-img');
    else
        click1 = e.getAttribute('data-ns-img');
    // flag=true;
    console.log(click1, click2);
    if (click1 != 0 && flag == false) {
        let reset = document.getElementById('reset');

        // let reset=document.createElement('button');
        // reset.innerHTML='reset';
        // mainDev.append(reset);
        reset.onclick = resetCaptcha;
    }
    if (click1 != 0 && click2 != 0 && !mainDev.contains(verify)) {
        mainDev.append(verify)
        verify.onclick = checkCaptcha;
    }
    flag = true;
}

function checkCaptcha() {
    if (click1 == click2) {
        let inter = "  Verified";
        mainDev.append(" " + inter);

    }
    // console.log("verified");
    else {
        let imln = " Not Verified";
        mainDev.append(" " + imln);
        // console.log("not verified");
    }
}
function resetCaptcha() {
    location.reload();
}