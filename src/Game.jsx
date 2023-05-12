import { useState } from 'react';
import JSConfetti from 'js-confetti'
import { Overlay } from './Overlay';

const canvas = document.getElementById('your_custom_canvas_id')

const jsConfetti = new JSConfetti({ canvas })



 

// const scrambledWords = {
//   TISE: 'ties',
//   FECOITNAF: 'affection',
//   BIGODNN: 'bonding',
//   CMIYTNAI: 'intimacy',
//   RSUTT: 'trust',
//   TIAEAPPCRE: 'appreciate',
// };
const scrambledWords = {
    TISE: {
    word: 'ties',
    hint: "A word that refers to the connection between two things or people, often used to describe something that is tightly bound together. Men often wear this around their necks",
    sc: 'TISE'
    },
    FECOITNAF: {
    word: 'affection',
      hint: "Conveys a strong feeling of love, tenderness, and caring towards someone",
    sc: 'FECOITNAF'
    },
    BIGODNN: {
    word: 'bonding',
      hint: "It's a word that refers to the process of developing a close connection with someone. It often involves sharing experiences, feelings, and thoughts, and can help strengthen the bond between two people.",
    sc: 'BIGODNN'
    },
    CMIYTNAI: {
    word: 'intimacy',
      hint: "It's a word that refers to a close, personal connection between two people, both physically and emotionally. It's an essential part of a romantic relationship, and can involve things like sharing feelings, experiences, and desires with your partner, as well as physical touch and affection.",
    sc: 'CMIYTNAI'
    },
    RSUTT: {
    word: 'trust',
      hint: "A crucial element of any healthy relationship. It involves having faith in your partner, believing that they will be honest and faithful to you, and feeling secure in the knowledge that they have your best interests at heart. Trust can take time to develop, but it's essential for building a strong and lasting relationship.",
    sc: 'RSUTT'
    },
    TIAEAPPCRE: {
    word: 'appreciate',
      hint: "Conveys a feeling of gratitude and recognition for someone.",
    sc: 'TIAEAPPCRE'
    },
    };
const Game = () => {
  const [values, setValues] = useState(
    Object.keys(scrambledWords).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {}
    )
  );
    
  const [currentScrambled, setCurrentScrambled] = useState('');
  const [currentScrambledWord, setCurrentScrambledWord] = useState('');


  const handleChange = (event, key) => {
    const inputValue = event.target.value.toLowerCase();
    const { word, hint } = scrambledWords[key];
    const isCorrect = inputValue === word;

    console.log(isCorrect)

    setValues({ ...values, [key]: inputValue });

    event.target.classList.remove('border-red-500', 'border-green-500');
      event.target.classList.add(isCorrect ? 'border-green-500' : 'border-red-500');
      
      if (isCorrect) {
        event.target.style.color = 'green';
      } else {
        event.target.style.color = 'red';
      }


  };

  const isAllCorrect = Object.keys(scrambledWords).every(
    (key) => values[key].toLowerCase() === scrambledWords[key].word.toLowerCase()
  );
  

    if (isAllCorrect) {
        const addConfettiLoop = () => {
            jsConfetti.addConfetti({
                confettiColors: [
                  '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
                ],
              })
            setTimeout(addConfettiLoop, 1000); // add confetti every 2 seconds
        };
        
        addConfettiLoop();

          
    }

    const handleFocus = (event, key) => {
      const { hint } = scrambledWords[key];
      const { sc } = scrambledWords[key];

      setCurrentScrambled(hint);
      setCurrentScrambledWord(sc);
    };
  
  return (
      <div className='' id='your_custom_canvas_id'>
       {isAllCorrect &&   <Overlay/>}
      <p className="text-lg" style={{lineHeight: '50px'}} >
        My dearest , the{' '}
        <input
          type="text"
          className="inline w-16  border-b-2 h-8 border-gray-500 focus:outline-none focus:border-blue-500"
          value={values.TISE}
                  onChange={(event) => handleChange(event, 'TISE')}
                  onFocus={(event) => handleFocus(event, 'TISE')}

        />{' '}
        that bind us are unbreakable, a testament to the strength of our bond. Our{' '}
        <input
          type="text"
          className="inline w-24 border-b-2 h-8 border-gray-500 focus:outline-none focus:border-blue-500"
          value={values.FECOITNAF}
                  onChange={(event) => handleChange(event, 'FECOITNAF')}
                  onFocus={(event) => handleFocus(event, 'FECOITNAF')}
        />{' '}
        for each other grows deeper with every passing day, and our{' '}
        <input
          type="text"
          className="inline w-20 border-b-2 h-8 border-gray-500 focus:outline-none focus:border-blue-500"
          value={values.BIGODNN}
                  onChange={(event) => handleChange(event, 'BIGODNN')}
                  onFocus={(event) => handleFocus(event, 'BIGODNN')}
        />{' '}
        experiences have only strengthened our connection. The{' '}
        <input
          type="text"
          className="inline w-20 border-b-2 h-8 border-gray-500 focus:outline-none focus:border-blue-500"
          value={values.CMIYTNAI}
                  onChange={(event) => handleChange(event, 'CMIYTNAI')}
                  onFocus={(event) => handleFocus(event, 'CMIYTNAI')}
        />{' '}
        we share is a sacred gift that we cherish above all else, and the{' '}
        <input
          type="text"
          className="inline w-12 border-b-2 h-8 border-gray-500 focus:outline-none focus:border-blue-500"
          value={values.RSUTT}
                  onChange={(event) => handleChange(event, 'RSUTT')}
                  onFocus={(event) => handleFocus(event, 'RSUTT')}
        />{' '}
        we have in each other is unwavering and true. I want you to know how much I{' '}
        <input
          type="text"
          className="inline w-28 border-b-2 h-8 border-gray-500 focus:outline-none focus:border-blue-500"
          value={values.TIAEAPPCRE}
                  onChange={(event) => handleChange(event, 'TIAEAPPCRE')}
                  onFocus={(event) => handleFocus(event, 'TIAEAPPCRE')}
        />{' '}
        every moment we spend together, no matter the distance. You are the love of my life, and I thank the universe every day for bringing us together.
          </p>
          

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem 0'
      }}>
        <p className='text-blue-600'>

        {currentScrambledWord}
        </p>
        <p>

              {currentScrambled}
        </p>
          </div>

       
        </div>

  )
}


export default Game;
