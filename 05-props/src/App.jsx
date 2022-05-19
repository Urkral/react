import React from 'react';
import SubmitButton from './components/SubmitButton';
import User from './components/User';

const App = () => {
  const user = {
    name: 'Sébastien',
    age: 27,
    comment: {
      lastComment: "J'aime boire de la biére le matin avant de donner cour",
    },
  };

  const users = [
    {
      name: 'Olivia',
      age: 23,
      comment: {
        lastComment: "Je n'aime pas Patrick",
      },
      id: 1,
    },
    {
      name: 'Esteban',
      age: 18,
      comment: {
        lastComment: "Je n'aime pas la biére 0%",
      },
      id: 2,
    },
    {
      name: 'Patrick',
      age: 83,
      comment: {
        lastComment: "Je n'aime pas les kebabs",
      },
      id: 3,
    },
  ];

  const HandleEnvoisDeRoquette = () => {
    let cpt = 10;
    const intervalRoquette = setInterval(() => {
      if (cpt <= 0) {
        console.log('Lancement de la roquette');
        clearInterval(intervalRoquette);
      } else {
        console.log(cpt);
      }
      cpt -= 1;
    }, 1000);
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
              <SubmitButton onHandleClick={HandleEnvoisDeRoquette} />
              <User name={user.name} age={user.age} exemple={user.comment.lastComment} />
              {/* Ici on envoie tout vers le user */}

              {users.map((u) => (
                <User
                  key={u.id}
                  name={u.name}
                  age={u.age}
                  exemple={u.comment.lastComment}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
