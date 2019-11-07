import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './Message';
import './style.css';
const URL = 'ws://localhost:3030';

class Chat extends Component{
  state = {
    name: '',
    messages: [],
  }

  ws = new WebSocket(URL);

  componentDidMount(){
    this.ws.onopen = () => {
      //informs user it is connected in this case the console
      console.log('connected');
    }
    this.ws.onmessage = evt => {
      //updates message listing
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    }
    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically tries to reconnect on a connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message => this.setState(state => ({ messages: [message, ...state.messages]}))


  submitMessage = messageString => {
    //add it to the list and reset the ChatInput
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  }

  render(){
    return(
      <div id="help" class ="flex-container">
        <div id="information">
          <label htmlFor="name">
            Name: &nbsp;
            <input type="text" id = {'name'} placeholder ={'Enter your name.'} value ={this.state.name} onChange={e=>this.setState({name: e.target.value})} />
          </label>
        </div>
        <div id="textBox">
          <ChatInput ws={this.ws} onSubmitMessage={messageString=> this.submitMessage(messageString)} />
          {this.state.messages.map((message, index)=>
          <ChatMessage key={index} message={message.message} name={message.name} />,)}
        </div>
      </div>
    )
  }
}

export default Chat
