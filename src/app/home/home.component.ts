import { Component,OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() userName:string = "";
 @Output() userNameChange = new EventEmitter<string>();
 onNameChange(model: string){
   this.userName = model;
   this.userNameChange.emit(model);
 }
}
