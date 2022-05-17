// Régle numéro 1: Lorsquevous créez un compoenet et que celui-ci comporte uniquement un code HTML, on écrira le component comme dans le cas 2 et 3
// Régle numéro 2: on ne mettra pas de paranthése dans l'HTML quand le code est court
// Régle numéro 3: On mettra des () quand le code est plus long
// Régle numéro 4: Lorsque notre component contient du code js, il faut mettre des {} et faire un return de notre HTML (Et on ajoute  des () si le code est log) comme dans le cas 1
// Régle numéro 5: Toujours retourner du JSX avec un élément parent et unique qui contient plusieurs éléments ou un élément comme dans le cas 4

// Cas 1
export const MonsterGreen = () => {
  const color = 'Green';
  return <div>Le monstre est {color}</div>;
};
// Cas 2
export const MonsterDrink = () => <div>Le Monster est cool</div>;

// Cas 3
export const MonsterLagwe = () => (
  <div>
    <h1>Oui au Monstre Lagwue</h1>
    <p>Il est le descendant des romains</p>
  </div>
);

// Cas 4

export const MonsterLustre = () => (
  <>
  {/* Dans le JSX on écrira un commentaire comme ceci */}
    <div>Lolita</div>
    <div>Bus</div>
  </>
);
// on va utiliser un fragment (<></>) pour éviter de mettre une div inutile 