//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius"
    },
    {
      quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha"
    },
    {
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      author: "Jimmy Dean"
    }
  ];  

  function randomQuoteGenerator(){
    let rnq = Math.floor(Math.random()*quotes.length) ;
    return quotes[rnq]
  }
  
  btn.addEventListener('click', function(){
    const random = randomQuoteGenerator();

    quote.innerText = random.quote;
    author.innerText= random.author;
  })