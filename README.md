# Project for Optima Analytic Inc Interview 

### For preview and fun test
A live demo has been uploaded to Code Sandbox, for a quick preview [check it here](https://52bf8.csb.app/).

---
### For deployment
In the project directory, you can run:
```
npm install
```
to install the dependencies for this app, all dependencies are described in `pakage.json`.


Run
```
npm start
```
the app in the development mode.
Open http://localhost:3000 to view it in the browser.

---
### Tech stack List
- React
- Redux
- Material UI
- HTML5
- CSS


---
### Function Description

- List all posts
  - The web app contains one major window, by default, this window lists all posts. 

- Create new post
  - On the Navbar, user can find the "New Post" button. By clicking the button, a modal window will pop up, and user will be able to create a new post by submitting name, email, and post content.


- Search
  - User can easily locate the search function on right-top of the Navbar, this function can be used to search posts according to the keyword given by the user. The searching result will be displayed on the main screen. If the use want to check all the posts, they can easily go back to the main page by simply clicking "List All" button. 
  - There is an auto-hidden mechansim of the search bar for a better user experience. This machansim also warpped with "List All" button.
  - The search function is Case-Insensitive.
  - When search completed, all the posts contains the keyword will displayed with highlighting of the keyword.

- Reply
  - On the bottom of each post division, user can expand the comment area where list all the comments.
  - On the bottom of each post division, there is a "Reply" button, user can reply to the post by submitting name, email, comment content in a modal window.
  - If there is no comment for a certain post, the comment area is unexpandable. 

- Deletion
  - On the bottom of each post division, user can click the "Delete" button to remove the post, and all comments belong to that post will be cascade deleted.


---
### Some other features or notes:
- Consistent behavior in major browser: Chrome, Firefox, Safari/iOS, Edge.
- Modal background blur effect might cause performance issue on some devices.
- Use Redux to split/isolate app state from the app UI.
- Be aware, from full stack perspective, some functions (such as comments counting, cascade deletion of the comments) will cause to N+1 queries problem and huge database rewriting if we actually implement the same logic as what we did in the frontend part (in Redux). 
- Fully responsive, use Material UI to write css.
- Comments will be counted for each post to get a better user experience, and a ScrollToTop Button is added to imporve user experience in mobile device.
- Use wave extention to check WCAG 2.1 accessibility guidelines.


---
### Dependencies:
```JSON
"dependencies": {
    "@material-ui/core": "^4.12.2",
    "@material-ui/icons": "^4.11.2",
    "@reduxjs/toolkit": "^1.6.1",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-app-polyfill": "^2.0.0",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.4",
    "react-scripts": "4.0.3",
    "redux": "^4.1.0",
    "web-vitals": "^1.1.2"
  },
```
