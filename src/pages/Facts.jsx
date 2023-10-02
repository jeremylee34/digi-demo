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

  // TODO: Make a state variable to keep track of the cat fact being displayed
  // catFact holds the current fact (string) being shown, setCatFact changes this 
  
  // TODO: Make a state variable to keep track of the current index of the catPic array
  
  // TODO: Make a state variable to check if fact button has been clicked - to keep track of when to change the button label   
  // TODO: Complete this function (will run whenever we want the button to be clicked)
  function handleClick() {
    // TODO: Change button clicked to true (which changes the label)
    
    // TODO: Pick a random decimal between 0.0 and 1.0, multiply it by length of catFacts array (0.0-19.0) and then round it down to nearest whole number (hint: Math library)

    // TODO: Set the current cat fact to the fact at random index (from before)

    // TODO: Show the next cat picture in order if we aren't about to hit the end of the array    }

}
  return (
    // TODO: Put JSX here
    <div className='container'>
      fax
    </div>
  )
}

export default Facts