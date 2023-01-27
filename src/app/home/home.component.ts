import { Component } from "@angular/core";
import { Post } from "../post";
import { PostsService } from "../posts.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  public posts: Post[] = [];

  public newPosts: Post[] = [];
  constructor(private postsService: PostsService) {}

  getPosts(): void {
    this.postsService
      .getPosts()
      .subscribe((posts) => (this.posts = posts.slice(0, 3)));
  }
  ngOnInit(): void {
    this.getPosts();
  }
}
