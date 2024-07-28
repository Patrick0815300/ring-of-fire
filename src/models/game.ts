export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }
        shuffleArray(this.stack)
    }
}

function shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // Solange noch Elemente zum Mischen vorhanden sind
    while (currentIndex !== 0) {
        // Wählen Sie ein verbleibendes Element aus
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Tauschen Sie es mit dem aktuellen Element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}