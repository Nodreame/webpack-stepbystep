import _ from 'lodash';
import printMe from './print';
import './styles.css';
import JinJpg from './jin.jpg';
import data from './data.xml';
function component () {
    console.log('data:', data);
    let element = document.createElement('div');
    let btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('test');
    btn.innerHTML = 'Click me and check the console.';
    btn.onclick = printMe;
    element.appendChild(btn);

    let image = new Image();
    image.src = JinJpg;
    element.appendChild(image);
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