import { useState } from 'react';

const ClickBtn = () => {
  // Regle numéro 1: on ne mettra jamais un hook dans une condition
  /**
   *if(machin){
       const [count, setCount] = userState(0)
   } ===> A BANNIR !!!
   */
  // Régle numéro 2: Les hooks seront déclaré tout en haut du component l'ordre des hookes est important dans certain cas
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      className="rounded-full w-20 h-20 mt-4 text-white bg-red-500 disabled:bg-red-200 block mx-auto duration-1000 hover:bg-lime-600"
      onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default ClickBtn;
