import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post";
import { PostsService } from "../posts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent {
  public post: Post | undefined;

  public labels = ["dinner", "eazy", "other"];

  constructor(private postsService: PostsService, private router: Router) {}

  onSubmit(post: NgForm) {
    this.postsService.addPost(post.value).subscribe((post) => {
      this.router.navigate(["/posts"]);
    });
  }
}
