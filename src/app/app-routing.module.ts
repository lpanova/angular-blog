import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PostEditComponent } from "./post-edit/post-edit.component";
import { PostDinnerComponent } from "./post-dinner/post-dinner.component";
import { PostEazyComponent } from "./post-eazy/post-eazy.component";
import { PostOtherComponent } from "./post-other/post-other.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "posts", component: PostsComponent },
  { path: "createpost", component: CreatePostComponent },
  { path: "detail/:id", component: PostDetailsComponent },
  { path: "edit/:id", component: PostEditComponent },
  { path: "dinner", component: PostDinnerComponent },
  { path: "eazy", component: PostEazyComponent },
  { path: "other", component: PostOtherComponent },
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
