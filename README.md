# WriteRight
This is a website to share You stories/poems or any kind of literature that You never published.

## How I built this project

### Step 1: Stting up the backend for User Authentication

1. First I created a new Django project using the command `django-admin startproject WriteRight`.
2. Then I created a new app `named` `log_api` using the command `python manage.py startapp log_api`.
3. connected the app to the project by adding the app name to the `INSTALLED_APPS` list in the `settings.py` file.
4. Intalled the `rest_framework` using the command `pip install djangorestframework`.
5. Added the `rest_framework` to the `INSTALLED_APPS` list in the `settings.py` file.
6. Setup the `rest_framework_simplejwt` for the user authentication using the command `pip install djangorestframework_simplejwt`.
7. Setup token authentication in the `settings.py` file.
8. Make the necessary changes in the `urls.py` file to include the `rest_framework_simplejwt` urls.
9. Setup a custom `jwt` token response payload with `email` and `username` fields in the `views.py` file.
10. Setup `cross_origin` middleware to allow the frontend to access the backend.

### Step 2: Setting up the frontend for User Authentication

1. First I created a new React app using vitejs template using the command `npm init vite@latest`.
2. Installed the necessary dependencies using the command `npm install react-router-dom axios`.
3. Make two new folders `components` and `pages` in the `src` folder.
4. Created a new file `LoginPage.js` in the `pages` folder.
5. Created a new file `HomePage.js` in the `pages` folder.
6. wrote simple html for the login page and home page.
8. did the routing using the `react-router-dom` package.
9. Setup a new folder named `Context` in the `src` folder.
10. Created a new file `AuthContext.js` in the `Context` folder.
11. Mkae a context provider in the `AuthContext.js` file.
12. Setup the `axios` for the user authentication in the `AuthContext.js` file.
13. fetch the token from the backend and store it in the local storage.