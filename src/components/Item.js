import React from 'react';

class Item extends React.Component {
  render() {
    const { label, cl } = this.props;
    return (

      <button className={`item  + ${cl}`} type="submit">{label}</button>

    );
  }
}

export default Item;
