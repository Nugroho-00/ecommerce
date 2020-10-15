import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import productAction from '../redux/actions/pageProduct'
import store from '../redux/store'

import {
  Row,
  Container
} from 'reactstrap'

import ItemPage from '../components/ItemPage';

import Star from '../assets/images/activated.png'
import Rectangle from '../assets/images/Rectangle 605.svg'
import Shape from '../assets/images/Shape1.svg'
import produk1 from '../assets/images/sepatu1.png'
import produk2 from '../assets/images/sepatu2.png'
import produk3 from '../assets/images/sepatu3.png'
import produk4 from '../assets/images/sepatu4.png'


import NavigationBar from '../components/NavigationBar1'
import NavigationBar2 from '../components/NavigationBar2'

class PageProduct extends React.Component{

  render(){
    return(
    <>
    {this.props.auth.isLogin ? <NavigationBar/> : <NavigationBar2/>}
      <Container className='mt-4'>
        <div className='menu-category'>
          <p> 
            <Link className='menu-link' to='/'>Home</Link> {' > '} 
            <Link  className='menu-link'to='category'>Category</Link> {' > '} 
          </p>
        </div>
        <Row>
          <div className='col-6'>
            <div className='row justify-content-around'>
              <img className='mb-3 mr-1 col-5' src={produk1} style={{width: 263, height: 300}} alt='product.png' />
              <img className='mb-3 mr-1 col-5'  src={produk2} style={{width: 263, height: 329}} alt='product.png' />
            </div>
            <div className='row justify-content-around'>
              <img className='mb-3 mr-1 col-5'  src={produk3} style={{width: 263, height: 329}} alt='product.png' />
              <img className='mb-3 mr-1 col-5'  src={produk4} style={{width: 263, height: 329}} alt='product.png' />
            </div>
          </div>
          <div className='col-6 name-detil'>
            <p className="nama-produk">Sepatu Nike Wanita</p>
            <p className="merk">Nike</p>
            <p className="star">
              <img src= {Star}  alt="star" />
              <img src= {Star}  alt="star" /> 
              <img src= {Star}  alt="star" /> 
              <img src= {Star}  alt="star" /> 
              <img src= {Star}  alt="star" /> 
              (10)
            </p>
            <p className="price-text mb-0">Price</p>
            <p className="price">Rp 450.000</p>

            <div className="amount-wrapper mb-4">
              <p>Jumlah</p>
              <div className="add-min-size d-flex flex-row" >
                  <button className="min">
                      <img src={Rectangle} alt="minus" />
                  </button>
                  <p>1</p>
                  <button className="plus">
                      <img src={Shape} alt="plus" />
                  </button>
              </div>
            </div>

            <div className='button'>
              <div className="abu d-flex flex-row mb-4">
                <Link><button className="signup">Chat</button></Link> 
                <button className="signup ml-3">Add bag</button>
              </div>
              <button className="login" type='submit'>Buy now</button>
            </div>
              
          </div>
        </Row>

        <div class="tengah mt-5">
            <p class="informasi-text">Informasi Produk</p>
            <p class="cond-text">Condition</p>
            <p class="new-text">New</p>
            <p class="desc-text mb-0">Description</p>
            <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            Donec non magna rutrum, pellentesque augue eu, sagittis velit.Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
            Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.

            Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.

            In ultricies rutrum tempus. Mauris vel molestie orci.
          </p>
            <p class="review-text mt-5">Product review</p>
            <div class="d-flex flex-row">
                <div class="row-1">
                    <p class="big mb-0">{!this.props.product.data['AVG(rating)'] ? "0" :this.props.product.data['AVG(rating)']}<span class="small-grey">/10 </span> </p>
                    <p className="star">
                      <img src= {Star}  alt="star" />
                      <img src= {Star}  alt="star" /> 
                      <img src= {Star}  alt="star" /> 
                      <img src= {Star}  alt="star" /> 
                      <img src= {Star}  alt="star" /> 
                      (10)
                    </p>
                </div>
                <div class="row-2">
                    <p class="mb-0"><img src= {Star}  alt="star" /> 5</p>
                    <p  class="mb-0"><img src= {Star}  alt="star" /> 4</p>
                    <p  class="mb-0"><img src= {Star}  alt="star" /> 3</p>
                    <p class="mb-0"><img src= {Star}  alt="star" /> 2</p>
                    <p class="mb-0"><img src= {Star}  alt="star" /> 1</p>
                </div>
                <div class="row-3 ml-4">
                    <hr/>
                </div>
                <div class="row-4 ml-4">
                    <p  class="mb-0">4</p>
                    <p class="mb-0">0</p>
                    <p class="mb-0">0</p>
                    <p class="mb-0">0</p>
                    <p class="mb-0">0</p>
                </div>
            </div>
        </div>
        <hr/>
        <div class="bawah">
            <p class="big-bold">You can also like this</p>
            <p class="grey-small">You've never seen it before!</p>
            <div class="d-flex flex-row justify-content-between mb-4 ">
            <ItemPage />
            </div>
        </div>
      </Container>
      </>
    )
  }
}

export default PageProduct