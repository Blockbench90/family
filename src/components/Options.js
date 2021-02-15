import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Header from './Header';
import PropTypes from 'prop-types';

function Options({children, start, bg}) {

  return (
    <main className={"app " + bg}>
      <Header />
      <nav>  
        <button onClick={start}>
          <FontAwesomeIcon icon={faPlay} style={{color: 'aqua'}} />
          Играть
        </button>
        <a className="button" href="https://www.instagram.com/maxim.zpua">
          <FavoriteIcon style={{color: 'aqua'}} />
          Лайкнуть
        </a>
      </nav>
      
      <ul className="deck options fadein">
        {children}
      </ul>
    </main>
  )
};

Options.propTypes = {
  start: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
}

export default Options;