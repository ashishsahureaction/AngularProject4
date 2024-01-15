import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  log($event:any){console.log("ABC",$event)};

  onSave(){console.log("xyz");};

  onlog(){console.log("123");};

  ghar(x:any){console.log(x);};

  ghar1(pass:any){console.log(pass);};

  submit(f:any){console.log(f);};

  RegisterOn1(regForm:any){
     
    var firstname=regForm.controls.firstname.value;
    console.log(firstname);
    console.log(regForm);}

}
