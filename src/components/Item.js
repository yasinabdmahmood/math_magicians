import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Item extends React.Component {
  render() {
    const { label, cl } = this.props;
    return (

      <button className={`item  + ${cl}`} type="submit">{label}</button>

    );
  }
}

export default Item;
