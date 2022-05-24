const Form = ({ handleSubmit, product, setProduct }) => (
  <form
    className="w-1/2 p-8 m-8 bg-gray-100 shadow mx-auto rounded"
    onSubmit={handleSubmit}>
    <div className="w-1/2 mb-4">
      <label htmlFor="product" className="block font-medium text-gray-700">
        Produit à ajouter à la liste de courses
        <input
          id="product"
          type="text"
          onChange={(e) => setProduct(e.target.value)}
          value={product}
          name="product"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="px-3 py-2 font-medium text-white text-lg bg-blue-500 duration-200 hover:bg-blue-600 rounded-md">
        Ajouter
      </button>
    </div>
  </form>
);

export default Form;
