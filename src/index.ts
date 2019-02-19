import './index.css';

const main = document.createElement('div');
main.textContent = (new Date()).toTimeString();
const root = document.querySelector('#root');
if (root) {
    root.innerHTML = '';
    root.appendChild(main);
}

setInterval(() => {
    main.textContent = (new Date()).toTimeString();
}, 1000);
