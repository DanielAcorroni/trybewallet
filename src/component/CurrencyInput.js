import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrencyInput extends React.Component {
  render() {
    const { currencies } = this.props;
    const { currency, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          onChange={ handleChange }
          value={ currency }
          role="combobox"
        >
          {
            currencies.map((coin) => (
              <option key={ coin } value={ coin }>{ coin }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

CurrencyInput.propTypes = {
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps(state) {
  const { wallet: { currencies } } = state;
  return {
    currencies,
  };
}

export default connect(mapStateToProps, null)(CurrencyInput);
