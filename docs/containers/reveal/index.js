import React, { Component } from 'react';

import { Reveal } from '../../../src/reveal';
import { Button } from '../../../src/button';
import { CloseButton } from '../../../src/close-button';

export default class RevealPage extends Component {
  state = {
    showBasic: false,
    showTiny: false,
    showSmall: false,
    showLarge: false,
    showFull: false,
    showNested1: false,
    showNested2: false,
  };

  handleShowHide = (type, show) => this.setState({ [`show${type}`]: show });

  handleShowBasic = () => this.handleShowHide('Basic', true);

  handleHideBasic = () => this.handleShowHide('Basic', false);

  handleShowTiny = () => this.handleShowHide('Tiny', true);

  handleHideTiny = () => this.handleShowHide('Tiny', false);

  handleShowSmall = () => this.handleShowHide('Small', true);

  handleHideSmall = () => this.handleShowHide('Small', false);

  handleShowLarge = () => this.handleShowHide('Large', true);

  handleHideLarge = () => this.handleShowHide('Large', false);

  handleShowFull = () => this.handleShowHide('Full', true);

  handleHideFull = () => this.handleShowHide('Full', false);

  handleShowNested1 = () => this.handleShowHide('Nested1', true);

  handleHideNested1 = () => this.handleShowHide('Nested1', false);

  handleShowNested2 = () => this.handleShowHide('Nested2', true);

  handleHideNested2 = () => this.handleShowHide('Nested2', false);

  handleShowNoOverlay = () => this.handleShowHide('NoOverlay', true);

  handleHideNoOverlay = () => this.handleShowHide('NoOverlay', false);

  render() {
    const {
      showBasic,
      showTiny,
      showSmall,
      showLarge,
      showFull,
      showNested1,
      showNested2,
      showNoOverlay,
    } = this.state;

    return (
      <div>
        <Button onClick={this.handleShowBasic}>Click me for a Modal</Button>
        <Reveal onHide={this.handleHideBasic} show={showBasic}>
          <CloseButton onClick={this.handleHideBasic} />
          <h1>Awesome. I Have It.</h1>
          <p>Your couch. It is mine.</p>
          <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
        </Reveal>
        <br />
        <Button onClick={this.handleShowTiny}>Click me for a Tiny Modal</Button>
        <Reveal onHide={this.handleHideTiny} show={showTiny} size="tiny">
          <CloseButton onClick={this.handleHideTiny} />
          <p>OH I'M SO TIIINY</p>
        </Reveal>
        <br />
        <Button onClick={this.handleShowSmall}>Click me for a Small Modal</Button>
        <Reveal onHide={this.handleHideSmall} show={showSmall} size="small">
          <CloseButton onClick={this.handleHideSmall} />
          <p>I may be small, but I've got a big heart!</p>
        </Reveal>
        <br />
        <Button onClick={this.handleShowLarge}>Click me for a Large Modal</Button>
        <Reveal onHide={this.handleHideLarge} show={showLarge} size="large">
          <CloseButton onClick={this.handleHideLarge} />
          <p>I'm big, like bear!</p>
        </Reveal>
        <br />
        <Button onClick={this.handleShowFull}>Click me for a Full Screen Modal</Button>
        <Reveal onHide={this.handleHideFull} show={showFull} size="full">
          <CloseButton onClick={this.handleHideFull} />
          <p>OH I'M SO FUUUUL</p>
          <img alt="Intropsective Cage" src="http://placekitten.com/1920/1280" />
        </Reveal>
        <br />
        <Button onClick={this.handleShowNested1}>Click me for a Modal</Button>
        <Reveal onHide={this.handleHideNested1} show={showNested1}>
          <CloseButton onClick={this.handleHideNested1} />
          <h1>Awesome!</h1>
          <p>I have another modal inside of me!</p>
          <Button onClick={this.handleShowNested2}>Click me for another Modal</Button>
        </Reveal>
        <Reveal onHide={this.handleHideNested2} show={showNested2}>
          <CloseButton onClick={this.handleHideNested2} />
          <h2>ANOTHER MODAL!!!</h2>
        </Reveal>
        <br />
        <Button onClick={this.handleShowNoOverlay}>Click me for an overlay-lacking Modal</Button>
        <Reveal onHide={this.handleHideNoOverlay} overlay={false} show={showNoOverlay}>
          <CloseButton onClick={this.handleHideNoOverlay} />
          <p>I feel so free!</p>
        </Reveal>
      </div>
    );
  }
}
