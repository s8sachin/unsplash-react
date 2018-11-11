
import React from 'react';
import {
  NavbarToggler, Navbar, Collapse, Nav, NavItem, Input, InputGroup, InputGroupAddon, InputGroupText, Button,
} from 'reactstrap';
import {
  Link, NavLink, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import unsplashLogo from './unsplash.png';
import { searchPhotosAction } from '../../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    // this.changeSearch = debounce(this.props.searchPhotosAction, 250);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      isOpen: false,
      searchVal: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { collapsed } = this.state;
    if (prevProps.location !== location && !collapsed) {
      this.setState({ isOpen: false });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleChange(e) {
    const searchVal = e.target.value;

    this.setState({ searchVal }, () => {
      // this.changeSearch(searchVal, 1);
    });
  }

  handleClick() {
    const { searchVal } = this.state;
    // this.props.searchPhotosAction(searchVal, 1, true);
    this.props.history.push(`/search?query=${searchVal}`);
  }

  handleKeyPress(e) {
    if (e.charCode === 13 || e.which === 13 || e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { isOpen, searchVal } = this.state;
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <Link to="/" className="navlink"> <img className="footer-logo" src={unsplashLogo} alt="abc" />Unsplash</Link>
          <React.Fragment>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar className="w-50">
              <Nav className="align-items-center w-100" navbar>
                <NavItem className="collapsable-navItems w-50">
                  <InputGroup className="search-input-group">
                    <Input
                      placeholder="Search Keywords, #tags !"
                      className="noStyle search-input"
                      onChange={this.handleChange}
                      value={searchVal}
                      onKeyPress={this.handleKeyPress}
                    />
                    <InputGroupAddon addonType="append">
                      <Button color="white" className="search-btn noStyle" onClick={this.handleClick}>
                        <i className="fa fa-search" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </NavItem>
              </Nav>
            </Collapse>
          </React.Fragment>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(connect(null, { searchPhotosAction })(Header));
