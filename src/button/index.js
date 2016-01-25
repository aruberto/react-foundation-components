import React, {Component} from 'react';

import style from './style';

export default class Button extends Component {
  render() {
    return (
      <button className={style.button}>Hello World!</button>
    );
  }
}
