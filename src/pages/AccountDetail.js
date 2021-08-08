import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class AccountDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedAccount: null
        }
    }

    renderAccount(account) {
        if (account != null) {
            return (
                <Card>
                    <CardBody >
                        <CardImgOverlay>
                            <CardTitle>Personal Checking: (xxxx0{account.accountNumber})  ${account.balance}</CardTitle>
                        </CardImgOverlay>
                        <CardText> Transactions </CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const selectedAccount = this.props.selectedAccount;
        console.log('selectedAccount = ' + selectedAccount);

        if (selectedAccount != null) {
            
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderAccount(selectedAccount)}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            console.log("acc is null")
            return (
                <div></div>
            );
        }

    }
}

export default AccountDetail;