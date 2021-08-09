import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//We need to maintaine the UI state in the header component
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
        //by binding we make toogleNav available
        //java variable toggleNav will be pointing to our function that is bound to this
        // if we bind it in the constructor we don't need to use arrow function in NavbarToggler onClick
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    {/* color="primary"> */}
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/meritD.png" height="50" width="250"
                                alt="Merit Bank" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/userAccounts'><span className="fa fa-list fa-lg"></span> UserAccounts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                {/* <h1> MeritBank</h1> */}
                                <p>Lower your APR by 2% annually</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
export default Header;