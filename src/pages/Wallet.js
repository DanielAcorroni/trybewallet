import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletAction, fetchApiWithThunk } from '../actions';
import Header from '../component/Header';
import ValueInput from '../component/ValueInput';
import DescriptionInput from '../component/DescriptionInput';
import CurrencyInput from '../component/CurrencyInput';
import MethodInput from '../component/MethodInput';
import TagInput from '../component/TagInput';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCoinsAPI } = this.props;
    getCoinsAPI();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { walletInfo, expenses, currencies, getCoinsAPI } = this.props;
    const { id,
      value,
      description,
      currency,
      method,
      tag } = this.state;
    const sendToDispatch = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies[0],
    };
    expenses.push(sendToDispatch);
    walletInfo(expenses);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    getCoinsAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <>
        <Header email={ email } />
        <form onSubmit={ this.handleSubmit }>
          <ValueInput value={ value } handleChange={ this.handleChange } />
          <DescriptionInput descript={ description } handleChange={ this.handleChange } />
          <CurrencyInput currency={ currency } handleChange={ this.handleChange } />
          <MethodInput method={ method } handleChange={ this.handleChange } />
          <TagInput tag={ tag } handleChange={ this.handleChange } />
          <button type="submit">Adicionar despesa</button>
        </form>
      </>
    );
  }
}

Wallet.defaultProps = {
  expenses: [],
  currencies: {},
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  walletInfo: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
  getCoinsAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  const { user: { email }, wallet: { expenses, currencies } } = state;
  return {
    email,
    expenses,
    currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    walletInfo: (stateParam) => dispatch(walletAction(stateParam)),
    getCoinsAPI: (stateParam) => dispatch(fetchApiWithThunk(stateParam)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
