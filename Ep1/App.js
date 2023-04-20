// let heading = document.createElement('h1');
//     heading.innerHTML = "My React Learning";

//     let rootElm = document.getElementById('root');
//     rootElm.appendChild(heading);

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am a h1 tag!</h1>
 *           <h1>I am a h1 tag!</h1>
 *       </div>
 *      <div id="child2">
 *          <h1>I am a h1 tag!</h1>
 *           <h1>I am a h1 tag!</h1>
 *       </div>
 * </div>
 */

const r_heading = React.createElement('h1', { id: 'title_1' }, "Hello World from React!");
console.log(r_heading);

const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: "child" },
        React.createElement('h1', { id: 'title_1' },
            [
                "I am a h1 tag!",
                React.createElement('span', { id: 'smile' }, "  :)")
            ]
        )
    ),
    React.createElement('div', { id: "child2" }, 
    [
        "I am a h1 tag! from child 2",
        React.createElement('span', { id: 'smile' }, "  (^)")
    ]  
    )
        ]
)
console.log(parent)
const r_root = ReactDOM.createRoot(document.getElementById('root'));
r_root.render(parent);

//React.createElement('span', {id:'smile'}, "  :)")