import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [AppComponent]
    }));

    it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it("should have the expected initial state of 8|false|false|false", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.desiredLength).toEqual(8);
        expect(app.shouldUseLetters).toEqual(false);
        expect(app.shouldUseNumbers).toEqual(false);
        expect(app.shouldUseSymbols).toEqual(false);
    });

    it(`should generate a password`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        app.onGenerateButtonClicked();
        expect(app.generatedPassword).toBeTruthy();
    });

    // it("should render title", () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;
    //     expect(compiled.querySelector(".content span")?.textContent).toContain("password-generator app is running!");
    // });
});
