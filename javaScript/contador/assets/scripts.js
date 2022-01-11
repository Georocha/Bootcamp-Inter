let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    //CURRENT_NUMBER.style.color='White';
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    //CURRENT_NUMBER.style.color='Red';
}
