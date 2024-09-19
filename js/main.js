const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
      author: "William Butler Yeats"
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale"
    }
  ];  
document.getElementById('quote').addEventListener('click', function(){
    const p = document.getElementById('quote-p');
    const h1 = document.getElementById('name');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    p.innerText = quotes[randomIndex].quote;
    h1.innerText = quotes[randomIndex].author;
});