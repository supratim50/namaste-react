import React from "react"
import ReactDOM from "react-dom/client";

// create element in Core React
// React.createElement() => ReactElement-JS object => HTMLRlrmrnt(render)
const heading = React.createElement("h1", {}, "Namaste React 🚀");


// JSX - HTML-like or XML-like syntax. JSX is not 'html inside jabascript' | JSX is not react this is help us to write react code easily
// JSX => React.createElement() => ReactElement-JS object => HTMLRlrmrnt(render)
// Bable is converting the JSX code to React.createElement()
const jsxHeading = <h1>Namaste React using JSX 🚀</h1> // JS engine does not understand this JSX code | this is not the pure JS

// React Functional Component
//* Functional Component is a js function which is return a reactElement
const Title = () => {
    return <h1>Namaste React🚀</h1>
}

// Component Composition - Composing two component in the one another
const HeaderComponent = () => (
    <div>
        <Title /> {/*this is a Component Composition*/}
        {Title()} {/*this will work fine, same thing as <Title />*/}
        <h1>Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />)