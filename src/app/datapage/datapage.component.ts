import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.sass']
})
export class DatapageComponent implements OnInit {

  posts: any[];
  error: any;

  gqlmutation = gql`
        mutation deletePost($title:String!){
            deletePost(title: $title){
              id
            }
        }
      `;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .query({
        query: gql`
        {
          posts {
            title
            description
            likes
          }
        }
        `
      }).subscribe(
      ({ data, loading }) => {
        this.posts = data && data.posts;
      },
      error => {
        this.error = error;
      }
    );
  }

  deletePost(post) {
    console.log(post.title);
    this.apollo.mutate({
      mutation: this.gqlmutation,
      variables: {
        title: post.title,
      }
    }).subscribe(
      () => {
        location.reload();
      }
    );
  }
}
