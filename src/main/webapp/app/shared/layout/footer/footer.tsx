import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <p className="text-muted"> All Rights Reserved 2021 @Tibebu E.</p>
      </Col>
    </Row>
  </div>
);

export default Footer;
