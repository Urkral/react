import { useState } from 'react';

const ClickBtn = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      className="rounded-full w-20 h-20 mt-4 text-white bg-red-500 disabled:bg-red-200 block mx-auto"
      onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default ClickBtn;
