import React from 'react';

import { ProgressBar } from '../../../src/progress-bar';

function percentFormatter(percent) {
  const rounded = Math.round(percent * 100);

  return `${rounded}%`;
}

function complexFormatter(percent, value, min, max) {
  return `percent = ${percent}, value = ${value}, min = ${min}, max = ${max}`;
}

const ProgressBarPage = () => (
  <div>
    <h1>Progress Bar</h1>
    <p>
      Show your progress.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the ProgressBar component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { ProgressBar } from 'react-foundation-components/lib/progress-bar';

or

// Import with global scoped class names
import { ProgressBar } from 'react-foundation-components/lib/global/progress-bar';`
}
      </code>
    </pre>
    <p>
      Set the <code>value</code> prop to specify the current progress value (defaults to 0).
      Set the <code>min</code> and/or <code>max</code> props to change the minimum/maximum
      possible values for progress bar (defaults to 0 and 100 respectively).
    </p>
    <pre>
      <code>
{
`<ProgressBar/>
<ProgressBar value={25} />
<ProgressBar value={50} />
<ProgressBar value={75} />
<ProgressBar value={100} />
<ProgressBar max={200} min={50} value={100} />`
}
      </code>
    </pre>
    <ProgressBar />
    <ProgressBar value={25} />
    <ProgressBar value={50} />
    <ProgressBar value={75} />
    <ProgressBar value={100} />
    <ProgressBar max={200} min={50} value={100} />
    <hr />
    <h2>Coloring</h2>
    <p>
      Give a Badge additional meaning by setting the <code>color</code> prop. Possible values
      are primary, secondary, success, alert and warning.
    </p>
    <pre>
      <code>
    {
`<ProgressBar color="primary" value={20} />
<ProgressBar color="secondary" value={40} />
<ProgressBar color="success" value={60} />
<ProgressBar color="warning" value={80} />
<ProgressBar color="alert" value={100} />`
    }
      </code>
    </pre>
    <ProgressBar color="primary" value={20} />
    <ProgressBar color="secondary" value={40} />
    <ProgressBar color="success" value={60} />
    <ProgressBar color="warning" value={80} />
    <ProgressBar color="alert" value={100} />
    <hr />
    <h2>With Text</h2>
    <p>
      You can add text inside the meter of a progress bar by providing
      a <code>labelFormatter</code> function. The function takes 4 arguments: (1) the calculated
      percent, (2) the curent value (adjusted to make sure it falls within the min and max), (3)
      the minimum value and (4) the maximum value.
    </p>
    <pre>
      <code>
    {
`function complexFormatter(percent, value, min, max) {
return \`percent = \${percent}, value = \${value}, min = \${min}, max = \${max}\`;
}

function percentFormatter(percent) {
const rounded = Math.round(percent * 100);

return \`\${rounded}%\`;
}

<ProgressBar labelFormatter={complexFormatter} value={50}/>
<ProgressBar labelFormatter={percentFormatter} max={200} min={50} value={150}/>`
    }
      </code>
    </pre>
    <ProgressBar labelFormatter={complexFormatter} value={50} />
    <ProgressBar labelFormatter={percentFormatter} max={200} min={50} value={150} />
  </div>
);

export default ProgressBarPage;
