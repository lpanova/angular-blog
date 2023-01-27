import { Component } from "@angular/core";
import { Post } from "../post";
import { PostsService } from "../posts.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";


@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"],
})
export class PostDetailsComponent {
  public post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.postsService.getPost(id).subscribe((post) => (this.post = post));
  }

  deletePost() : void{
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.postsService.deletePost(id).subscribe();
    this.location.back();
  }
}
