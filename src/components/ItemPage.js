
import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';

// import component
import CardItem from './Card'

export default function ItemPage() {
  return (
    <>
      <Container className="mt-3">
        <Row className="d-flex justify-content-between no-gutters">
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
