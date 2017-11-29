# NgForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4. It is for testing the course [Angular Forms](https://app.pluralsight.com/player?course=angular-2-forms&author=mark-zamoyta&name=angular-2-forms-m2&clip=2&mode=live) @ Pluralsight.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Steps to recreate the project from scratch:
1. `ng new ng-forms --v 5 --routing` for creating a new project with Angular 5 and add routing
1. `npm i bootstrap@next ngx-bootstrap --save` -- add bootstrap 4 and ngx-bootstrap
1. update `package.json` for `start` script: `ng serve --host 0.0.0.0 --disable-host-check --live-reload false` to enable serving the network and disable live reload to flood the debug tab in the browser
1. update `angular-cli.json`: add `"../node_modules/bootstrap/dist/css/bootstrap.min.css",` to `styles []`
1. `npm start` to test (ok)
1. `git init`
1. creat new repo on github.com
1. `git commit -a -m "initial commit"`
1. `git remote add origin https://github.com/rkristelijn/ng-forms.git`
1. `git push -u origin master`

From this we continue the course.

# Course

## Form Basics in Angular 5 and bootstrap 4


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
