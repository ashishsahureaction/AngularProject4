import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { InputFormatDirective } from './input-format.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MypipePipe,
    StudentComponent,
    StudentdetailsComponent,
    PagenotfoundComponent,
    InputFormatDirective,
    TemplateFormComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,MatCardModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
