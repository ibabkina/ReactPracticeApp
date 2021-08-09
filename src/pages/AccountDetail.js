
// import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

//Restructured in functional component
// class AccountDetail extends Component {
//     constructor(props) {
//         super(props);

//         // this.state = {
//         //     // selectedAccount: null
//         // }
//     }

function RenderAccount({ account }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card key={account.accountNumber}>
                <CardBody >
                    <CardTitle>Personal Checking: (xxxx0{account.accountNumber})  ${account.balance}</CardTitle>
                    <CardText> Transactions </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

// render() {
const AccountDetail = (props) => {
    // const selectedAccount = this.props.account;

    if (props.selectedAccount != null) {

        return (
            <div className="container" >
                <div className="row">
                    <RenderAccount account={props.selectedAccount} />
                </div>
            </div>
        )
    }

    else {
        return (
            <div></div>
        )
    }
}

export default AccountDetail;
