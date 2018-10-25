import _ from 'lodash';
import printMe from './print';
import './styles.css';
function component () {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    btn.innerHTML = 'Click me and check the console.';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
// document.body.appendChild(component());
let ele = component();
document.body.appendChild(ele);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(ele);
        ele = component();
        document.body.appendChild(ele);
    });
}