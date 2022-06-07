import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Factoftheday() {
  const [fact, setFact] = useState();
  useEffect(() => {
    axios
      .get("https://uselessfacts.jsph.pl/today.json?language=en")
      .then((data) => {
        setFact(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <p>{fact ? fact.text : "Loading..."}</p>
    </div>
  );
}
