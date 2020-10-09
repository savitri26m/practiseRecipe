import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  featureWasSelected: string = 'recipe';

  onFeatureSelected(feature: string){
    this.featureWasSelected = feature;
    console.log(this.featureWasSelected);
  }
}
