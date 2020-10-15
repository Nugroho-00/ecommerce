import React from 'react'
import {connect} from 'react-redux'

import homeAction from '../redux/actions/home'

import {
  Row, Col,
  Container, 
  Alert
} from 'reactstrap'

// importing image
import image1 from '../assets/images/carousel0.png'
import image2 from '../assets/images/carousel1.png'
import image3 from '../assets/images/carousel2.png'
import image4 from '../assets/images/carousel3.png'
import TShirt from '../assets/images/kaos.png'
import Shorts from '../assets/images/celanapendek.png'
import Jacket from '../assets/images/jaket (2).png'
import Pants from '../assets/images/celana.png'
import Shoes from '../assets/images/sepatu.png'
import Next from '../assets/images/next.png'

// Importing page
import NavigationBar from '../components/NavigationBar1'
import NavigationBar2 from '../components/NavigationBar2'
import NewItem from '../components/NewProduct';
import PopularItem from '../components/PopularProduct';

class Home extends React.Component{
  state = {
    alert: false
  }

  componentDidMount() {
    this.props.getHome()
  }
  componentDidUpdate() {
    if(this.props.auth.successLogout){
      if(!this.state.alert){
        this.setState({alert: true})
      } 
    }    
  }
  
  render(){
    return(
    <>
    {this.props.auth.isLogin ? <NavigationBar/> : <NavigationBar2/>}
      <Container>
      <Alert color="info" isOpen={this.state.alert} toggle={!this.state.alert}>
          {this.props.auth.alertMsg}
      </Alert>

      <Row className="mb-4 mt-5 d-flex justify-content-between divRow">
        <Col className="col-sm-1 col-md-1 " >
          <img src={image1} alt="image.png" className="rounded-lg"/>
        </Col>
        <Col className="col-sm-5 col-md-5 d-flex align-content-center flex-wrap justify-content-center divImg" >
          <img src={image2} alt="image.png" className="rounded-lg" />
          <p className="pAbsolute">Trends in 2020</p>
        </Col>
        <Col className="col-sm-5 col-md-5 d-flex align-content-center flex-wrap justify-content-center divImg" >
          <img src={image3} alt="image.png" className="rounded-lg" />
          <p className="pAbsolute">Black edition</p>
        </Col>
        <Col className="col-sm-1 col-md-1" >
          <img src={image4} alt="image.png" className="rounded-lg" />
        </Col>
        <div className="rounded-circle d-flex align-content-center flex-wrap justify-content-center bg-white nextCarousel my-auto"><a href='#'><img src={Next} alt="next-icon.png"/></a></div>
        <div className="rounded-circle d-flex align-content-center flex-wrap justify-content-center bg-white prevCarousel my-auto"><a href='#'><img src={Next} alt="next-icon.png"/></a></div>
      </Row>

      <p className="newThings mb-0">Category</p>
      <p className="greyText">What are you currently looking for?</p>
      <Row className="divRow mb-4">
        <Col className="col-sm-4 col-md" >
          <div className="borderImage1 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={TShirt} alt="t-shirt.png" /></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage2 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Shorts} alt="shorts.png"/></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage3 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Jacket} alt="jacket.png" /></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage4 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Pants} alt="pants.png" /></div>
        </Col>
        <Col className="col-sm-4 col-md" >
          <div className="borderImage5 rounded-lg d-flex align-content-center flex-wrap justify-content-center"><img src={Shoes} alt="shoes.png" /></div>
        </Col>
        <div className="rounded-circle d-flex align-content-center flex-wrap justify-content-center bg-white next-icon my-auto"><a href='#'><img src={Next} alt="next-icon.png"/></a></div>
      </Row>
          <NewItem />
          <PopularItem/>
      </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home,
  auth: state.auth
})

const mapDispatchToProps = {
  getHome: homeAction.getData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)