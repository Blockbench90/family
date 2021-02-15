import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRandom} from '@fortawesome/free-solid-svg-icons'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Header from './Header';
import useGame from '../utils/useGame';
import PropTypes from 'prop-types';

function Game({bg, stop, finish}) {
  const [cards, reshuffle, errors, finished] = useGame(bg);

  useEffect(() => {
    if (finished) finish(errors);
  }, [finished]);

  return (
    <main className={"game " + bg}>
      <Header />
      <nav>
        <button onClick={stop}>
          <ArrowBackIcon />
          Назад
        </button>
        <span className="errors">
          Дал в штанг, уже: <strong>{errors}</strong> раз!
        </span>
        <button onClick={reshuffle}>
          <FontAwesomeIcon icon={faRandom} />
          Перетасовать
        </button>
      </nav>
      <div className="deck fadein">
        {cards}
      </div>
    </main>
  )
}

Game.propTypes = {
  bg: PropTypes.string.isRequired,
  stop: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
}

export default Game;