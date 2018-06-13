import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';
import Foundation,{Callout,Colors} from 'react-foundation';

class Card extends Component {
  render() {
    return (
      <div className="card">
      <div className="card__content">
        {this.props.quote} {emoji.getUnicode(`${this.props.emoji}`)}
      </div>
      </div>

    )
  }
}

Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
