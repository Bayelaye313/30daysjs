const btn = document.querySelector('#new-quote');
const textArea = document.querySelector('.text-area')

function genNewQuote() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            textArea.textContent = data.value;
        }else{
            textArea.textContent = `somethings went wrong! ${JSON.parse(xhr.status)}`;

        }
    }

    xhr.send();
}

btn.addEventListener('click', genNewQuote);
document.addEventListener('DOMContentLoaded', genNewQuote)