import React, { Component } from 'react';
import Landing from './pages/Landing';
// import { ACCOUNT_HOLDERS } from './shared/accountHolders';
// import Home from './pages/Home';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     checkingAccounts: ACCOUNT_HOLDERS[0].checkingAccounts
  //   }
  //   console.log(ACCOUNT_HOLDERS[0].checkingAccounts)
  // }

  render() {
    return (
      <div>
        <Landing />
        {/* <Home checkingAccounts={this.state.checkingAccounts} /> */}
      </div>
    );
  }
}


export default App;
