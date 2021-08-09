// import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import AccountDetail from '../pages/AccountDetail';

//Restructured in functional component
// class Home extends Component {
    // constructor(props) {
    //     super(props);

        // this.state = {
        //     selectedAccount: null
        // }
    // }

// onAccountSelect(account) {
//     this.setState({ selectedAccount: account });
//     // console.log('accountId = ' + accountId)
//     // console.log('this.state.selectedAccount = ' + this.state.selectedAccount)

//     // const accountN = this.state.checkingAccounts.find((account) => { return account.accountNumber < this.state.selectedAccount})
//     // console.log('accountN = ' + accountN)
//     // const accountM = this.state.checkingAccounts.map((account) => { return account.accountNumber})
//     // console.log('accountM= ' + accountM)
//     // this.state.checkingAccounts.filter((account) => {console.log(account.accountNumber === this.state.selectedAccount)})
// }

// render() {

//Define a functional component 
function RenderHomeAccounts({ account, onClick }) {
    return (
        <Card onClick={() => onClick(account.accountNumber)}>
            {/* <CardImgOverlay> */}
                <CardBody>
                    <CardTitle>Personal Checking: </CardTitle>
                    <CardText>  (xxxx000{account.accountNumber}) </CardText>
                </CardBody>
            {/* </CardImgOverlay> */}
        </Card>
    )
}

//Another to implement functional component
const UserAccounts = (props) => {
    const userAccounts = props.checkingAccounts.map((account) => {
        return (
            <div key={account.accountNumber} className="col-12 col-md-5 m-1">
                <RenderHomeAccounts account={account} onClick={props.onClick} />
            </div>
        );
    })
    
    
    return (
        <div className="container" >
            <div className="row">
                {userAccounts}
            </div>
        </div>
    );

}

// const home = this.props.checkingAccounts.map((account) => {
//     return (
//         <div className="col-12 col-md-5 m-5">
//             {/* <Card key={account.accountNumber} onClick={() => this.onAccountSelect(account)}> */}
//             {/* <Card key={account.accountNumber} onClick={() => this.props.onClick(account.accountNumber)}>
//                         <CardImgOverlay>
//                             <CardBody>
//                                 <CardTitle>Personal Checking: </CardTitle>
//                                 <CardText>  (xxxx000{account.accountNumber}) </CardText>
//                             </CardBody>
//                         </CardImgOverlay>
//                     </Card> */}
//         </div>
//     );
// })


// return (
//     <div className="container" >
//         <div className="row">
//             {home}
//         </div>
//         <div className="row">
//             {/* <div className="col-12 col-md-5 m-5">
//                         <AccountDetail selectedAccount={this.state.selectedAccount} />
//                     </div> */}
//         </div>
//     </div>
// );
//     }
// }

export default UserAccounts;