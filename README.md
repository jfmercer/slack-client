# Note to AEP Charge

I have written this tiny web app in response to the [code challenge](https://gist.github.com/Charge-Aep/6c868cdac615a64b8b1bb024f956cad4) described on Github. Simply use `ng serve` to fire up the app. If given both a correct Slack legacy API token and a correct Slack User ID, it will display the name, title, and picture of said user. There is no input validation and error handling is minimal. As requested, I have written an integration test: please see `src/app/slack.service.spec.ts`, lines 29 onwards. For reasons that I cannot figure out, the perfectly good integration test is failing. As I have family commitments this Sunday afternoon, I cannot pursue the problem any further, but would be happy to discuss the problem in person. Please contact me with any questions via my email, [jfmercer@protonmail.com](mailto:jfmercer@protonmail.com).

# SlackClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

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
