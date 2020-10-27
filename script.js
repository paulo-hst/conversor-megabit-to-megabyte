const input1 = document.getElementById('input1');
const btn1 = document.getElementById('btn1');

const input2 = document.getElementById('input2');
const btn2 = document.getElementById('btn2');

btn1.onclick = function bitToByte(){
    let mbit = input1.value;
    let mbyte = mbit / 8;

    input2.value = mbyte;
}


btn2.onclick = function byteToBit(){
    let mbyte = input2.value;
    let mbit = mbyte * 8;

    input1.value = mbit;
}