// const heading = React.createElement('h1', {id: "heading"}, "Hello World From React!!");
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent = React.createElement('div', {id : 'parent'}, 
    [
        React.createElement('div', {id : 'child'}, 
            [
                React.createElement('h1', 
                {id : 'heading'}, "I'm head tag!")
                , React.createElement('h2', 
                {id : 'heading2'}, "I'm head tag!")
            ]
        ), 
        React.createElement('div', {id : 'child2'}, 
            [
                React.createElement('h1', 
                {id : 'heading'}, "I'm head tag!")
                , React.createElement('h2', 
                {id : 'heading2'}, "I'm head tag!")
            ]
        )
    ]);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)