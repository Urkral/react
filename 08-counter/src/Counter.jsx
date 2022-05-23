import { Component } from 'react';

class Counter extends Component {
  render() {
    const { count, onUpdate } = this.props;
    return (
      <div className="flex justify-center">
        <button
          type="button"
          className="rounded mr-4 w-16 h-16 text-white bg-red-500 disabled:bg-red-200"
          disabled={count <= 0}
          onClick={() => onUpdate(-1)}>
          -1
        </button>
        <button
          type="button"
          className="rounded mr-4 w-16 h-16 text-white bg-green-500  "
          onClick={() => onUpdate(+1)}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
