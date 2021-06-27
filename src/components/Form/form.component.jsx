import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import UserValidation from "../../validation/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup row>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="nama"
                  component={renderField}
                  label="Nama :"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="number"
                  name="ipa"
                  component={renderField}
                  label="ipa :"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="number"
                  name="ips"
                  component={renderField}
                  label="ips :"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="number"
                  name="mtk"
                  component={renderField}
                  label="mtk :"
                />
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="12">
              <FormGroup>
                <Button
                  color="dark"
                  type="submit"
                  disabled={this.props.submitting}
                >
                  Submit
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
        </form>
      </div>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect()(FormComponent);
