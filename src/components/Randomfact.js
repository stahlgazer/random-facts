import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button'

export default function Randomfact() {
  const [fact, setFact] = useState();
  const [clicked,setClicked] = useState(0);
  const handleClick = () => {
    setClicked(clicked+1)
  }

  useEffect(() => {
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((data) => {
        setFact(data.data);
      })
      .catch((error) => console.log(error));
  }, [clicked]);
  return (
    <div className="random-container">
      {fact ? (
        <>
        <h2>Random Fact: </h2>
        <p className="text">{fact.text}</p>
      </>
      ) : (
        <Box sx={{ display: "flex", justifyContent: 'center' }}>
          <CircularProgress color="secondary"/>
        </Box>
      )}
      <Button onClick={handleClick} className="button" color="inherit" variant="outlined">Next Random Fact</Button>
    </div>
  );
}
