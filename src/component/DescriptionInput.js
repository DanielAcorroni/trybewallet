import React from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends React.Component {
  render() {
    const { descript, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <textarea
          data-testid="description-input"
          id="description"
          name="description"
          onChange={ handleChange }
          value={ descript }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  descript: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
