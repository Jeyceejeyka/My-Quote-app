import React, { useEffect, useState } from 'react'; // Add useState to the imports
import './App.css';

const App = () => {
  // Correctly initialize state using useState
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const URL =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  // Fetch a random quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []); // Empty dependency array ensures this runs only once

  const fetchQuote = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();

      // Get a random quote from the `quotes` array
      const randomQuote =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];

      // Update state with the quote and author
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  };

  return (
    <div id="quote-box">
      <h1 id="heading">Random Quote Generator</h1>
      <p id="text">"{quote}"</p>
      <p id="author">- {author}</p>

      <div className="containerBtnTweet">
        {/* Add Twitter share functionality */}
        <a
          href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
          target="_blank"
          rel="noopener noreferrer"
          id="tweet-quote"
        >
          <p>tweet</p>
        </a>


        <button onClick={fetchQuote} id="new-quote" >
         New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
