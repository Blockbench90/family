import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRedo, faSlidersH,} from '@fortawesome/free-solid-svg-icons';
import audio from '../utils/audio';
import Header from './Header';
import PropTypes from 'prop-types';
import FavoriteIcon from "@material-ui/icons/Favorite";

function Finish({bg, errors, stop, start}) {

  useEffect(() => {
    audio.play('cheer');
  }, [])

  return (
    <div className={"finish " + bg}>
      
      <div className="content">
        <Header />
        <h3>Поздравляю! <span aria-label="clap" role="img">🥳🥳🥳</span></h3>
        <p>Ты дал в штангу всего-то<strong>{errors}</strong> раз</p>
        <nav>  
          <button onClick={start}>
            <FontAwesomeIcon icon={faRedo} />
            Перезапуск
          </button>
          <button onClick={stop}>
            <FontAwesomeIcon icon={faSlidersH} />
            Опции
          </button>
          <a className="button" href="https://www.instagram.com/maxim.zpua">
            <FavoriteIcon />
            Лайкнуть
          </a>
        </nav>
      </div>
    </div>
  )
}

Finish.propTypes = {
  bg: PropTypes.string.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
  errors: PropTypes.number,
}

export default Finish;