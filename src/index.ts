import './index.css';
import './elements/main/main';
import { Elem } from './lib/Elem';

class Root extends Elem {
    constructor() {
        super();

        this.addMain();
    }

    addMain() {
        const main = document.createElement('app-main');
        this.appendChild(main);
    }
}

window.customElements.define('app-root', Root);