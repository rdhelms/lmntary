import card from './card.html';
import { Elem } from '../../lib/Elem';

export class Card extends Elem {
    template = card;

    constructor(private cardData: ICardData) {
        super();

        this.init();
    }

    init() {
        const cardHeader = document.querySelector('card__header');
        const cardBody = document.querySelector('card__body');
        if (!cardHeader || !cardBody) return;
        cardHeader.textContent = this.cardData.title;
        cardBody.textContent = this.cardData.content;
    }
}

export interface ICardData {
    title: string;
    content: string;
}