import React, { Component } from 'react';
import Home from './Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserAccounts from '../components/UserAccounts';
import { ACCOUNT_HOLDERS } from '../shared/accountHolders';
import AccountDetail from './AccountDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checkingAccounts: ACCOUNT_HOLDERS[0].checkingAccounts,
      // selectedAccount: null
    }
    console.log(ACCOUNT_HOLDERS[0].checkingAccounts)
  }

  // onAccountSelect(accountId) {
  //   this.setState({ selectedAccount: accountId });
  //   console.log('accountId = ' + accountId)
  //   console.log('this.state.selectedAccount = ' + this.state.selectedAccount)
  // }

  // const accountN = this.state.checkingAccounts.find((account) => { return account.accountNumber < this.state.selectedAccount})
  // console.log('accountN = ' + accountN)
  // const accountM = this.state.checkingAccounts.map((account) => { return account.accountNumber})
  // console.log('accountM= ' + accountM)
  // this.state.checkingAccounts.filter((account) => {console.log(account.accountNumber === this.state.selectedAccount)})
  // }

  render() {

    const HomePage = () => {
      return (
        <Home />
      )
    }

    return (
      <div>
        <Header />
        {/* <UserAccounts checkingAccounts={this.state.checkingAccounts}
        // Need to pass onAccountSelect to the Home components
          onClick={(accountId) => this.onAccountSelect(accountId)} />  */}
        {/* We are passing the first element [0] of the below subarray (.filter returns subarray) to AccountDetail: */}
        {/* <AccountDetail selectedAccount={this.state.checkingAccounts.filter((account) => account.accountNumber === this.state.selectedAccount)[0]} /> */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/userAccounts" component={() => <UserAccounts checkingAccounts={this.state.checkingAccounts} />} />

          {/* If path doesn't match will be redicected to Home - change to Landing!!! */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Landing;
