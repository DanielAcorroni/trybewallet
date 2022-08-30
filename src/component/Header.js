import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moneyLogo from '../assets/imgs/money-logo.png';

class Header extends React.Component {
  constructor() {
    super();

    this.totalSum = this.totalSum.bind(this);
  }

  totalSum() {
    const { expenses } = this.props;
    let totalValue = 0;
    expenses.forEach((expense) => {
      const { exchangeRates, currency, value } = expense;
      const actualExchange = exchangeRates[currency];
      const { ask } = actualExchange;
      totalValue += (Number(value) * ask);
    });
    return totalValue.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header id="wallet-header">
        <div>
          <img src={ moneyLogo } width="100px" alt="Trybewallet logo" />
          <p data-testid="email-field">{ email }</p>
        </div>
        <div id="total-field">
          <p data-testid="total-field">
            {
              this.totalSum()
            }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  expenses: [{
    id: 0,
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  }],
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  const { wallet: { expenses } } = state;
  return {
    expenses,
    state,
  };
}

export default connect(mapStateToProps, null)(Header);
