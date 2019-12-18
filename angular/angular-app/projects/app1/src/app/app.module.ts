import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ABCComponent } from "./abc.component";
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [ABCComponent, XyzComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ABCComponent]
})
export class AppModule {}
