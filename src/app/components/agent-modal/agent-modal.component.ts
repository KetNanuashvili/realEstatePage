import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-agent-modal',
  templateUrl: './agent-modal.component.html',
  styleUrl: './agent-modal.component.css'
})
export class AgentModalComponent {
  @Input() mainText: string = 'Error';
  @Input() backgroundColor: string = ' #FFFFFF';
  @Input() textColor: string = '#021526';
  @Input() showCloseButton: boolean = true;
  
  @Output() alertClosed: EventEmitter<void> = new EventEmitter<void>();

  public alertIsOpen: boolean = false;

  closeAlert() {
    this.alertClosed.emit(); 

  }
}
