import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  Data : any 

  constructor(private blogService : BlogService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
     if (id){
      this.blogService.getBlog(id).subscribe((data) => {
        this.Data = data
    })  
  }
}
}
