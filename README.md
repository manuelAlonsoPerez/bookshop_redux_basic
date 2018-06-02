## Project Description:

This project recreates in React a youtube interface. The videos are loaded from Youtube Api based on the keyword introduced in the seacrh bar.

The project is done together with the great React and Redux turorial from Stephen Grider:

   [Modern React with Redux](https://www.udemy.com/react-redux/ "Modern React with Redux")


## Installing:

####  Dependencies

You need to have Node.js installed to run the project

[Download Node.js](https://nodejs.org/en/download/ "Download Node.js")

Check in linux terminal that package was installed properly

`node -v`

Check also npm is installed

`npm -v`

#### On linux terminal

1. In target directory clone the repository from gitLab

	` git clone https://github.com/manuelAlonsoPerez/youtube_like_interface.git`

2. Navigate to project folder

	`cd youtube_like_interface`

3. Install package

	`npm install`

4. Run project

	`npm start`

5.Open a new browser window and navigate to

    http://localhost:8080/


#### Alternatively

Download  .zip, .tar, .tar.gz or .tar compressed package, decompress it to target folder and follow from Step 2.


## Status

The  project is working and is possible to introduce new searches. The searchbar is dessigned as a controlled component, any value update will trigger a new search in the Youtube Api and re-render the components.
All new searches are debounced to improve smooth functioning.


![](./bookshop_basic_redux.png)