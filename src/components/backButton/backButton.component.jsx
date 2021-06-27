import React from "react";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Row>
      <Col>
        <Link to={"/"}>
          <Button color="white" className="mr-2">
            Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
