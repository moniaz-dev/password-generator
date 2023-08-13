import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

console.log("%cWhat are you doing here, in the console? 🤨", "font-size: 20px; font-weight: 700");
console.log("%cWell since you're here, why don't you check this out?\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ", "font-size: 15px; font-weight: 700");

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
