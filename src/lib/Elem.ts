export abstract class Elem extends HTMLElement {
    constructor() {
        super();
    }

    protected initTemplate(template: string) {
        this.innerHTML = template;
    }
}
