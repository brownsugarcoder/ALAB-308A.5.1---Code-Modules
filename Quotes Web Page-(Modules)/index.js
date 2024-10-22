
import {button, output, quotes} from './modules/quotes.js';


// Randomize Song Quotes

btn.addEventListener("click", function(){
    let randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
    window.alert('A new quote has been generated!');
})


// On mouseover, the color of the quote text will turn blue.
output.addEventListener('mouseover', () => {
    output.style.color = 'blue';
  });
// Hover will revert back once mouse moves.
  output.addEventListener('mouseout', () => {
    output.style.color = 'black';  
  });

  // Adds New Music Emoji's

const emoji = document.getElementById('emoji');
   emoji.append('🎻 🎹 ');

// Change Lorem Ipsum text
let lorem = document.createElement('div');
  lorem.innerHTML = '<em> Testing </em> ';

// User can submit their own song lyrics
const quoteForm = document.getElementById('quoteForm');
quoteForm.addEventListener('submit', (event) => {
    const userQuote = document.getElementById('userQuote').value;

    if (userQuote.trim() === '') {
        event.preventDefault();  
        alert('Please enter a real song lyric');  
    } else {
        quotes.push(userQuote);  
        alert('Your quote has been added!');
        document.getElementById('userQuote').value = ''; 
    }
});