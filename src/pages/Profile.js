import React, {useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { Col, Input, Row, Media, Label, Button, Nav, NavItem } from 'reactstrap'
import { FaPencilAlt } from 'react-icons/fa'
import '../assets/css/style.css'

import Navbar from '../components/NavigationBar1'

// import profileAction from '../redux/actions/profile'

// img
import poto1 from '../assets/images/chris.png'

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="d-flex">
                <div className="sidebar pl-4">
                    <Media className="align-items-center">
                        <Media left>
                            <Media className="rounded-circle m-3" object src="https://via.placeholder.com/50" />
                        </Media>
                        <Media body>
                            <div className="strong">
                                Media heading
                            </div>
                            <div className="text-muted small"><FaPencilAlt />Edit profile</div>
                        </Media>
                    </Media>
                    <Nav vertical className='pl-3'>
                       <NavItem>
                       <Media  className="align-items-center">
                        <Media left>
                            <Media className="rounded-circle" object src="https://via.placeholder.com/25" />
                        </Media>
                        <Media body className='ml-2'>
                            <div className="small">My Account</div>
                        </Media>
                    </Media>
              </NavItem>
              <NavItem>
                       <Media  className="align-items-center">
                        <Media left>
                            <Media className="rounded-circle" object src="https://via.placeholder.com/25" />
                        </Media>
                        <Media body className='ml-2'>
                            <div className="small">My Account</div>
                        </Media>
                    </Media>
              </NavItem>
              <NavItem>
                       <Media  className="align-items-center">
                        <Media left>
                            <Media className="rounded-circle" object src="https://via.placeholder.com/25" />
                        </Media>
                        <Media body className='ml-2'>
                            <div className="small">My Account</div>
                        </Media>
                    </Media>
                      </NavItem>
                    </Nav>
                </div>
                <div className="d-flex content p-5">
                    <div className="profile-edit">
                        <div className="heading">
                        <div className="h4">My Profile</div>
                        <div className="text-muted small">manage your profile information</div>
                        </div>                       
                        <Row>
                            <Col md={8}>
                                <Row>
                                    <Col className="text-right" md={4}>Name</Col> 
                                    <Col className="mb-3" md={8}>
                                    <Input type="text" className="normal" />
                                    </Col> 
                                    <Col className="text-right" md={4}>Email</Col> 
                                    <Col className="mb-3" md={8}>
                                    <Input type="text" className="normal" />
                                    </Col> 
                                    <Col className="text-right" md={4}>Phone Number</Col> 
                                    <Col className="mb-3" md={8}>
                                    <Input type="text" className="normal" />
                                    </Col> 
                                    <Col className="text-right" md={4}>Gender</Col>                                   
                                   <Col className="mb-3" md={8}>
                                   <div className="pl-3">
                                    <Label className="ml-1">
                                            <Input type="radio" />
                                            <span>Male</span>
                                        </Label>  
                                        <Label className="ml-5">
                                            <Input type="radio" />
                                            <span>Female</span>
                                        </Label> 
                                   </div>
                                    </Col> 
                                    <Col className="text-right" md={4}>Date of Birth</Col> 
                                    <Col className="mb-3" md={8}>
                                    <Input type="text" className="normal" />
                                    </Col> 
                                    <Col md={4} />
                                    <Col md={8}>
                                    <Button color="success">Save</Button>
                                    </Col>
                                </Row> 
                            </Col>
                            <Col md={4}>
                            <Media className="flex-column align-items-center">
                                <Media top>
                                    <Media className="rounded-circle">
                                            <img src={poto1}/>
                                    </Media>
                                </Media>
                                    <Media body>
                                        <label className="btn btn-secondary px-3 mt-4">
                                        <span>Select Image</span>
                                        <Input type="file" style={{display: 'none'}} />
                                        </label>                                 
                                </Media>
                            </Media>
                            </Col>
                            </Row>
                    </div>
                </div>
            </div>
        </>
    )
}