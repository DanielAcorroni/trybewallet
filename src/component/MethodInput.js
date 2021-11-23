import React from 'react';
import PropTypes from 'prop-types';

class MethodInput extends React.Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <select
        data-testid="method-input"
        name="method"
        onChange={ handleChange }
        value={ method }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }
}

MethodInput.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MethodInput;
