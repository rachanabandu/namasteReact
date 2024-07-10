import React from "react";
import ReactDOM from "react-dom/client";
const header = React.createElement('parent', {}, [React.createElement('child', {id: 'child1'}, [
    React.createElement('h1', {id: "heading"}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag")
]),
React.createElement('child2', {id: 'child1'}, [
    React.createElement('h1', {id: "heading"}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag")
])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);