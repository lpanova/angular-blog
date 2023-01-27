import { Component } from '@angular/core';
import { PostsService } from "../posts.service";
import { DisplayPost } from "../post";

@Component({
  selector: 'app-post-eazy',
  templateUrl: './post-eazy.component.html',
  styleUrls: ['./post-eazy.component.css']
})
export class PostEazyComponent {
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
        return post.label === 'eazy'
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
