import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newInput) {
    this.serverCreated.emit({serverName: newInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(newInput) {
    this.blueprintCreated.emit({serverName: newInput.value, serverContent: this.newServerContent});
  }
}
