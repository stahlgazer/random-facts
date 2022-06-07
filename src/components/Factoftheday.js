import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
    <div className="fotd-container">
      {fact ? (
        <>
          <h2>Fact of the Day: </h2>
          <p className="text">{fact.text}</p>
        </>
      ) : (
        <Box sx={{ display: "flex", justifyContent: 'center' }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </div>
  );
}
