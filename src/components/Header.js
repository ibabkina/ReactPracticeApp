import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

//We need to maintaine the UI state in the header component
class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                     {/* color="primary"> */}
                    <div className="container">
                        <NavbarBrand href="/">Merit Bank</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
            <h1> MeritBank</h1>
            <p>We take inspiration fro the World's</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
export default Header;