import React, { Component } from 'react'
import {Form, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import store from '../redux/store'
import auth from '../redux/actions/auth'

// import image
import Logo from '../assets/images/logo.png'

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonSeller: false,
    buttonCust: true
  }

  login = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const data = {
      email,
      password
    }
    store.dispatch(auth.login(data))
  }

  toggleButton = (val) => {
    if(val==='seller'){
      this.setState({
        buttonCust: false,
        buttonSeller: true
      })
    } else if(val==='customer') {
      this.setState({
        buttonCust: true,
        buttonSeller: false
      })
    }
  }

  onChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidUpdate(){
    console.log(this.props.auth)
    if(this.props.auth.isLogin){
      this.props.history.push('/')
    }
  }
  

  render() {
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div style={{width: 400}}>
          <div className='header-login text-center'>
            <img className='logo mb-3' src={Logo} alt='logo.svg' />
            <div className='message mb-4'>
              <span>Please login with your account</span>
            </div>
            <div style={{width: 200}} className='btn-group button-wrap mb-4 text-center'>
              <Button color='success' onClick={()=>this.toggleButton('customer')} active={this.state.buttonCust} className='greyColorButton' style={{width: 120}}>Customer</Button>
              <Button color='success' onClick={()=>this.toggleButton('seller')} active={this.state.buttonSeller} className='greyColorButton' style={{width: 120}}>Seller</Button>
              
            </div>
          </div>
          <Form onSubmit={this.login}>
            <Input onChange={this.onChangeText} name='email' type='email' id='email' placeholder='Email'/>
            <Input className='mt-3' onChange={this.onChangeText} name='password' type='password' id='password' placeholder='Password'/>
            <div className=' text-right mt-3'>
              <Link to='/' className='red-text'>Forgot Password?</Link>
            </div>
            <Button block type='submit' className='mt-3 theme-color rounded-pill'>Login</Button>
          </Form>
          <div class="text-center quest-wrapper mt-3">
            <span>Don't have any account? </span> <Link to='/login' className='red-text' >Register</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({auth: state.auth})

const mapDispatchToProps = {
  login: auth.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)