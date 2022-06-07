import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button'

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
      {fact ? (
        `Random Fact: ${fact.text}`
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="secondary"/>
        </Box>
      )}
      <Button>Next Random Fact</Button>
    </div>
  );
}
