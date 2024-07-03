# Myestro

<br>

## Description

This is an app that is a catalog of music teachers for private lessons and music studios for rent.

It offers and intuitive and easy navigation UX/UI that users can log in, sign up, find music teachers or studios and organize their scheduled sessions or rentals in a smooth way.

## User Stories
<ul>

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start creating my user and log in after.
-  **Login:** As a user I can login to the platform so that I can look for teachers or studios, see my profile and even check my bookings.
-  **Logout:** As a user I can logout from the platform so no one else can modify my information
-  **Add elements** As a user I can schedule lessons with teachers or book studios.
-  **Delete elements** As a user I can delete bookings or scheduled classes
-  **Update elements** As a user I can update my scheduled classes or bookings.
-  **Check profile** As a user I can check my profile and stats
</ul>

## Backlog

- Teacher and Studio reviews
- Loading spinners


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Behavior                                                         |
| ------------------------- | ------------------------------------------------------------     |
| `/`                       | Landing Page                                                     |
| `/signup`                 | Signup form, link to login, navigate to landingpage after signup |
| `/login`                  | Login form, link to signup, navigate to homepage after login     |
| `/logout`                 | Navigate to homepage after logout, expire session                |
| `/studios`                | Shows all available studios to book a session with               |
| `/teachers`               | Shows all available teachers to schedule a session with          |
| `/schedule`                | Shows all bookings, classes                                      |
| `/contacts`                | Our team's contacts                                              |
| `/teacher:Id`             | Fetches Teacher details                                          |
| `/studio:Id`              | Fetches Studio details                                           |
| `/profile`                | Check profile with personal info and bookings information        |
| `/edit-user-profile`      | Edits the user profile                                           |
| `/edit-schedule-date/:id` | Edits scheduled class with Teacher                               |
| `/edit-booking-date/:id`  | Edits booked session in a Studio                               |
          

## Components

- BookingCard

- NavBar

- Footer

- TeacherCard

- StudioCard

- ScheduleCard

- CompletedBookingCard

- CompletedClassCard

- IsPrivate



  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  
- External API
  - API for teachers
  - API for studios
  - API for availabilities (teachers)
  - API for studios (slots)


<br>


# Server / Backend



<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         |  Description                                                                                            |
| ----------- | --------------------------- |-------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile` | Check if user is logged in and return profile page                                                                  |
| POST        | `/auth/signup`  | Checks if fields not empty and user not exists, then create user with encrypted password, and store user in session |
| POST        | `/auth/login`   | Checks if fields not empty, if user exists, and if password matches, then stores user in session                    |
| GET        |  `/auth/verify`                    | Verifies the user token        |
| GET         | `/profile/:userId`                  | Verifies user profile details based on user id                   |
| POST         | `/api/class-schedule`                    | Creates scheduled classes with teachers   |
| GET         | `/api/class-schedule/:scheduleId`                     | Shows specific scheduled session      |
| PUT         | `/api/class-schedule/:ClassScheduleId`                   | Updates schedule dates and changes old and new availabilities  |
| DELETE      | `/api/class-schedule/:ClassScheduleId`                       | Delete element    |
| POST         | `/api/availability`                   | Creates availability for teacher class      |
| GET         | `/api/availability/:teacherId`                | Gets availabilities from each teacher       |
| POST         | `/api/studio-booking`                | Creates new studio booking      |
| GET         | `/api/studio-booking/:StudioBookingId`                | Gets specific studio booking      |
| GET         | `/api/studio-booking`                | Gets all studio bookings     |
| PUT         | `/api/studio-booking/:StudioBookingId`                | Updates booking dates     |
| DELETE         | `/api/studio-booking/:StudioBookingId:StudioBookingId`                | Deletes  bookings     |
| POST         | `/api/slot`                | Creates slot for studio bookings     |
| GET         | `/api/slot/:studioId`                | Creates slot for studio bookings     | Gets slots for specific studios | 
| POST         | `/api/slot`                | Creates slot for studio bookings     |
| POST         | `/api/studios`                | Creates studio      |
| GET         | `/api/studios/:studioId`                     | Gets specific studio  | 
| GET         | `/api/studios`                     | Gets all  studio  | 
| POST         | `/api/teachers`                | Creates teacher      |
| GET         | `/api/teachers/:teacherId`                     | Gets specific teacher  | 
| GET         | `/api/teachers/:teacherId`                     | Gets specific teacher  | 
| GET         | `/api/users`                  | Gets specific user  | 
| PATCH         | `/api/users/:id`                  | Uploads user profile image  | 
<br>


## Links

### Trello/Kanban

[Link to our trello board](https://trello.com/b/xXP0pxG9/myestro-match-dani-renan-jonny) 


### Git


[Client repository Link](https://github.com/renanjazz/myestro-match-frontend)

[Server repository Link](https://github.com/Dani-A-Dias/myestro-match-backend)

[Deployed App Link](https://myestro.netlify.app/)

### Slides


[Slides Link](https://docs.google.com/presentation/d/1Fp8dLSUupbj9nbcAVgd_sD4TJBFYTsVljjBH6iAppDM/edit?usp=sharing)