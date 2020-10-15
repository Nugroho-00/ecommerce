import React from 'react'
import {connect} from 'react-redux'
import {
  Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav,
  Row, Col,  Form, Input, Button
} from 'reactstrap'
import {Link} from 'react-router-dom'

import profileAction from '../redux/actions/profile'

// Import image
import Logo from '../assets/images/logo.png'
import Cart from '../assets/images/shopping-cart (2) 1.svg'
import Bell from '../assets/images/bell (1) 1.svg'
import Mail from '../assets/images/mail (3) 1.svg'
import Search from '../assets/images/search.svg'
import Filter from '../assets/images/filter 1.svg'
import Avatar from '../assets/images/orang.png'

class NavigationBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navbarOpen: false
    }
   }
   componentDidMount() {
    this.props.getProfile(this.props.auth.token)
   }
   
  render(){
    return(
      <Navbar color="faded" light expand="md" className="shadow">
          <Container>
            <NavbarBrand className="mb-3"> <Link to="/"> <img src={Logo} alt='logo.svg'/></Link></NavbarBrand>
            <NavbarToggler onClick={()=>this.setState({navbarOpen: !this.state.navbarOpen })}/>
          <Collapse isOpen={this.state.navbarOpen} navbar >
          <Form className='form-inline'>
                <div className='search-wrapper'>
                  <Input className='form-control' type='search' placeholder='Search' aria-label='Search'/>
                  <Link to='/'> <img src={Search} alt='search.svg' /> </Link>
                </div>
                <Button> <img src={Filter} alt='filter.svg' /> </Button>
              </Form>
              <Nav className="ml-auto">
                <Row className='d-flex align-items-center'>
                  <Col><Link to='/myBag' className="m-2" > <img src={Cart} alt="cart.svg" /> </Link></Col>
                  <Col><Link to='' className="m-2" to="#"> <img src={Bell} alt="bell.svg" /> </Link></Col>
                  <Col><Link to='' className="m-2" to="#"> <img src={Mail} alt="mail.svg" /> </Link></Col>
                  <Col><Link to='/profile' className="m-2" > <img src={Avatar} alt="avatar" style={{width: 70, height: 70}} /></Link></Col>
                </Row>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})
const mapDispatchToProps = {
  getProfile: profileAction.getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)