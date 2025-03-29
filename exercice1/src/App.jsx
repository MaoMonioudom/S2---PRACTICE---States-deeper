import React, { useState } from "react";

export default function App() {
  // State to hold the score value
  const [score, setScore] = useState(0);

  // Compute the score bar style dynamically
  const getScoreBarStyle = () => {
    // Compute width based on score (0 to 100%)
    const scoreWidth = `${score * 10}%`; // Score between 0 and 10 mapped to percentage

    // Compute color (optional, can adjust color based on score)
    let scoreColor = `#f3bc47`;
    if (score > 7) {
      scoreColor = "#9CC54B"; // Green for scores >= 7
    } else if (score > 4) {
      scoreColor = "#C7E755"; // Orange for scores >= 4
    } else if (score > 2){
      scoreColor = "#B9C54B"; // Yellow for scores >= 1
    } else {
      scoreColor = "#F3BC47"; // Red for scores < 4
    }

    // Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <div className="score-panel">
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
      />

      <div className="score-bar">
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
