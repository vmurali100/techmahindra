import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ABCComponent } from "./abc.component";

@NgModule({
  declarations: [ABCComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ABCComponent]
})
export class AppModule {}
