import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col,
} from 'reactstrap';

import CardItem from './Card';

export default function PopularProduct() {
  return (
    <>
      <Container className="mt-3">
        <div>
          <span className="h2 font-weight-bold">Popular</span>
        </div>
        <div>
          <span className="text-muted h6 small">Find clothes that are trending recently</span>
        </div>
        <Row className="d-flex justify-content-between no-gutters">
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <Link className="card" to="/product/detail/">
              <CardItem />
            </Link>
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
        </Row>
      </Container>
    </>
  );
}
