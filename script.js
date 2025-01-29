const num = document.querySelectorAll('.number');
const display = document.querySelector('.display');

num.forEach(dis=>{
    dis.addEventListener('click' ,(event)=>{
        displayValue(event);
    })
})
function displayValue(event){
    display.textContent+=event.target.value;
}

function clearAll(){
    display.textContent = ' ';
}
function deletelast(){
    display.textContent = display.textContent.toString().slice(0,-1);
}
function result(){
    display.textContent= eval(display.textContent.toString());
}