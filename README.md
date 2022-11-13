# create_an_api
The object of the project is to develope the backend part, all frontend was provided by OpenclassRooms.

# Frontend : 
# HotTakes
This project was generated with Angular CLI version 13.2.4.
So befor starting to work on the project make sure that Angular is update to last version.

# Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

# Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

# Running unit tests
Run ng test to execute the unit tests via Karma.

# Running end-to-end tests
Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Backend : 
-Connect to Mongoose, then lanche node or nodemon seveer.
#Signup route
POST('api/auth/signup');

#login route
POST('api/auth/login');

# POST a sauce route
POST('api/sauces');

# Get sauces route
GET('api/sauces');

# Get, modifiy, and delete a single sauce by his ID
GET('api/sauces/:id');
PUT('api/sauces/:id');
DELETE('api/sauces/:id');

# Like or dislike a sauce route
POST('api/sauces/:id/like');
