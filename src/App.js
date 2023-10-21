import React, { useEffect, useState } from "react";
import "./App.css";
import FlagOverlay from "./components/FlagOverlay";
import GuessFlag from "./components/GuessFlag";
import ShowFlag from "./components/ShowFlag";
import flagData from "./flag_data/flags.json";

function App() {
  const [generatedFlag, setGeneratedFlag] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [isCorrect, setIsCorrect] = useState(null);

  const randomFlagGenerator = () => {
    const randomFlagIndex = Math.floor(Math.random() * flagData.flags.length);
    const randomFlag = flagData.flags[randomFlagIndex];
    setGeneratedFlag(randomFlag);
  };

  useEffect(() => {
    randomFlagGenerator();
  }, []);

  return (
    <div className="flag_game_container">
      <FlagOverlay opacity={opacity} />
      <ShowFlag flag={generatedFlag} />
      <GuessFlag
        correctFlag={generatedFlag}
        opacity={opacity}
        setOpacity={setOpacity}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        randomFlagGenerator={randomFlagGenerator}
      />
    </div>
  );
}

export default App;
