import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const myWords = [
    "My love",
    "My world",
    "My one and only",
    "My heart",
    "My soulmate",
    "My dearest",
    "My darling",
    "My everything",
    "My sunshine",
    "My sweetie",
    "My precious",
    "My angel",
    "My life",
    "My reason for living",
    "My better half",
    "My rock",
    
    "My Queen",
    "My forever",
    "My soul",
    "My muse",
    "My treasure",
    "My dream come true",
    "My joy",
    "My happiness",
    "My light",
    "My inspiration",
    "My all",
    "My heartbeat",
    "My nodi"
];

  
const MyWordsLoop = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex(currentWordIndex => (currentWordIndex + 1) % words?.length);
      }, 300);
      return () => clearInterval(interval);
    }, [words]);
  
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center text-7xl font-bold">
        <h1 className="text-white">Congratulations {words[currentWordIndex]}</h1>
      </div>
    );
};
MyWordsLoop.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
export const Overlay = () => {
  return (
      <div><MyWordsLoop words={ myWords} /></div>
  )
}
