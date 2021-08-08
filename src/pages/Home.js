import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const homeP = this.props.checkingAccounts.map((account) => {
            return (
                <div key={account.accountNumber} className="col-12 col-md-5 m-5">
                    <Card onClick={() => this.props.onClick(account.accountNumber)}>
                        <CardImgOverlay>
                            <CardBody>
                                <CardTitle>Personal Checking: ${account.balance}</CardTitle>
                                <CardText>  (xxxx000{account.accountNumber}) </CardText>
                            </CardBody>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })


        return (
            <div className="container" >
                <div className="row">
                    {homeP}
                </div>
            </div>
        );
    }
}

export default Home;