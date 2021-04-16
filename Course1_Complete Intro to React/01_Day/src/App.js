// Create our first React Component 
const Pet = () => {
    return React.createElement(
        'div', 
        {}, 
        [
            React.createElement('h2', {}, 'Luna'),
            React.createElement('h2', {}, 'Dog'),
            React.createElement('h2', {}, 'Cat')
        ]
    )
};

const App = () => {
     return React.createElement(
            'div',
              {id : 'div_app'},
               React.createElement('h1', {}, 'Adopt Me !'), React.createElement(Pet)
            )
    };

// Put our component in the 'root' div element
 ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
    );