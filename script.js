const form = document.getElementById('form');
form.addEventListener('submit', handleSubimit)

const inputValue = document.getElementById('value-real');
const selectorCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverd = 0;

function handleSubimit(e){
    e.preventDefault();

    if(!inputValue.value || inputValue.value < 0){
        alert('Informe um valor correto!');
        return;
    } else if(!selectorCurrency.value){
        alert('Escolha uma moeda!');
        return;
    } 

    converter()
};


function converter(){
    if(selectorCurrency.value === 'eur'){
        valueConverd = inputValue.value / 5.98;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');

        animateResult();

    } else if(selectorCurrency.value === 'dol'){
        valueConverd = inputValue.value / 5.48;
        result.innerHTML = valueFormatter('en-US', 'USD');

        animateResult();
    }


    inputValue.value = '';
    selectorCurrency.value = '';
};

function valueFormatter(locale, currency){
    const value = valueConverd.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function animateResult(){
    return result.animate([
        {
            transform: 'translateY(-150px)'
        },

        {
            transform: 'translateY(0px)'
        }
    ], {duration: 500});
}