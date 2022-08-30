import React from 'react';
import PropTypes from 'prop-types';

class ValueInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          data-testid="value-input"
          id="value"
          name="value"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ValueInput;
