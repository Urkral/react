const App = () =>{
    return React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            // En js on utilise className car la mot class est réservé 
            {className: "bg-red-500"},
            "Hello World !",
        ),
    )
}
// Nous devons faire une ReactDom.render pour afficher le react 
ReactDOM.render(React.createElement(App), document.getElementById('root'))