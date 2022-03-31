## Coding Exercise
 - This coding exercise will consist of a web application to be developed using React. 
 - This application will use Pixabay API (http://www.pixabay.com) to fetch images. 
 - These will have to be rendered on the page. The UI of this page should consist of a grid layout 
 - (for example like Pixabay itself or Unsplash). The content should be visible 
 - correctly both in desktop and smartphones. The pagination system for the content of the 
 - page will be decided by the developer (page numbers, infinite scroll, etc). 
 - A second page should be implemented. This will consist of a detailed view of one of the 
 - pictures. In this one, a bigger version of the image, the name of the photographer, tags, 
 - views, downloads and size should be displayed. The UI will be free, so the 
 - developer can decide how it should look. As in the previous one, it should be 
 - visible both on desktop and smartphones. 

 - The provided key will let the developer make 5000 API calls per hour. If while testing it, 
 - the developer runs out of requests, feel free to create another Pixabay account and 
 - use that access key instead. 
 - The app should be fully tested (unit tests) and the code should contain comments where 
 - appropriate. Developer can use any testing framework he/she likes.
 - For styles the developer can use any framework or can style it manually.
## Project Structure

```
.
├── public                     # Static public assets (not imported anywhere in source code)
├── src                        # Application source code
│   ├── index.js               # Bootstrap main application routes with store│   
│   ├── config.js              # Set the values of Application
│   ├── assets                 # All assets (images, css) in Application
│   ├── components             # Basic reusable components
│   ├── pages                  # All pages of Application
│   │     ├── index.js         # MainScreen
│   │     ├── Photo.js         # Load All Images and Render Images
│   │     ├── PhotoDetail.js   # Photo Detail Page (Image, Name, Views, Downloads,...)
│   │
│   ├── services               # Define all apis and service in App│     
│   ├── routes                 # Main route definitions and async split points
│   │   ├── index.js           # Bootstrap main application routes with store│     
│   ├── store                  # Redux-specific pieces   │   
│   │   
│   └── tests                  # Unit tests    

```
## project install
- npm install or yarn


## project run

- npm start or yarn start


## Test

- yarn test

