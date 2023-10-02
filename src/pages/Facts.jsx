import { useState, React } from 'react';
// Import custom button component 
import Button from '../components/Button';
// Import style sheet
import './Facts.css';
// Import cat facts string array + cat pic array
import { catFacts, catPics } from '../assets/cats'

// TODO: Make a random cat fact generator 
// this is the component that this file is returning to our screen
const Facts = () => {
  // Put main logic/hooks here 

  // State variable to keep track of the cat fact being displayed
  // catFact holds the current fact (string) being shown, setCatFact changes this 
  const [catFact, setCatFact] = useState(null); 
  
  // State variable to keep track of the current index of the catPic array
  const [picNumber, setPicNumber] = useState(0);
  
  // State variable to check if fact button has been clicked - to keep track of when to change the button label 
  const [buttonClicked, setButtonClicked] = useState(false);
  
  // Runs whenever fact button is clicked 
  function handleClick() {
    // Change button clicked to true (which changes the label)
    if(!buttonClicked) setButtonClicked(true);
    
    // Pick a random decimal between 0.0 and 1.0, multiply it by length of catFacts array (0.0-19.0)
    // and then round it down to nearest whole number (Math.floor())
    const randIndex = Math.floor(Math.random() * catFacts.length);
    // sets the resulting index (whole number between 0-19)
    setCatFact(catFacts[randIndex]);

    // Show the next cat picture in order if we aren't about to hit the end of the array
    if (picNumber < 19) {
      // increments upon the previous value (denoted by prev)
      // we dont do setPicNumber(picNumber + 1) because it causes issues
      setPicNumber(prev => prev + 1)
    } else {
      // if we are abt to hit end array, reset index to 0 (first pic)
      setPicNumber(0)
    }
  }

  return (
    // Put JSX here
    <div className='container'>
      <div className='img-container'>
        <img src={catPics[picNumber]} alt='cat pic'/>
      </div>
      <Button
        onClick={handleClick}
      >
        {buttonClicked ? 'Another one 🗿' : 'Press to get a cool cat fact!'}
      </Button>
      <h1 className='cat-fact'>{catFact}</h1>
    </div>
  )
}

export default Facts