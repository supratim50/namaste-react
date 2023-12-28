import React from "react"
import ReactDOM from "react-dom/client";
            const parent = React.createElement(
                "div",
                {id: "parent"},
                React.createElement(
                    "div",
                    {id: "child"},
                    [
                        React.createElement(
                            "h1",
                            {},
                            "This is H1 tag"
                        ),
                        React.createElement(
                            "h1",
                            {},
                            "This is H1 tag"
                        )
                    ]
                )
            )
    
            // console.log(heading);
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(parent);