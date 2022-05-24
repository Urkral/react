const Liste = ({ myArray }) => (
  <ul>
    {myArray.map((produit) => (
      <li className="bg-lime-300 m-4" key={produit}>
        {' '}
        {produit}{' '}
      </li>
    ))}
  </ul>
);

export default Liste;
