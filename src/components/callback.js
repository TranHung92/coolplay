import React from 'react';

export default class Callback extends React.Component {
  /* eslint-disable*/
  componentDidMount() {
    window.setTimeout(opener.SC.connectCallback, 1);
  }
  /* eslint-enable*/

  render() {
    return (
      <div>
        <p>
          This page should close soon.
        </p>
      </div>
    );
  }
}
