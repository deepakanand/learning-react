This project follows the tutorial at [Intro to React and Effective Design Patterns](https://www.safaribooksonline.com/library/view/fluent-conference-2015/9781491927786/part35.html) by Brian Holt

Instructor repo: https://github.com/btholt/es6-react-pres

### Notes

This does not follow the exact folder/file structure as the instructor's repo.

I am using webpack instead of browserify + gulp.

Also I am not doing the server-side rendering (yet)

### Running the application
1. npm install
2. npm run dev


### Description of files


#### private

1. Header.jsx, MovieContainer.jsx, MovieListLayout.jsx, MovieTileLayout.jsx, RatingStars.jsx - straightforward React Components
2. movies.json and netflix.json - sample data files that can be used instead of getting real data
3. fake-omdb-client.js - pulls info from the above mentioned json files but mimics the omdb API.
4. index.jsx - consolidates all of the application business logic and state. I think this should be renamed to "app"
5. clientApp.jsx - uses index.jsx and creates the "app" on the client-side
6. app.jsx - uses index.jsx and creates the "app" from the server-side. Currently this file is not in use in this project

#### public
1. fonts - I manually copied over files in this directory from the node_modules directory till i figure out how to automate/symlink this
2. font-awesome.css - ditto as above

	


