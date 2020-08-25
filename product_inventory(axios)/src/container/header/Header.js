import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userBroadCast from '../../action/userBroad'
class Header extends React.Component {

    render() {
        return (
            <Navbar fixed="top" bg="light" expand="lg md xl">
                <Navbar.Brand><Link to="/product">
                    <img className="logo" src="./AppLogo.png" alt="Logo of Farming Product App"></img>
                    <b>Farming Products</b>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {this.props.userName && <Nav.Link><Link to="/product">Product</Link></Nav.Link>}
                        {this.props.userName && <Nav.Link><Link to="/dashboard">Dashboard</Link></Nav.Link>}
                        {this.props.userName === null && <Nav.Link><Link to="/">Login</Link></Nav.Link>}
                        {this.props.userName === null && <Nav.Link><Link to="/signup">SignUp</Link></Nav.Link>}
                        {this.props.userName && <Nav.Link><Link onClick={() => this.props.userLoggedIn(null)} to="/">Logout</Link></Nav.Link>}&nbsp;
                        <NavItem>{this.props.userName}</NavItem>
                        {/* <span className="menulist">{this.state.username}</span> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
const storeToPropsUser = (store) => { return { userName: store.userName } }
const userDispatch = (dispatch) => {
    return (bindActionCreators({ userLoggedIn: userBroadCast }, dispatch))
}
export default connect(storeToPropsUser, userDispatch)(Header);