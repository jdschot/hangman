import React, { Component } from 'react';
import { connect } from 'react-redux'

class NewGameButton extends Component {


  handleClick = () => { this.props.newGame(wordToGuess)}

  render() {

    return (
      <button
        onClick={this.handleClick}
        className="newGameButton">
        New Game
      </button>

    );
  }
}

export default connect(null, {newGame})(NewGameButton)
