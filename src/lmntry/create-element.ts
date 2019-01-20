import { Elem } from './elem';

export function createElement(elemClass: Elem): HTMLElement {
    const newElement = document.createElement('div');
    const text = document.createTextNode('Hello There');
    newElement.appendChild(text);
    return newElement;
}