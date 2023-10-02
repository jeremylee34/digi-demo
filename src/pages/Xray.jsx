import { useState, React } from 'react';

// importing our custom button
import Button from '../components/Button';

// importing pics
import dog from '../images/xray/dog.jpg';
import fish from '../images/xray/fish.jpg';
import dogfish from '../images/xray/dogfish.jpg';
import xray from '../images/xray/xray.jpg';
import mike from '../images/xray/mike.jpg';
import empty from '../images/xray/empty.webp';

// Make an animal detector - only dogs and fish allowed
// this is the component that this file is returning to our screen
const Xray = () => {
  // TODO: store the textfield value in the inputText state variable
  // defaulted to an empty string

  // TODO: state variable of image to be displayed
  // defaulted to the xray pic


  // checks the inputText value and sets the image based on inputText value
  // e.g., does inputText contain 'dog', 'fish', or both/none?
  function checkText() {
    // TODO: store the inputText state variable in lowercaseText for easier comparison   
    

    // TODO: declare a mutable (changeable) variable called imageSrc


    // TODO: check cases against lowercaseText and assign the right image to imageSrc


    // TODO: finally set the image state variable to imageSrc

  };

  // // Function runs whenever user enters in input
  // function handleKeyPress(event) {
  //   // If user presses enter key, checks over text 
  //   if (event.key === 'Enter') {
  //     checkText();
  //   }
  // };

  return (
    <div className='container'>
      xray slayyyy
    </div>
  );
};


export default Xray
