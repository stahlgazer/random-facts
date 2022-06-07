import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Randomfact() {
  const [fact, setFact] = useState();
  useEffect(() => {
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
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
