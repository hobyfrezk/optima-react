# Project for Optima Analytic Inc Interview 

### For preview and fun test
A alive demo has been uploaded to Code Sandbox, for a quick preview, you can check it here. 

---
### For deployment
In the project directory, you can run:
```
npm install
```
to install the dependencies for this app, all dependencies are described in `pakage.json`.

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
```
npm start
```


---
### Tech stack List
- React
- Redux
- Material ui


---
### Description
The web app contains one major window which list all the posts by default. The search bar on the right-top corner can be used to filter those posts according to the keyword given by the user .

On the Navbar, the first icon 


---
use modal window to create new post

consistent behavior in major browser: Chrome, Firefox, Safari/iOS, Edge.

use redux to split/isolate app state and app ui

for better ussage, add some extra feature such as post counting, replies counting for a single post

Be aware of that, from full stack point of view, some functions (count replies number in listing page) will lead to N+1 queries problem if we actually implement same querry logic as we did in the frontend part, the solution can be solved by redundant saving, or prefetch related query. 

For better view, capitalize author name for each post.

extract common logic -> create new post and create new comment -> ModalBase.js


---
Fully responsive

Turn into absolute import for better coding style

WCAG 2.1 -> customized color and adjustable font, highlight searched keyword

Persisting Redux State to Local Storage

Give lighthouse report in the end