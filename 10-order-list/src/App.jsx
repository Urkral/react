import React, { useState } from 'react';
import Form from './components/Form';
import Liste from './components/Liste';

const App = () => {
  const [product, setProduct] = useState('');
  const [myArray, setMyArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    myArray.push(product);
    setMyArray((a) => [...a]);
    console.log(`Le nom est ${myArray} `);
  };
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <header>
        <div>
          <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
              <Form
                handleSubmit={handleSubmit}
                product={product}
                setProduct={setProduct}
              />
              <Liste myArray={myArray} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
