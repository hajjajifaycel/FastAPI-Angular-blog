import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

interface Blog {
  title: string
  description : string
  completed : boolean
  date : string
  img : string 
  author : string
}

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  
  myForm: FormGroup 

  // Form state 
  loading = false 
  success = false
  
  constructor(private blogService : BlogService , private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title : ['', [
        Validators.required
      ]],
      description : ['', [
        Validators.required
      ]],
      img :['', [
        Validators.required
      ]],
      author :['', [
        Validators.required
      ]],
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

 async submitHandler() {
  this.loading =true 

  const formValue = this.myForm.value 

  try {
    await this.blogService.createBlog(formValue)
  } catch(err) {
    console.log(err)
  }
  this.loading=false
 }
}
