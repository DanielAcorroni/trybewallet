import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          {
            this.totalSum()
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
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
