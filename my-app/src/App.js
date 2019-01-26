import React, { Component } from 'react';
import Image from './component/image/Image';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h4>Trying to recreate this (as seen here) using CSS Grid and Clip-path.</h4>
          <div className="grid">
              <Image
                  src="http://static.hellofriki.com/wp-content/uploads/2016/02/111-front.jpg"
                  title="Deadpool"
                  caption="Deadpool"
              />

              <Image
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg"
                  title="Starlord"
                  caption="Starlord"
              />

              <Image
                  src="https://www.telegraph.co.uk/content/dam/gaming/2018/04/16/Spider-Man_PS4_Crouch_trans_NvBQzQNjv4Bqfmd-LgYrOTIHY1AkCfXGvLUKbdBQoK0iWiJG8T4idsY.jpg?imwidth=450"
                  title="Spiderman"
                  caption="Spiderman"
              />

              <Image
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/4.jpg"
                  title="Black Panther"
                  caption="Black Panther"
              />

              <Image
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/5.jpg"
                  title="Venom"
                  caption="Venom"
              />

              <Image
                  src="https://heronews.pl/media/2017/07/hulk-850x491.jpg"
                  title="Hulk"
                  caption="Hulk"
              />

              <Image
                  src="https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/20185918/Marvel-Studios-est%C3%A1-buscando-directora-para-la-pel%C3%ADcula-de-Black-Widow.jpg"
                  title="Black Widow"
                  caption="Black Widow"
              />

              <Image
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/7.jpg"
                  title="Iron Man"
                  caption="Iron Man"
              />

              <Image
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/8.jpg"
                  title="Thor"
                  caption="Thor"
              />

              <Image
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/9.jpg"
                  title="Captain America"
                  caption="Captain America"
              />



              <div className="copyright">2017 Marvel</div>
          </div>
      </div>
    );
  }
}

export default App;
