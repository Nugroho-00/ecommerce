import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
} from 'reactstrap';

// import images
import item from '../assets/images/item.jpg';
import Star from '../assets/images/activated.png'

export default function cardProduct() {
  return (
    <>
      <Card className="rounded-lg shadow card-product">
        <CardImg top width="100%" src={item} alt="Item image" />
        <CardBody>
          <CardText className="m-0"><span className="font-weight-bold h6">Men's formal suit - Black & White</span></CardText>
          <CardText className="m-0"><span className="font-weight-bold h5 text-success">$ 40.0</span></CardText>
          <CardText className="m-0"><span className="text-muted h6">Zalora Cloth</span></CardText>
          <div className="rating">
                      <img src={Star} alt="star.png"/>
                      <img src={Star} alt="star.png"/>
                      <img src={Star} alt="star.png"/>
                      <img src={Star} alt="star.png"/>
                      <img src={Star} alt="star.png"/>
                      <p className="greyText d-inline"> Favorite </p>
                    </div>
        </CardBody>
      </Card>
    </>
  );
}
