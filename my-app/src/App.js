import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h4>Trying to recreate this (as seen here) using CSS Grid and Clip-path.</h4>
          <div className="grid">
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/1.jpg" alt="" />
                      <figcaption>
                          <div>
                              <div>
                                  <h3>Ms Marvel</h3>
                              </div>
                          </div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Starlord</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/3.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Spider-Man</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/4.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Black Panther</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/5.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Venom</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/6.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Thanos</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/7.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Iron Man</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/8.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Thor</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/9.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Captain America</h3></div></div>
                      </figcaption>
              </figure>
              <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/10.jpg" alt="" />
                      <figcaption>
                          <div><div><h3>Black Widow</h3></div></div>
                      </figcaption>
              </figure>
              <div className="copyright">2017 Marvel</div>
          </div>
      </div>
    );
  }
}

export default App;
