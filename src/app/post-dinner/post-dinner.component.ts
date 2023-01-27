import { Component } from "@angular/core";
import { PostsService } from "../posts.service";
import { Post, DisplayPost } from "../post";

@Component({
  selector: "app-post-dinner",
  templateUrl: "./post-dinner.component.html",
  styleUrls: ["./post-dinner.component.css"],
})
export class PostDinnerComponent {
  public posts: DisplayPost[] = [];
  public labelStyle: string | undefined;

  constructor(private postsService: PostsService) {}

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts.map((post) => {

        return {
          ...post,
          description:
            post.description.length > 300
              ? post.description.slice(0, 170)
              : post.description,
          titleClass: this.getClassBasedOnKey(post.label),
        };
      }).filter((post) => {
        return post.label === 'dinner'
      })
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getClassBasedOnKey(label: any) {
    if (label === "eazy") {
      return "blue";
    } else if (label === "dinner") {
      return "orange";
    }

    return "grey";
  }
}
