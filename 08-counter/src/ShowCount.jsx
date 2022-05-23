import { Component } from 'react';

class ShowCount extends Component {
  render() {
    const { count } = this.props; // this.props récupéres les argument reçus dans le component. Ici on vient déstructurer
    return (
      <h1 className="p-2 m-4 text-4xl font-bold text-blue-600 text-center">{count}</h1>
    );
  }
}

export default ShowCount;
