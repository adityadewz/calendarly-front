import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.initJqueryData();
  }
  createPost:FormGroup;

  initJqueryData()
  {
    $('.lightbox').lightGallery({
      enableTouch: true
  });
  $(".tagsinput").tagsinput();
  
  }

  private initForm()
  {

     this.createPost=this.fb.group({
         name:this.fb.control(null,[Validators.required]),
         description:this.fb.control(null,[Validators.required]),
         date:this.fb.control(null,[Validators.required]),
         time:this.fb.control(null,[Validators.required]),
         topic:this.fb.group({
             name:this.fb.control("Topic 1,Topic 2",[Validators.required])
         }),
         tags:this.fb.control("Tag A,Tag B",[Validators.required])
     })

  }

}
