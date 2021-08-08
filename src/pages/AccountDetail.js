
import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class AccountDetail extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     // selectedAccount: null
        // }
    }

    renderAccount(account) {
        return (
            <div className="col-12 col-md-5 m-5">
                <Card key={account.accountNumber}>
                    <CardBody >
                        <CardTitle>Personal Checking: (xxxx0{account.accountNumber})  ${account.balance}</CardTitle>
                        <CardText> Transactions </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        const selectedAccount = this.props.account;

        if (selectedAccount != null) {

            return (
                <div className="container" >
                    {this.renderAccount(selectedAccount)}
                </div>
            )
        }

        else {
            return (
                <div></div>
            )
        }
    }
}

export default AccountDetail;
