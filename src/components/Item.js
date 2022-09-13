import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleObjectChange = this.handleObjectChange.bind(this);
  }

  handleObjectChange() {
    const { label, handleObjectChange } = this.props;
    handleObjectChange(label);
  }

  render() {
    const { label, cl } = this.props;
    return (

      <button
        className={`item   ${cl}`}
        type="submit"
        onClick={this.handleObjectChange}
      >
        {label}

      </button>

    );
  }
}
Item.propTypes = {
  label: PropTypes.string.isRequired,
  cl: PropTypes.string.isRequired,
  handleObjectChange: PropTypes.func.isRequired,

};

export default Item;
