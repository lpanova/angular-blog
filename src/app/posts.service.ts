import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Post } from "./post";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  private postsUrl = "api/posts"; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.postsUrl)
      .pipe(catchError(this.handleError<Post[]>("getPosts", [])));
  }

  addPost(post: Post): Observable<Post> {
    return this.http
      .post<Post>(this.postsUrl, post, this.httpOptions)
      .pipe(catchError(this.handleError<Post>("addPost")));
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http
      .get<Post>(url)
      .pipe(catchError(this.handleError<Post>(`getPost id=${id}`)));
  }

  deletePost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http
      .delete<Post>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Post>(`getPost id=${id}`)));
  }

  updatePost(post: Post): Observable<any> {
    return this.http
      .put(this.postsUrl, post, this.httpOptions)
      .pipe(catchError(this.handleError<any>("updatePost")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
