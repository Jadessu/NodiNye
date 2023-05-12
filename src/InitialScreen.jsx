import React, { useState } from 'react';

const InitialScreen = ({ setShowGame }) => {
  const [paragraphIndex, setParagraphIndex] = useState(0); // Initialize paragraph index to 0

  const paragraphs = [
    <p key={0}>
      Hey there, babe! I know you are not feeling too well today, and I just wanted to let you know that I&apos;m thinking of you and sending you lots of love and positive energy. As a little pick-me-up, I created this game just for you!

      The goal of the game is simple: have fun and enjoy yourself! There&apos;s no pressure to be the best or win any prizes. The only thing that matters is that you feel happy and relaxed while you play.

      So sit back, relax, and let yourself be immersed in this game. I hope it brings a smile to your face and helps you feel a little bit better. Remember that you&apos;re amazing and strong, and I&apos;m always here for you. Enjoy!
    </p>,

    <p key={1}>
        This is a game where you are presented with scrambled words, each with a hint to guide you to the correct answer. To play, you must unscramble the words and type in your answer in the input fields. There are six words in total. When you input your answer, the border of the input field will change to green if you got the answer right and to red if you got it wrong. If you click on an input field, a hint for the corresponding scrambled word will appear. 
        
    </p>,
    <p key={3}>
As a bonus, there is a hidden word in the answers. If you find it, you can tell me what the word is :)
        
    </p>
  ];

  const handleNext = () => {
    setParagraphIndex((prevIndex) => prevIndex + 1); // Increment paragraph index
    if (paragraphIndex === 2) {
    setShowGame(true)
    }
  };
  

  const handlePrevious = () => {
    setParagraphIndex((prevIndex) => prevIndex - 1); // Decrement paragraph index
  };
    
    console.log(paragraphIndex)

  return (
    <div className="overlay-container">
      {paragraphs[paragraphIndex]}

      <div className='button-container'>
       {!paragraphIndex === 0 && <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2' onClick={handlePrevious} disabled={paragraphIndex === 0}>Previous</button>}
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleNext} >{paragraphIndex === paragraphs.length - 1 ? 'Start Game' : 'Next'}</button>
      </div>
    </div>
  );
};

export default InitialScreen;
