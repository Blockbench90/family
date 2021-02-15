import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ava from "../assets/RockyBoy.png"

function Card({bg, onClick, selected, value, flipping, matched}) {

  function click(e) {
    if (!selected && !matched && !flipping) {
      onClick();
    }
  }

  const classes = classNames({
    card: true,
    [`${bg}`]: true,
    selected,
    flipping,
    matched,
  })

  return (
    <div onClick={click} className={classes}>
      <div className="back">
        <img src={ava} alt="amg"/>
      </div>
      <div className="front">
        <img src={value} alt="amg"/>
      </div>
    </div>
  )
}

Card.propTypes = {
  bg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  flipping: PropTypes.bool,
  matched: PropTypes.bool,
  value: PropTypes.string,
};

export default Card;
