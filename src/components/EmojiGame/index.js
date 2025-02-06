import { useState } from 'react';
import './index.css';
import EmojiCard from '../EmojiCard';
import NavBar from '../NavBar';
import WinOrLoseCard from '../WinOrLoseCard';

const EmojiGame = ({ emojisList }) => {
  const [clickedEmojisList, setClickedEmojisList] = useState([]);
  const [isGameInProgress, setIsGameInProgress] = useState(true);
  const [topScore, setTopScore] = useState(0);

  const resetGame = () => {
    setClickedEmojisList([]);
    setIsGameInProgress(true);
  };

  const finishGameAndSetTopScore = (currentScore) => {
    setTopScore((prevTopScore) => Math.max(prevTopScore, currentScore));
    setIsGameInProgress(false);
  };

  const clickEmoji = (id) => {
    if (clickedEmojisList.includes(id)) {
      finishGameAndSetTopScore(clickedEmojisList.length);
    } else {
      const newClickedEmojisList = [...clickedEmojisList, id];
      setClickedEmojisList(newClickedEmojisList);
      if (newClickedEmojisList.length === emojisList.length) {
        finishGameAndSetTopScore(emojisList.length);
      }
    }
  };

  const getShuffledEmojisList = () => {
    return [...emojisList].sort(() => Math.random() - 0.5);
  };

  return (
    <div className="main">
      <NavBar
        currentScore={clickedEmojisList.length}
        isGameInProgress={isGameInProgress}
        topScore={topScore}
      />
      <div className="game-container">
        <div className="side-menu">
          <h3>Game Instructions</h3>
          <ul>
            <li>Click on an emoji to earn points.</li>
            <li>Do not click the same emoji more than once.</li>
            <li>Emojis shuffle after every click.</li>
            <li>The game ends if you click a repeated emoji.</li>
            <li>Score the highest by clicking all unique emojis!</li>
          </ul>
        </div>
        <div className="emoji-game-body">
          {isGameInProgress ? (
            <ul className="emoji-container">
              {getShuffledEmojisList().map((eachEmoji) => (
                <EmojiCard
                  key={eachEmoji.id}
                  emoji={eachEmoji}
                  clickEmoji={clickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={clickedEmojisList.length === emojisList.length}
              onClickPlayAgain={resetGame}
              score={clickedEmojisList.length}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmojiGame;
