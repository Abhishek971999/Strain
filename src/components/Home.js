import React, { Component, Fragment } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import Result from './Result';
import axios from 'axios';

class Home extends Component {
  state = {
    res: null,
    ip: null,
  };
  handleChange = (e) => {
    this.setState({ ip: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://strainapi.evanbusse.com/6nRSaUH/strains/search/name/${this.state.ip}`
      )
      .then((res) => this.setState({ res: res.data[0] }));
  };
  render() {
    return (
      <div className='header-section m-4'>
        <div className='row header-row justify-content-center'>
          <div className='col-sm-12 col-md-8'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                className='input mb-4'
                onChange={this.handleChange}
                placeholder='Search Strain..'
              />
              <button type='submit' className='search-btn'>
                <img
                  className='p-3'
                  src='https://img.icons8.com/cotton/32/000000/search--v1.png'
                />
              </button>
            </form>
            <If condition={this.state.res != null}>
              <Result res={this.state.res} />
            </If>
          </div>
          <div
            className='col-sm-12 col-md-4 img'
            style={{ marginTop: '100px' }}
          >
            <img
              src='http://indicana.like-themes.com/wp-content/uploads/2018/02/dark-blog-bg-2.png'
              alt='plant'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
