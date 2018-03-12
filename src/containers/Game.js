import { connect } from 'react-redux'
// import components later and also the Game.css

class GameContainer extends Component {
  render() {
    return (
      <div className="Game">
      <Word />
        <div id="flexBox">
          <SubmitGuess />
          <Statbox />
        </div>
        <NewGameButton />
      </div>
    );
  }
}

export default connect()(Game)
