import React, {Component} from 'react';

import {Tooltip, HasTooltip} from '../../../src';

const tooltipStyle = {position: 'relative', top: '20px', left: '50px'};

export default class TooltipPage extends Component {
  render() {
    return (
      <div>
        <Tooltip style={tooltipStyle}>I'm a bottom tooltip!</Tooltip>
        <br/>
        <Tooltip position='top' style={tooltipStyle}>I'm a top tooltip!</Tooltip>
        <br/>
        <Tooltip position='left' style={tooltipStyle}>I'm a left tooltip!</Tooltip>
        <br/>
        <Tooltip position='right' style={tooltipStyle}>I'm a right tooltip!</Tooltip>
        <br/>
        <br/>
        <p>
          This is a bottom tooltip demo and&nbsp;
          <HasTooltip tabIndex='1' tooltip='I am a bottom tooltip!'>
            I have a <strong>bottom</strong> tooltip!
          </HasTooltip>
          &nbsp;
          This is a left tooltip demo and&nbsp;
          <HasTooltip tabIndex='1' tooltip='I am a left tooltip!' tooltipPosition='left'>
            I have a <strong>left</strong> tooltip!
          </HasTooltip>
          &nbsp;
          This is a top tooltip demo and&nbsp;
          <HasTooltip tabIndex='1' tooltip='I am a top tooltip!' tooltipPosition='top'>
            I have a <strong>top</strong> tooltip!
          </HasTooltip>
          &nbsp;
          This is a right tooltip demo and&nbsp;
          <HasTooltip tabIndex='1' tooltip='I am a right tooltip!' tooltipPosition='right'>
            I have a <strong>right</strong> tooltip!
          </HasTooltip>
          &nbsp;
          This is a long tooltip demo and&nbsp;
          <HasTooltip
            tabIndex='1'
            tooltip={
              <span id='myTooltip'>
                I am a long tooltip! My text keeps going on and on and on and on,
                when I'll finish who knows! I also have an id for accessibility!
              </span>
            }
          >
            I have a <strong>long</strong> tooltip!
          </HasTooltip>
        </p>
      </div>
    );
  }
}
