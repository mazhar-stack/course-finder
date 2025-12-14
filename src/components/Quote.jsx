import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("Loading motivation...");

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        setQuote(data[0].q);
      } catch (error) {
        setQuote("Keep learning. Keep growing.");
      }
    }

    fetchQuote();
  }, []);

  return <p className="quote">“{quote}”</p>;
}

export default Quote;

