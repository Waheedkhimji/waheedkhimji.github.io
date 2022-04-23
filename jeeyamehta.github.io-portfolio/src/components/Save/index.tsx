import React, { Component } from 'react';

import { Icon } from '../Icon';

import printIcon from 'assets/printicon.png';

class PrintThisComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => window.print()}>
          <Icon src={printIcon} width={30} />
        </button>
      </div>
    )
  }
}

export default PrintThisComponent;