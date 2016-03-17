import React from 'react';

import { Callout } from '../../../src/callout';

const CalloutPage = () => (
  <div>
    <Callout>
      <h5>This is a callout.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <Callout color="secondary">
      <h5>This is a secondary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <Callout color="primary">
      <h5>This is a primary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <Callout color="success">
      <h5>This is a success panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <Callout color="warning">
      <h5>This is a warning panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <Callout color="alert">
      <h5>This is a alert panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <Callout color="primary" size="small">
      <h5>This is a primary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <Callout color="primary" size="large">
      <h5>This is a primary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
  </div>
);

export default CalloutPage;
