import './main.css';
import main from './main.html';
import { Elem } from '../../lib/Elem';
import { Card } from '../card/card';

export class Main extends Elem {
    constructor() {
        super();

        this.initTemplate(main);

        // this.loadCards();
    }
    
    // async loadCards() {
    //     const mainContentContainer = this.querySelector('.main__content');
    //     if (!mainContentContainer) return;
    //     const cardList = await this.fetchCardList();
    //     cardList.forEach((cardData) => {
    //         const card = new Card(cardData);
    //         mainContentContainer.appendChild(card);
    //     });
    // }

    // async fetchCardList(): Promise<ICardData[]> {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve([
    //                 {
    //                     title: 'Card A',
    //                     content: 'Awesome stuff',
    //                 },
    //                 {
    //                     title: 'Card B',
    //                     content: 'Super stuff',
    //                 },
    //                 {
    //                     title: 'Card C',
    //                     content: 'Incredible stuff',
    //                 },
    //             ]);
    //         }, 2000);
    //     });
    // }
}

window.customElements.define('app-main', Main);

// interface ICardData {
//     title: string;
//     content: string;
// }