const User = ({ name, age, exemple }) => (
  <div className="py-2 mx-4 mb-3 border-b">
    <h1 className="text-2xl font-bold">Goulagwe {name}</h1>
    <h2>
      {age < 25
        ? 'Tu es trop jeune pour ce contenu de qualité'
        : 'Voici le liens vers Bismillah: '}
    </h2>
    <p className="mt-2">{exemple}</p>
  </div>
);

export default User;
