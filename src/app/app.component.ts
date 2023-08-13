import { Component } from "@angular/core";

const NUMBERS = "123456789";
const LETTERS = "abcdefghijklmnopqrstuvwxyz";
const SYMBOLS = "!@#$%^&*()";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    desiredLength: number = 8;
    shouldUseLetters: boolean = false;
    shouldUseNumbers: boolean = false;
    shouldUseSymbols: boolean = false;
    generatedPassword: string = "";

    canClickGenerateButton(): boolean {
        if (this.desiredLength < 1)
            return false;

        if (!this.shouldUseLetters && !this.shouldUseNumbers && !this.shouldUseSymbols)
            return false;

        return true;
    }

    onLengthInputChanged(event: Event) {
        const htmlInput = event.target as HTMLInputElement;
        const inputAsInt = parseInt(htmlInput.value);

        if (!isNaN(inputAsInt))
            this.desiredLength = inputAsInt;
    }

    onLettersInputChanged() {
        this.shouldUseLetters = !this.shouldUseLetters;
    }

    onNumbersInputChanged() {
        this.shouldUseNumbers = !this.shouldUseNumbers;
    }

    onSymbolsInputChanged() {
        this.shouldUseSymbols = !this.shouldUseSymbols;
    }

    onGenerateButtonClicked() {
        let charSet = "";
        let generatedStr = "";

        if (this.shouldUseLetters)
            charSet += LETTERS;
        if (this.shouldUseNumbers)
            charSet += NUMBERS;
        if (this.shouldUseSymbols)
            charSet += SYMBOLS;

        for (let i = 0; i < this.desiredLength; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedStr += charSet[randomIndex];
        }

        this.generatedPassword = generatedStr;
    }
}
