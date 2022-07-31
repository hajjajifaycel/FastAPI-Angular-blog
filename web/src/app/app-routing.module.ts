import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  
  {
    path: 'post/:id',
    component: BlogComponent
  },
  {
    path: 'create-blog',
    component: AddBlogComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
