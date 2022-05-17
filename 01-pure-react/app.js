const App = () =>{
    return React.createElement(
        "div",
        {},
        // on peut créer plusieurs élément a l'aide d'un array
    [   
       React.createElement(
       "h1",
       // En js on utilise className car la mot class est réservé 
       {className: "bg-red-500"},
       "Hello World !",
   ),
       React.createElement(
       "h2",
       // En js on utilise className car la mot class est réservé 
       {className: "bg-red-500"},
       "GOULAGWE!",
   )

    ]
    )
}
// Nous devons faire une ReactDom.render pour afficher le react 
ReactDOM.render(React.createElement(App), document.getElementById('root'))