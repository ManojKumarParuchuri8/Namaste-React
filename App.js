import React from 'react'
import ReactDOM from 'react-dom/client'


const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1",className:"heading1"},[
        React.createElement("h1",{},"I'm an h1 element"),
        React.createElement("h1",{},"I'm an h2 element")
    ]),
    React.createElement("div",{id:"child2",className:"heading2"},[
        React.createElement("h1",{},"I'm an h1 element"),
        React.createElement("h2",{},"I'm an h2 element")
    ])
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

console.log(parent)