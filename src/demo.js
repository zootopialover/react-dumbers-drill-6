import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Collapse from "@mui/material/Collapse";

import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const sentences = [];
for (let i = 0; i < 20; i++) {
  sentences.push(lorem.generateSentences(1));
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: "1px solid black"
}));

export default function ResponsiveColumns() {
  const [added, setAdded] = useState([...new Array(10)]);

  const switchContent = (index) => (event) => {
    setAdded((oldVal) => {
      const oVal = [...oldVal];
      oVal[index] = !oVal[index];
      return oVal;
    });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={1}>
        {[...new Array(10)].map((height, index) => (
          <Item key={index} onClick={switchContent(index)}>
            <Box>{sentences[index]}</Box>
            <Collapse in={added[index]} timeout={1000}>
              <Box>{sentences[index]}</Box>
            </Collapse>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
