import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class Item extends React.Component {
  render() {
    const { label, cl } = this.props;
    return (

      <button className={`item   ${cl}`} type="submit">{label}</button>

    );
  }
}
Item.propTypes = {
  label: PropTypes.string.isRequired,
  cl: PropTypes.string.isRequired,

};

export default Item;
