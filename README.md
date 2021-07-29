# Project for Optima Analytic Inc Interview

## For preview and quick test

A live demo has been deployed on the Netlify, for a quick preview [check it here](https://chongshun-optima-analytic-interview-demo.netlify.app/).

All features are available in this demo. Source code can also be viewed in the [Github](https://github.com/hobyfrezk/optima-react).

---

## Deployment

### Deploy in development enviornment

In the project directory, you can run:

```
npm install
```

to install the dependencies for this app, all dependencies are described in `package.json`.

Run

```
npm start
```

the app in the development mode.
Open http://localhost:3000 to view it in the browser. Notice that PWA-offline function only available in Prodction enviornment deployment, the reason is that un-build js and css files are not cached.

### Deploy in production enviornment
The build folder can be used to deploy, or follow the instructions below for manually deployment.

First of all, you have to build the project.

```
npm run build
```

Open `./build/asset-manifest.json` and find the name of all static files, in my case, they are

```js
[
	"/static/css/main.18cd6d76.chunk.css",
	"/static/js/main.8ef1f19f.chunk.js",
	"/static/js/main.8ef1f19f.chunk.js.map",
	"/static/js/runtime-main.206861e8.js",
	"/static/js/runtime-main.206861e8.js.map",
	"/static/js/2.9b587647.chunk.js",
	"/static/js/2.9b587647.chunk.js.map",
	"/index.html",
	"/static/css/main.18cd6d76.chunk.css.map",
	"/static/js/2.9b587647.chunk.js.LICENSE.txt",
];
```

copy these name to `assetsToCache` variable in file `./build/servicework.js`. And you are good to deploy the `build` folder.

---

## Function Description

List all posts

- The web app contains one major window, by default, this window lists all posts.

Create new post

- On the Navbar, user can find the `New Post` button. By clicking the button, a modal window will pop up, and user will be able to create a new post by submitting name, email, and post content.

Search

- User can easily locate the search function on right-top of the Navbar, this function can be used to search posts according to the keyword given by the user. The searching result will be displayed on the main screen. If the use want to check all the posts, they can easily go back to the main page by simply clicking `List All` button.
- There is an auto-hidden mechansim for the search bar and it also warpped with `List All` button.
- The search function is Case-Insensitive.
- When search completed, all the posts contains the keyword will displayed with highlighting of the keyword.

Reply

- On the bottom of each post division, user can expand the comment area where list all the comments.
- On the bottom of each post division, there is a `Reply` button, user can reply to the post by submitting name, email, comment content in a modal window.
- If there is no comment for a certain post, the comment area is unexpandable.

Deletion

- On the bottom of each post division, user can click the `Delete` button to remove the post, and all comments belong to that post will be cascade deleted.

---

## PWA

This web can be deployed as a progressive app, which you can find the detail in this [demo]((https://chongshun-optima-analytic-interview-demo.netlify.app/)).

In React framework, in order to develop a offline PWA, the React team has suggested in their [documentation](https://create-react-app.dev/docs/making-a-progressive-web-app/#:~:text=It%27s%20recommended%20that%20you%20do%20not%20enable%20an%20offline-first%20service%20worker%20in%20a%20development%20environment%2C%20as%20it%20can%20lead%20to%20frustration%20when%20previously%20cached%20assets%20are%20used%20and%20do%20not%20include%20the%20latest%20changes%20you%27ve%20made%20locally.).

```
It's recommended that you do not enable an offline-first service worker in a development environment, as it can lead to frustration when previously cached assets are used and do not include the latest changes you've made locally.
```

In my development, my solution is, first enable PWA configurations incluing the write `manifest.json`, open `cache storage` for the web, and registration of `serviceWorker`. After it passes the local PWA audit, I use `npm build` to build the project and deploy it on Netlify. Offline features were developed and debugged in the production enviornment directly.


---

## Some other features or notes:
0. Data in the web are persist in the localStorage.

1. Consistent behavior in major browser: Chrome, Firefox, Safari/iOS, Edge.

2. Modal background blur effect might cause performance issue on some devices (This function is disabled in the deployment given in the begining of this doc).

3. Use Redux to split/isolate app state from the app UI.

4. Be aware, from full stack perspective, some functions (such as comments counting, cascade deletion of the comments) will cause to N+1 queries problem and huge database rewriting if we actually implement the same logic as what we did in the frontend part (in Redux).

5. Fully responsive, use Material UI to write css.

6. Use wave extention to check WCAG 2.1 accessibility guidelines.

7. Extra features:
  - A `CommentCounting` for each post to get a better user experience
  - A `ScrollToTop` button is added to imporve user experience in mobile device.
  - A simple `Pluralize` filter which returns a plural suffix if the first argument is an integer greater than 1.
  - The data/state are persist in the browser's locolStage, which could extremly improve the user expierience, especially when the app is deployed as PWA.
