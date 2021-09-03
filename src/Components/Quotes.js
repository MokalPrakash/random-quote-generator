import React from "react";
import { useEffect, useState } from "react";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

let rand = colors[Math.floor(Math.random() * colors.length)];
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  //const [randomQuote,setRandomQuote] = useState({})
  const [index, setIndex] = useState();
  const [randColor, setRandColor] = useState(rand);
  useEffect(() => {
    const fetchApi = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data.quotes)
          const quote = data.quotes;
          setQuotes(quote);
          let index = Math.floor(Math.random() * 20);
          setIndex(index);
        });
    };
    fetchApi();
  }, []);

  const getRandomQuotes = () => {
    let index = Math.floor(Math.random() * quotes.length);
    setIndex(index);
    let rand = colors[Math.floor(Math.random() * colors.length)];
    setRandColor(rand);
  };

  const styles = {
    backgroundColor: randColor,
    color: randColor,
  };
  const wrapperStyles = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
  };

  return (
    <div className="main-container" style={styles}>
      <div className="wrapper" id="wrapper" style={wrapperStyles}>
        <div className="quote-box" id="quote-box">
          <div className="quote-text">
            {quotes[index] ? <span id="text">{quotes[index].quote}</span> : ""}
          </div>
          <div className="quote-author">
            {quotes[index] ? (
              <span id="author">{quotes[index].author}</span>
            ) : (
              ""
            )}
          </div>
          <div className="social" style={{ backgroundColor: { randColor } }}>
            <a id="tweet-quote" href="twitter.com/intent/tweet" className="btn" style={{color:randColor}}>
              Twitter
            </a>
            <button id="new-quote" className="btn"style={{color:randColor}} onClick={getRandomQuotes}>
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//

export default Quotes;
