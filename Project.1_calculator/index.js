const main = document.getElementById('container');
const root = document.querySelector(':root');
const calcInput = document.getElementById('calc-input');
const resultInput = document.getElementById('result-input');
const switchBtn = document.getElementById("switch-theme");
const copyBtn = document.getElementById("copy-btn");

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        console.log("dança gatinho, dança");
        const value = charKeyBtn.dataset.value;
        calcInput.value += value;
    })
})

const validKeys = ["(" ,")" ,"+" ,"-" ,"*" ,"/" ,"%" ,"1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"." ];

const clear = document.getElementById('clearBtn');
clear.addEventListener('click', function clear(){
    calcInput.value = "";
    calcInput.focus();
})


calcInput.addEventListener('keydown', function(ev){
    ev.preventDefault();
    if(validKeys.includes(ev.key)){
        calcInput.value += ev.key;
    }
    if(ev.key === 'Backspace'){
        calcInput.value  = calcInput.value.slice(0, -1);
    }
    if(ev.key === 'Enter'){
        calculate()
        console.log("me diga onde você vai, que  eu vou varrendo");
    }
})

document.getElementById('equalBtn').addEventListener('click', calculate)

function calculate(){
    resultInput.value = "Conta inválida";
    resultInput.classList.add('error');

    console.log("cavalo");
    const result = eval(calcInput.value);
    resultInput.value = result;
    if(resultInput.value === "undefined"){
        resultInput.value = "Conta inválida";
    }
    calcInput.value = "";
    copyBtn.dataset.copy === 'none';
    copyBtn.style.boxShadow = "var(--sdw-btn)";

    resultInput.classList.remove('error');
}

switchBtn.addEventListener('click',  function(){
    if(main.dataset.theme === 'light'){
        root.style.setProperty('--font-color', 'rgb(206, 206, 216)');
        root.style.setProperty('--sdw-container', 'rgba(31, 28, 37, 0.61) 6px 2px 16px 0px, rgba(39, 32, 53, 0.568) -6px -2px 16px 0px');
        root.style.setProperty('--sdw-btn', 'rgba(10, 11, 12, 0.5) 6px 2px 16px 0px, rgba(13, 14, 17, 0.2) -6px -2px 16px 0px');
        root.style.setProperty('--sdw-input', 'rgb(21, 21, 22) 3px 3px 6px 0px inset, rgba(39, 35, 35, 0.5) -3px -3px 6px 1px inset');
        root.style.setProperty('--stw-check-box', '0px 1px 8px 1px rgba(7, 13, 26, 0.733)');
        root.style.setProperty('--stw-equal-btn-animation', 'rgb(130, 142, 153) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset');
        root.style.setProperty('--bg', 'linear-gradient(125deg, rgba(30,3,84,1) 0%, rgba(102,23,115,1) 62%)');
        root.style.setProperty('--bg-container', 'linear-gradient(153deg, rgba(22,22,28,1) 0%, rgba(33,39,52,1) 28%)');
        root.style.setProperty('--bg-equal', 'rgb(206, 206, 216)');
        root.style.setProperty('--bg-items', '#212734');
        root.style.setProperty('--color-equal', '#5f6b80');
        main.dataset.theme  = "dark";
    }else{
        root.style.setProperty('--font-color', '#5f6b80');
        root.style.setProperty('--sdw-container', 'rgba(104, 148, 130, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px');
        root.style.setProperty('--sdw-btn', 'rgba(136, 165, 191, 0.411) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px');
        root.style.setProperty('--sdw-input', 'rgba(160, 171, 180, 0.596) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset');
        root.style.setProperty('--stw-check-box', '0px 1px 8px 1px rgba(36, 71, 134, 0.25)');
        root.style.setProperty('--stw-equal-btn-animation', 'rgb(55, 70, 83) 3px 3px 6px 0px inset, rgba(111, 116, 128, 0.5) -3px -3px 6px 1px inset');
        root.style.setProperty('--bg', 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)');
        root.style.setProperty('--bg-container', 'linear-gradient(153deg, rgba(229,240,240,1) 0%, rgba(255,255,255,1) 54%)');
        root.style.setProperty('--bg-equal', 'rgb(106, 107, 117)');
        root.style.setProperty('--bg-items', 'white');
        root.style.setProperty('--color-equal', 'rgb(229, 232, 238)');
        main.dataset.theme  = "light";
    }
})


copyBtn.addEventListener('click', function(ev){
    const button = ev.currentTarget;
    console.log("sapo perereca e rã");
    if (button.dataset.copy === 'none'){
        copyBtn.style.boxShadow = "var(--sdw-input)";
        navigator.clipboard.writeText(resultInput.value);
        button.dataset.copy === 'copied';
    }
})
