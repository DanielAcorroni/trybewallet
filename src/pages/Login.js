import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history, loginInfo } = this.props;
    const { email } = this.state;
    loginInfo(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.disableButton();
  }

  disableButton() {
    const { email, password } = this.state;
    const minLengthPassword = 5;
    if (email.includes('@')
    && email.includes('.com')
    && password.length >= minLengthPassword) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }

  render() {
    const { isButtonDisabled } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="input-email">
          Email:
          <input
            type="email"
            id="input-email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            type="password"
            id="input-password"
            data-testid="password-input"
            name="password"
            minLength="6"
            onChange={ this.handleChange }
            required
          />
        </label>
        <button type="submit" disabled={ isButtonDisabled }>Entrar</button>
      </form>
    );
  }
}

Login.propTypes = {
  loginInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loginInfo: (stateParam) => dispatch(userAction(stateParam)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
