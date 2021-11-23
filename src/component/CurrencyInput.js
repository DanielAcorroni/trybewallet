import React from 'react';
import PropTypes from 'prop-types';

class CurrencyInput extends React.Component {
  render() {
    const { currency, handleChange } = this.props;
    return (
      <select
        data-testid="currency-input"
        name="currency"
        onChange={ handleChange }
        value={ currency }
        role="combobox"
      >
        <option value="USD">USD</option>
        <option value="USDT">USDT</option>
        <option value="CAD">CAD</option>
        <option value="GBP">GBP</option>
        <option value="ARS">ARS</option>
        <option value="BTC">BTC</option>
        <option value="LTC">LTC</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="CHF">CHF</option>
        <option value="AUD">AUD</option>
        <option value="CNY">CNY</option>
        <option value="ILS">ILS</option>
        <option value="ETH">ETH</option>
        <option value="XRP">XRP</option>
        <option value="DOGE">DOGE</option>
      </select>
    );
  }
}

CurrencyInput.propTypes = {
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CurrencyInput;
