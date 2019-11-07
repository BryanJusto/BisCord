import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render(){
    return (
      <form
        action="."
        onSubmit={e =>{
        e.preventDefault()
        this.props.onSubmitMessage(this.state.message)
        this.setState({ message: ''})
      }}
    >
    <input type="text"
      placeholder={'Enter message. . .'}
      value={this.state.message}
      onChange={e => this.setState({ message: e.target.value })}
    />
    <input type ="submit" value={'Send'}/>
    </form>
    )
  }
}

export default ChatInput

//this component receives one prop onSubmitMessage from the chat component we're about to create, which is called when the form is submitted
//additionally it gets cleared afterwards this is essentially the input area
