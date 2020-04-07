import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
  @Input() message: string;
  @Output() okay = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

  onOkay() {
    this.okay.emit();
  }
}
