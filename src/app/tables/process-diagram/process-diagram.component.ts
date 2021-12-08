import { Component,EventEmitter,Input,Output } from "@angular/core";

@Component({
    selector:'app-process-diagram',
    templateUrl:'./process-diagram.component.html',
    styleUrls:['./process-diagram.component.css']
})
export class ProcessDiagramComponent{
   @Input() imgUrl:String;
   @Output() closeDiagram = new EventEmitter<void>();

   onClose(){
    this.closeDiagram.emit();
   }

}