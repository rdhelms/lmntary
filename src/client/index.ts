import { Main } from './elements/main';

const root = document.getElementById('root');
if (root) {
    const mainElement = (new Main()).element;
    root.appendChild(mainElement);
} else {
    throw new Error('No root element found');
}