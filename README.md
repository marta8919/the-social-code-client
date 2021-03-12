# The Social Code - TSC

<!-- Logo to be filled in -->
![Main Logo TSC](https://res.cloudinary.com/dfpleoyv6/image/upload/v1615540340/Captura_eqmzq8.png)

This work is licensed under a MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

The Social Code (TSC) is a platform where developers and technical people can share their experiences and create online events to network and share knowledge with other people

The user can log in to view, write articles and search users to connect though private messages.

## MVP

The MPV will include the possibility to sign-up, log-in and log-out. Publish post or event with calendar functionality and view the posts the users have published on their profile page. The main board will show all posts and events. On the profile page the user will also have the possibility to edit their profile information and edit events, as well as delete posts and events.

## Backlog

- [ ] Access to lost password
- [X] Email validation
- [X] Voting posts through "likes"
- [ ] Drag and drop images
- [X] Search Bar
- [ ] Notifications on the navigation bar
- [X] Adding img to posts
- [ ] Liked posts visible on profile

## Built with
- [React](https://reactjs.org/)
- [NodeJs](https://nodejs.org/es/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Material UI](https://material-ui.com/)

## Data Structure Server Side
### Config

### db (connection to MongoDB)

### error-handling

### Models
- Post.model.js
- User.model.js
- Events.model.js

### Client routes
- HomePage: Welcoming page to the platform inviting the user to sign up
- Confirming email: route sent to the user to the email account to confirm the user and be able to login
- Sign Up: Sign Up form to create a user and send confirmation email to the email account
- Login: Login form to use when the email address is already confirmed
- About: Information page about the platform and the creators
- Board: Main Board page to show all posts and future events
- Profile: Logged in user's profile
- Edit Profile/Edit Picture: Edit Profile information form
- New Post / New Event / Edit Event: Forms to create/edit and publish posts and events
- User Profile: Visit a profile from another user
- Not Found: error 404 page

### Server Routes
- File posts.routes.js: All GET/PATCH/POST/DELETE routes regarding the post model
- File events.routes.js: All GET/PATCH/POST/DELETE routes regarding the event model
- File user.routes.js: All GET/PATCH/POST/ routes regarding the user model
- File posts.routes.js: All GET/POST/ routes regarding authentication and user confirmation through link to the email account

## Resources
[Presentation Slides](https://docs.google.com/presentation/d/1h5AIJ0Ya-EroVpIp3jqWOcplupaNuKBAHy55zTP07gU/edit?usp=sharing)

## Deployed Website
[The Social Code](https://the-social-code.herokuapp.com/)
