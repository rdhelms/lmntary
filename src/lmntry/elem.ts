import { createElement } from './create-element';

export abstract class Elem {
    element: HTMLElement;

    constructor() {
        this.element = createElement(this);
    }
}