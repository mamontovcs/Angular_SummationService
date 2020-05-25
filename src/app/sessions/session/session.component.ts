import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})

export class SessionComponent implements OnInit {

  summationResult : number;

  constructor(public service : SessionService) { }

  ngOnInit(): void {
    this.resetForm();
  }


  resetForm(Form?: NgForm){
    if(Form != null)
      Form.resetForm();
    this.service.formData = {
      Sum : null,
      DigitX : null,
      DigitY : null,
      Id: null
    }
  
  }


 onSubmit(form: NgForm){
  this.insertValue(form);
 }

 onCalculate(form: NgForm){
  this.calculate(form);
 }


 calculate(form: NgForm){
  this.service.GetSummationResult(form.value).toPromise().then(res =>
    this.service.formData.Sum = res as number
    );
 }

 insertValue(form: NgForm){

  this.service.PostData(form.value).subscribe(res =>{
    this.resetForm(form);
    this.service.refreshList();
  });

  

 }

}