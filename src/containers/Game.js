import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import NewGameButton from '../components/NewGameButton'

// import components later and also the Game.css
import UserInput from '../components/UserInput'
import Title from '../components/Title'
import Word from '../components/Word'

class Game extends PureComponent {
  render() {
    return (
      <div className="Game">
      <Word />
        <div id="flexBox">
          <Title />
          <Word />
        </div>
        <NewGameButton />
      </div>
    );
  }
}

export default connect()(Game)
