import React from 'react';
import PropTypes from 'prop-types';

class TagInput extends React.Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tipo de gasto:
        <select
          data-testid="tag-input"
          name="tag"
          id="tag"
          onChange={ handleChange }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TagInput.propTypes = {
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TagInput;
