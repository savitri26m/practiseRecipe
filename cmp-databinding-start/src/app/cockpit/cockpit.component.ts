import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  onAddServer(serverInputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverInputName: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverInputName.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    })
  }

  ngOnInit(): void {
  }

}
