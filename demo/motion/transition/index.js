import React, {Component} from 'react';

import {Transition} from '../../../src';

export default class TransitionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  handleClick = () => {
    const {show: prevShow} = this.state;
    const show = !prevShow;

    this.setState({show});
  };

  render() {
    const {show} = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Toggle</button>
        <br/>
        <Transition enterClassName='fade-in' exitClassName='fade-out' in={show}>
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
        <br/>
        <Transition enterClassName='slide-in-left' exitClassName='slide-out-right' in={show}>
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
        <br/>
        <Transition
          enterClassName='slide-in-left'
          exitClassName='slide-out-right'
          in={show}
          speed='fast'
        >
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
        <Transition
          enterClassName='slide-in-left'
          exitClassName='slide-out-right'
          in={show}
          speed='slow'
        >
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
        <Transition
          delay='short'
          enterClassName='slide-in-left'
          exitClassName='slide-out-right'
          in={show}
        >
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
        <Transition
          delay='long'
          enterClassName='slide-in-left'
          exitClassName='slide-out-right'
          in={show}
        >
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
        <Transition
          easing='ease-in-out'
          enterClassName='slide-in-left'
          exitClassName='slide-out-right'
          in={show}
        >
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
        <Transition
          easing='bounce-in-out'
          enterClassName='slide-in-left'
          exitClassName='slide-out-right'
          in={show}
        >
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Transition>
      </div>
    );
  }
}
