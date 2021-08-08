import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './Home';
import { ACCOUNT_HOLDERS } from '../shared/accountHolders';
import AccountDetail from './AccountDetail';

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checkingAccounts: ACCOUNT_HOLDERS[0].checkingAccounts,
      selectedAccount: null
    }
    console.log(ACCOUNT_HOLDERS[0].checkingAccounts)
  }

  onAccountSelect(accountId) {
    this.setState({ selectedAccount: accountId });
    console.log('accountId = ' + accountId)
    console.log('this.state.selectedAccount = ' + this.state.selectedAccount)

    // const accountN = this.state.checkingAccounts.find((account) => { return account.accountNumber < this.state.selectedAccount})
    // console.log('accountN = ' + accountN)
    // const accountM = this.state.checkingAccounts.map((account) => { return account.accountNumber})
    // console.log('accountM= ' + accountM)
    // this.state.checkingAccounts.filter((account) => {console.log(account.accountNumber === this.state.selectedAccount)})
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Merit Bank</NavbarBrand>
          </div>
        </Navbar>
        <Home checkingAccounts={this.state.checkingAccounts}
          onClick={(accountId) => this.onAccountSelect(accountId)} /> 
        <AccountDetail account={this.state.checkingAccounts.filter((account) => account.accountNumber === this.state.selectedAccount)[0]} />
      </div>
    );
  }
}

export default Landing;
