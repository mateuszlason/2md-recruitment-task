# 2MD Recruitment task

_A simple static webpage with modal gallery_

I decided to use React since Vanilla JS would be rather messy and I was too short on time to learn jQuery.

Responsiveness was tested up to Iphone 6 resolution.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

In static folder you can find minified css and js files.

I configured `Webpack` in a way it no longer delivers chunks of files. Also, I got rid of the hashing for sake of simplicity.

You can serve the build with `serve -s build` command, default address: [http://localhost:5000](http://localhost:5000) .
