# Idea of the App (GithubApp)

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. You'll be fetching the sorted JSON data directly from the Github API, maybe we will try Github GraphQL API in the futur.

# Some screenshots for the app :
Desktop (> 1450px) :

<img width="752" alt="ScoreKeeper" src="https://user-images.githubusercontent.com/46606940/103319553-284aba80-4a2a-11eb-9b5a-cff172757522.JPG">

Desktop/Tablette(between 1450px and 575px) :

<img width="700" alt="ScoreKeeper" src="https://user-images.githubusercontent.com/46606940/103319712-af982e00-4a2a-11eb-8dbc-e41899137d34.JPG">

Mobile:

<img width="200" alt="ScoreKeeper" src="https://user-images.githubusercontent.com/46606940/103319774-dd7d7280-4a2a-11eb-8824-037a886d0373.JPG">




# Features
- As a User I should be able to list the most starred Github repos that were created in the last 30 days.
- As a User I should see the results as a list. One repository per row.
- As a User I should be able to see for each repo/row the following details :
    * Repository name
    * Repository description
    * Number of stars for the repo.
    * Number of issues for the repo.
    * Username and avatar of the owner.
- As a User I should be able to keep scrolling and new results should appear  ([Source idea](https://github.com/gemography/frontend-coding-challenge)).

# GithubApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
