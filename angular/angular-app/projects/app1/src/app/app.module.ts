import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ABCComponent } from "./abc.component";
import { XyzComponent } from './xyz/xyz.component';
import { SampleComponent } from './sample/sample.component';
import { SampleChildComponent } from './sample-child/sample-child.component';

@NgModule({
  declarations: [ABCComponent, XyzComponent, SampleComponent, SampleChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ABCComponent]
})
export class AppModule {}
