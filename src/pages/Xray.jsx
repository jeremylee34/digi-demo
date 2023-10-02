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

// TODO: Make an animal detector - only dogs and fish allowed
// this is the component that this file is returning to our screen
const Xray = () => {
  // the textfield value 
  const [inputText, setInputText] = useState('');
  // image to be displayed
  const [image, setImage] = useState(xray);

  // checks the inputText value and sets the image based on inputText value
  // e.g., does inputText contain 'dog', 'fish', or both/none?
  function checkText() {
    // convert text input to lower case for easier comparison below
    const lowercaseText = inputText.toLowerCase();
    // declaring a mutable (changeable) variable
    let imageSrc;

    // if the text includes 'dog' and 'fish'
    if (lowercaseText.includes('dog') && lowercaseText.includes('fish')) {
      // set imageSrc to dog (imported at the top)
      imageSrc = dogfish;

    // if the text includes 'dog'
    } else if (lowercaseText.includes('dog')) {
      imageSrc = dog;

    // if the text includes 'fish'
    } else if (lowercaseText.includes('fish')) {
      imageSrc = fish;

    // if there is no text (length 0)
    } else if (lowercaseText.length === 0) {
      imageSrc = empty;

    // if none of the above are matched then return mike
    }  else {
      imageSrc = mike;
    }

    // finally set the image state variable to imageSrc
    setImage(imageSrc);
  };

  // Function runs whenever user enters in input
  function handleKeyPress(event) {
    // If user presses enter key, checks over text 
    if (event.key === 'Enter') {
      checkText();
    }
  };

  return (
    <div className='container'>
      <h1 className='header'>list your bag contents below. can only detect dog or fishes unfortunately</h1>
      <input
        type="text"
        placeholder="let's xray something..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={checkText}>Check</Button>
      <div class='img-container'>
        <img src={image} alt="Image" />
      </div>
    </div>
  );
};


export default Xray
