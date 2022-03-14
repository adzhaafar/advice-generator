// selectors 

const adviceId = document.querySelector('.advice');
const quote = document.querySelector('.quote');
const button = document.querySelector('.btn');



// Event listeners 
button.addEventListener('click', getRandomQuote);


// when clicking, random quote is changed (from the api)

function getRandomQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            quote.innerHTML = `<p class="quote">${data.slip.advice}</p>`
            adviceId.innerHTML = `<p class="advice">ADVICE #${data.slip.id}</p>`
            
    })
}


