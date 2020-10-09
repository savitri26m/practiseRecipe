import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [ {name:'1st server', type: 'server', content: 'Just a server' }];

  numberFired: number;
  evenNumber = [];
  oddNumber = [];

  newServerName = '';
  newServerContent = '';

  onIntervalFired(numFired: number){
    this.numberFired = numFired;
    console.log("numberFired" + this.numberFired);
    if(numFired % 2 === 0){
      this.evenNumber.push(numFired)
    }
    else{
      this.oddNumber.push(numFired)
    }
  }

  onAddServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }
  
}
