import React, {useState} from 'react';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Smile } from 'react-feather';


import './Input.css';



const Input = ({ setMessage, sendMessage, message}) => {
  
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onPickerClick = () => setShowEmojiPicker(!showEmojiPicker);

  function addEmoji(emoji) {
    const newMessage = message;
    const text = `${newMessage}${emoji.native}`;

    setMessage(text);
    setShowEmojiPicker(false);
  }
  
  return (
<form className="form">
        <button
                    type="button"
                    className="toggle-emoji"
                    onClick={() => {
                      setShowEmojiPicker(!showEmojiPicker);
                    }}>
                    <Smile />
          </button>
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    {/* {showEmojiPicker ? (
                  <
        ) : null } */}
        <div className="emojiTab" style={{ display: showEmojiPicker ? "block" : "none" }}>
        <Picker perLine='6'
        
              onSelect={emoji => {
              addEmoji(emoji);
        }} />
        </div>
        
  </form>
  )
  }

export default Input;