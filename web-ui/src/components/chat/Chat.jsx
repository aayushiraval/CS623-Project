// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { Component } from 'react';
import * as config from '../../config';

// Components
import VideoPlayer from '../videoPlayer/VideoPlayer';
import SignIn from './SignIn';

<<<<<<< HEAD
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

// Styles
import * as styles from './Chat.css';
=======
// Styles
import './Chat.css';
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2

class Chat extends Component {
	
  constructor() {
    super ();
    this.state = {
      metadataId: null,
      showSignIn: false,
      username: '',
      message: '',
      messages: [],
<<<<<<< HEAD
      showEmojis: false,
=======
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
      connection: null,
	   selectedFile: null
	   
    }
    this.chatRef = React.createRef();
    this.messagesEndRef = React.createRef();
  }

<<<<<<< HEAD
  showEmojis = e => {
    this.setState(
      {
        showEmojis: !this.state.showEmojis
      }
    );
  };

  closeMenu = e => {
    console.log(this.emojiPicker);
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState(
        {
          showEmojis: false
        },
        () => document.removeEventListener("click", this.closeMenu)
      );
    }
  };

=======
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
  componentDidMount() {
    const connection = new WebSocket(config.CHAT_WEBSOCKET);
    connection.onopen = (event) => {
      console.log("WebSocket is now open.");
    };

    connection.onclose = (event) => {
      console.log("WebSocket is now closed.");
    };

    connection.onerror = (event) => {
      console.error("WebSocket error observed:", event);
    };

    connection.onmessage = (event) => {
      // append received message from the server to the DOM element 
      const messages = this.state.messages;
      const data = event.data.split('::');
      const username = data[0];
<<<<<<< HEAD
      const incoming = this.state.username == username ? '' : 'incomingColor';
=======
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
      const message = data.slice(1).join('::'); // in case the message contains the separator '::'

      messages.push({
        timestamp: Date.now(),
        username,
<<<<<<< HEAD
        message,
        incoming
=======
        message
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
      });

      this.setState({ messages });
    };

    this.setState({ connection });
  }

  componentDidUpdate() {
<<<<<<< HEAD
    //this.scrollToBottom();
=======
    this.scrollToBottom();
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  updateUsername = username => {
    this.setState({ username, showSignIn: false }, () => this.chatRef.current.focus());
  }
  
  handleOnClick = () => {
    const { username } = this.state;
    if (!username) {
      this.setState({ showSignIn: true });
    }
  }

  handleChange = e => {
    this.setState({ message: e.target.value })
  }
 
  handleKeyDown = (e) => {
    if (e.keyCode === 13) { // keyCode 13 is carriage return
      const { username, message, connection } = this.state;
      if (message) {
        const data = `{
          "action": "sendmessage",
          "data": "${username}::${message.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"
        }`;
        connection.send(data);
        
        this.setState({ message: '' });
<<<<<<< HEAD
        this.state.showEmojis && this.showEmojis();
=======
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
      }
    }
  }

  parseUrls = (userInput) => {
    var urlRegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
    let formattedMessage = userInput.replace(urlRegExp, (match) => {
      let formattedMatch = match;
      if (!match.startsWith('http')) {
        formattedMatch = `http://${match}`;
      }
      return `<a href=${formattedMatch} class="chat-line__link" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
    return formattedMessage;
  }
<<<<<<< HEAD

  addEmoji = e => {
    console.log(e);
    let emoji = e.native;
    this.setState({
      message: this.state.message + emoji
    });
  };

=======
  
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
  renderMessages = () => {
    const { messages } = this.state;
    return (
      messages.map(message => {
        let formattedMessage = this.parseUrls(message.message);
        return (
          <div className="chat-line" key={message.timestamp}>
<<<<<<< HEAD
            <p><span className={`username ${message.incoming}`}>{message.username}</span><span dangerouslySetInnerHTML={{__html: formattedMessage}} /></p>
=======
            <p><span className="username">{message.username}</span><span dangerouslySetInnerHTML={{__html: formattedMessage}} /></p>
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
          </div>
        )
      })
    )
  }

  setMetadataId = (metadataId) => {
    this.setState({ metadataId });
  }

  render() {
    const { username, message, showSignIn} = this.state;
    return (
<<<<<<< HEAD
      // <div>
      //   <div className="main full-width full-height chat-container">
      //     <div className="content-wrapper mg-2">
      //       <VideoPlayer setMetadataId={this.setMetadataId} videoStream={config.PLAYBACK_URL} />
      //       <div className="col-wrapper">
      //         <div className="chat-wrapper pos-absolute pd-t-1 top-0 bottom-0">
      //           <div className="messages">
      //             {this.renderMessages()}
      //             <div ref={this.messagesEndRef}></div>
      //           </div>
      //           <div className="composer">
			// 		        <input 
      //             ref={this.chatRef}
      //             className={`rounded ${!username ? 'hidden' : ''}`} 
      //             type="text" 
      //             placeholder="Type Message"
      //             value={message}
      //             maxLength={1000}
      //             onChange={this.handleChange}
      //             onKeyDown={this.handleKeyDown}/>
      //             {!username && (
      //               <fieldset>
      //                 <button onClick={this.handleOnClick} className="btn btn--primary full-width rounded">SEND MESSAGE</button>
      //               </fieldset>
      //             )}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   {showSignIn && 
      //     <SignIn updateUsername={this.updateUsername} />
      //   }
      //   {/* <div style={{ color: "red" }}>{errors}</div> */}
      //   {this.state.showEmojis ? (
      //     <span style={styles.emojiPicker} ref={el => (this.emojiPicker = el)}>
      //       <Picker
      //         onSelect={this.addEmoji}
      //         emojiTooltip={true}
      //         title="weChat"
      //       />
      //     </span>
      //   ) : (
      //     <p style={styles.getEmojiButton} onClick={this.showEmojis}>
      //       {String.fromCodePoint(0x1f60a)}
      //     </p>
      //   )}
      // </div>
      <div className="relPos">
        <VideoPlayer setMetadataId={this.setMetadataId} videoStream={config.PLAYBACK_URL} />
        <div className="absolutePositioned chatContainer">
          <input 
          ref={this.chatRef}
          className={`rounded ${!username ? 'hidden' : ''} darkInput`} 
          type="text" 
          placeholder="Type Message"
          value={message}
          maxLength={1000}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}/>
          {username && (<span className="inlineEmoji" style={styles.getEmojiButton} onClick={this.showEmojis}>
            {String.fromCodePoint(0x1f60a)}
          </span>)}
          {!username && (
              <button onClick={this.handleOnClick} className="btn btn--primary centered">SEND MESSAGE</button>
          )}
          {/* <div style={{ color: "red" }}>{errors}</div> */}
          {this.state.showEmojis && (
            <span style={styles.emojiPicker} ref={el => (this.emojiPicker = el)}>
              <Picker
                onSelect={this.addEmoji}
                emojiTooltip={true}
                title="weChat"
                style={{position: 'fixed', bottom: '60px', right: '0px'}}
              />
            </span>
          )}
          <div className="messages">
            {this.renderMessages()}
            <div ref={this.messagesEndRef}></div>
          </div>
        </div>
        {showSignIn && 
          <SignIn updateUsername={this.updateUsername} />
        }
      </div>
=======
      <React.Fragment>
        <header>
          <h1>Chat App</h1>
        </header>
        <div className="main full-width full-height chat-container">
          <div className="content-wrapper mg-2">
          <VideoPlayer setMetadataId={this.setMetadataId} videoStream={config.PLAYBACK_URL} />
            <div className="col-wrapper">
              <div className="chat-wrapper pos-absolute pd-t-1 top-0 bottom-0">
                <div className="messages">
                  {this.renderMessages()}
                  <div ref={this.messagesEndRef} />
                </div>
                <div className="composer">
					 <input 
                    ref={this.chatRef}
                    className={`rounded ${!username ? 'hidden' : ''}`} 
                    type="text" 
                    placeholder="Type Message"
                    value={message}
                    maxLength={1000}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
					/>
                  {!username && (
                    <fieldset>
                      <button onClick={this.handleOnClick} className="btn btn--primary full-width rounded">SEND MESSAGE</button>
					  <div> 
                
            </div> 
                    </fieldset>
                  )}
                </div>
              </div>
            </div>
          </div>
          {showSignIn && 
            <SignIn updateUsername={this.updateUsername} />
          }
        </div>
      </React.Fragment>
>>>>>>> 1151772a4bdca3caf7f4f19e3b55e8f287789aa2
    )
  }
}

export default Chat;
