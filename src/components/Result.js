import React, { Component } from 'react';

class Result extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='result-div'>
        <h1 className='header-name'>{this.props.res.name}</h1>
        <h5 className='header-race'>{this.props.res.race}</h5>
        <p className='header-desc'>{this.props.res.desc}</p>
      </div>
    );
  }
}

export default Result;
