import React, { Component } from 'react';

import { Tooltip, HasTooltip } from '../../../src';

const tooltipStyle = {
  position: 'relative',
  top: '20px',
  left: '50px',
  marginBottom: '25px',
};

export default class TooltipPage extends Component {
  render() {
    return (
      <div>
        <h1>Tooltips</h1>
        <p>
          Tooltips are used for displaying extended information for a term or action on a page.
        </p>
        <h2>Basics</h2>
        <p>Importing the Tooltip component:</p>
        <pre>
          <code>
{
`import { Tooltip, HasTooltip } from 'react-foundation-components/lib/media/tooltip';`
}
          </code>
        </pre>
        <p>
          By default, the Tooltip component is a bottom tooltip. Use the <code>position</code> prop
          to change this. Possible values are bottom, top, left and right.
        </p>
        <pre>
          <code>
{
`<Tooltip>I'm a bottom tooltip!</Tooltip>
<Tooltip position="bottom">I'm also a bottom tooltip!</Tooltip>
<Tooltip position="top">I'm a top tooltip!</Tooltip>
<Tooltip position="left">I'm a left tooltip!</Tooltip>
<Tooltip position="right">I'm a right tooltip!</Tooltip>`
}
          </code>
        </pre>
        <Tooltip style={tooltipStyle}>I'm a bottom tooltip!</Tooltip>
        <Tooltip position="bottom" style={tooltipStyle}>I'm also a bottom tooltip!</Tooltip>
        <Tooltip position="top" style={tooltipStyle}>I'm a top tooltip!</Tooltip>
        <Tooltip position="left" style={tooltipStyle}>I'm a left tooltip!</Tooltip>
        <Tooltip position="right" style={tooltipStyle}>I'm a right tooltip!</Tooltip>
        <p>
          In majority of use cases, a Tooltip component will be associated to some text
          or other component on the page. Add a tooltip to your text or component with the
          HasTooltip higher order component. The tooltip content is set using
          the <code>tooltip</code> prop on the HasTooltip component. The tooltip position is set
          using the <code>tooltipPosition</code> prop.
        </p>
        <pre>
          <code>
{
`<HasTooltip tooltip="I am a bottom tooltip!">
  I have a <strong>bottom</strong> tooltip!
</HasTooltip>
<HasTooltip tooltip="I am also a bottom tooltip!" tooltipPosition="bottom">
  I also have a <strong>bottom</strong> tooltip!
</HasTooltip>
<HasTooltip tooltip="I am a top tooltip!" tooltipPosition="top">
  I have a <strong>top</strong> tooltip!
</HasTooltip>
<HasTooltip tooltip="I am a left tooltip!" tooltipPosition="left">
  I have a <strong>left</strong> tooltip!
</HasTooltip>
<HasTooltip tooltip="I am a right tooltip!" tooltipPosition="right">
  I have a <strong>right</strong> tooltip!
</HasTooltip>`
}
          </code>
        </pre>
        <HasTooltip tabIndex="1" tooltip="I am a bottom tooltip!">
          I have a <strong>bottom</strong> tooltip!
        </HasTooltip>
        &nbsp;&nbsp;&nbsp;
        <HasTooltip tabIndex="1" tooltip="I am also a bottom tooltip!" tooltipPosition="bottom">
          I also have a <strong>bottom</strong> tooltip!
        </HasTooltip>
        &nbsp;&nbsp;&nbsp;
        <HasTooltip tabIndex="1" tooltip="I am a top tooltip!" tooltipPosition="top">
          I have a <strong>top</strong> tooltip!
        </HasTooltip>
        &nbsp;&nbsp;&nbsp;
        <HasTooltip tabIndex="1" tooltip="I am a left tooltip!" tooltipPosition="left">
          I have a <strong>left</strong> tooltip!
        </HasTooltip>
        &nbsp;&nbsp;&nbsp;
        <HasTooltip tabIndex="1" tooltip="I am a right tooltip!" tooltipPosition="right">
          I have a <strong>right</strong> tooltip!
        </HasTooltip>
        <h2>Accessibility</h2>
        <p>
          If the <code>tooltipId</code> prop is set, the HasTooltip
          higher order component will set <code>aria-describedby</code> on its
          child and set <code>id</code> on its tooltip.
        </p>
        <pre>
          <code>
{
`<HasTooltip
  tabIndex="1"
  tooltip="I am a long tooltip! My text keeps going on and on and on and on, when I'll
           finish who knows! I also have an id for accessibility!"
  tooltipId="myTooltip"
  tooltipPosition="top"
>
  I have an <strong>accessible</strong> tooltip!
</HasTooltip>`
}
          </code>
        </pre>
        <HasTooltip
          tabIndex="1"
          tooltip="I am a long tooltip! My text keeps going on and on and on and on, when I'll
                   finish who knows! I also have an id for accessibility!"
          tooltipId="myTooltip"
          tooltipPosition="top"
        >
          I have an <strong>accessible</strong> tooltip!
        </HasTooltip>
      </div>
    );
  }
}
