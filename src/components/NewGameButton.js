import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewGameButton from '../components/NewGameButton'
import Title from '..components/Title'

class NewGameButton extends Component {


  handleClick = () => { this.props.newGame(word)}

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
