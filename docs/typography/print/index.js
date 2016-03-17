import React from 'react';

import { ShowForPrint, HideForPrint } from '../../../src/print';

const PrintPage = () => (
  <div>
    <ShowForPrint>You can see me when printing!</ShowForPrint>
    <br />
    <HideForPrint>You can not see me when printing!</HideForPrint>
  </div>
);

export default PrintPage;
