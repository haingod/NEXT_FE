import React, { Component } from 'react';
import * as propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import { login } from '../../modules/login/login.action';
import { loginStatus } from '../../modules/login/login.constant';
import { loginStatusSelector } from '../../modules/login/login.selector';
import './login.css';

const FormItem = Form.Item;

export class Login extends Component {
  static propTypes = {
    login: propTypes.func.isRequired,
    status: propTypes.number.isRequired,
    form: propTypes.object.isRequired,
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.username, values.password);
      }
    });
  }
  renderError() {
    const { status } = this.props;

    switch (status) {
      case loginStatus.inProgress:
        return <span>Validating account...</span>;
      case loginStatus.fail:
        return <span>Username or password is incorrect</span>;
      default:
        return null;
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    // Default account is admin/admin
    return (
      <div className="login">
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              className="login-input"
            />)
            }
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(<Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              className="login-input"
            />)}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
        </Form>
        <h3>{this.renderError()}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: loginStatusSelector(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    login: login(dispatch),
  };
}

const WrappedLogin = Form.create()(Login);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLogin);
