 import { Component } from '@angular/core';
 import { Router } from '@angular/router';
 import { NgForm } from '@angular/forms';
 import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
 import { trigger, transition, style, state, animate } from '@angular/animations';
 

 interface User {
  name: string;
  email: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h2>{{mangay}}</h2> 
  // <ul><li *ngFor="let jaangaye of courses">{{jaangaye}}</li></ul> 
  // <input [(ngModel)]="email"/>THE INPUT VALUE COMES HERE={{email}}
  // `,
  styleUrls: ['./app.component.css'],


  animations: [
    trigger('fade', [
      transition('void=>*',[
        style({backgroundColor: "yellow", opacity:0}),
        animate(2000,style({backgroundColor: "red", opacity:1})
        )])
      
      
    ]),
    trigger('myAnimation', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive <=> active', animate('100ms ease-in'))
    ])
  ]

  
})
export class AppComponent {

email="mea@gmail.com";

  title = 'my-angular-app4';
  mesaage="type";

mangay="list of course";
courses=["course1","course2","course3"];

  recivedata(item:string){
  this.mesaage=item;};
  name="Ram";
  Students:any[]=[
    {'name':'Rahul'},{'name':'Shnakra'},{'name':'Ganesh'},{'name':'Mahesh'}];
   
    Countrydeatils:any[]=[
      {'country':'India', 'people':[{'name':'Ajeet'},{'name':'Mphan'},{'name':'Shyam'}]},
      {'country':'Austrlia', 'people':[{'name':'rv'},{'name':'can'},{'name':'Sam'}]},
      {'country':'Canada', 'people':[{'name':'vhd'},{'name':'jfdf'},{'name':'hdf'}]}
    ];
    
    text :string="be paitent";
    a:number=10;
    b:number=15;

    showdata(){
      console.log("pls show the data on console")
    };
    showdataone(){alert("see the update")};
    showdata1($event:any){console.log("event binding", $event)};
    onKeyUp(){console.log("enterd was pressed");};


    roja:string="Ram";
    evendate="15 march";
    dob=new Date(1991,2,8); 
    salary:number=65000;
    naam:string="Rahul kumar";
    positon:string="manager";
    work:string="manager";
    c:number=0.123456789;

    public employess=[{"Id":1,"name":"Ram"},{"Id":2,"name":"shayam"},{"Id":3,"name":"mohaam"}];

    employee:any=[{code:'001',name:'ajjet',gender:'male',salary:300},
    {code:'002',name:'fet',gender:'female',salary:200},
    {code:'003',name:'sam',gender:'male',salary:500},
    {code:'004',name:'sat',gender:'female',salary:400},
    {code:'005',name:'jet',gender:'male',salary:490}];

    constructor(private router:Router){}
  
    mala(){this.router.navigate(['student']);};

    RegisterOn(regForm:any){
     
      var firstname=regForm.controls.firstname.value;
      console.log(firstname);
      console.log(regForm);}

      onSubmit(myForm:any){
        var firstname=myForm.controls.firstname.value;
        console.log(firstname);
        console.log(myForm);};


      selectedUser: User | null = null;
      users: User[] = [
        { name: 'John Doe', email: 'john.doe@example.com' },
        { name: 'Jane Smith', email: 'jane.smith@example.com' },
        { name: 'Bob Johnson', email: 'bob.johnson@example.com' }
      ];

  
      state = 'inactive';

      toggle() {this.state = this.state === 'inactive' ? 'active' : 'inactive';}


  }



  




  
 
























