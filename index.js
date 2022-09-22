var initialPrice = document.querySelector('#initial-price');
var stkquantity = document.querySelector('#quantity');
var currentPrice = document.querySelector('#current-price');

var btnCheck = document.querySelector('#btn-check');
var output = document.querySelector('#output-txt');

function calcyPnL(initial,quantity,current) {
    if (initialPrice.value>0 && stkquantity.value>0 &&
        currentPrice.value>0 && initialPrice.value !="" &&
        stkquantity.value !="" && currentPrice.value !="") {
        if (current>initial) {
            var profit = (current-initial)*quantity;
            var profitPercentage = (((current-initial)*100)/initial);
            output.innerText = "You incurred Profit of "+ profit + " and the Profit% is "+ profitPercentage + "💹";
        } else if(initial>current) {
            var loss = (initial-current)*quantity;
            var lossPercentage = (((initial-current)*100)/initial);
            output.innerText = "You incurred a Loss of "+ loss + " and the Loss% is "+ lossPercentage + "😖";
        } else{
            output.innerText = "Nothing to show here... 🙅‍♂️";
        }
    } else {
        output.innerText = "Given input should be greater than zero";
    }
    
}



function clickHandler() {
    var iniP = Number(initialPrice.value);
    var sqty = Number(stkquantity.value);
    var currP = Number(currentPrice.value);

    calcyPnL(iniP,sqty,currP);
};

btnCheck.addEventListener('click', clickHandler);
