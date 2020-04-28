import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  cards: any[];
  error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: gql`
          {
            cards {
              title
              text
              img
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.cards = data && data.cards;
        },
        error => {
          this.error = error;
        }
      );
  }
  }

