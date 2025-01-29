const num = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operator = document.querySelectorAll('.operator');

let num1 = 0;
let num2 = 0;
let oper;
let ans;
operator.forEach(op=>{
    op.addEventListener('click',(event)=>{
        ans = display.textContent.toString().slice(0,-1);
      console.log(ans);
    })
})
function answer(){
    if(oper==="+"){
        let sum = ans+parseInt(num1);
        console.log(sum);
    }
    // if(oper==="+")
    // if(oper==="+")
    // if(oper==="+")
    // if(oper==="+")
    // if(oper==="+")
}
num.forEach(dis=>{
    dis.addEventListener('click' ,(event)=>{
        displayValue(event);
    })
})
function displayValue(event){
    num1+=event.target.value;
    display.textContent+=event.target.value;
}

function clearAll(){
    display.textContent = ' ';
}
function deletelast(){
    display.textContent = display.textContent.toString().slice(0,-1);
}
