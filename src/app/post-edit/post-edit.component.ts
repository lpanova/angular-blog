import { Component } from "@angular/core";
import { Post } from "../post";
import { PostsService } from "../posts.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.css"],
})
export class PostEditComponent {
  public post: Post | undefined;
  public labels  =["european", "spicy", "tasty"]

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

  onSubmit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (this.post) {
      this.postsService
        .updatePost(this.post)
        .subscribe(() => this.location.back());
    }
  }
}
