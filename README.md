[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/aqdPCSr-)
# SWE-432 HW-4 Starter Application

## Submission Information

### Student Information

*Please fill in this information before submission*

* **Student Name:** 
* **Student G-Number:** 
* **Render Deployment URL:**

### Documentation of your Web App and React Components

*Here please describe your (at least) 5 different React components as well as the overall purpose of your web application. We provide an example below of what we expect this documentation to look like.*

**General App Description:** This web application provides information about cities loaded from a centralized database at www.citiesinfo.org. This app can help people find reference information about various city attributes such as population, capitals, and other demographic information.

* **React Component 1:** Retrieve a city from our Washington DC Database
  * *Functionality:* Displays a list of cities and allows the user to sort the cities alphabetically
  * *Interactivity:* The user can click on an arrow at the top of the list to change the sorting.

## Project Overview

This repo contains a barebones React app with a single component. You will use this as the "base" version of your Interactive Front-end application for HW Assignment #4. You will simply create a copy of this repo through GitHub classroom and then work in that repo. 

## Homework Assignment 3 Detailed Instructions

You can find the deatiled instructions for HW Assignment #4 on the [course webpage](https://kpmoran.cs.gmu.edu/swe-432-s23/hw4-tutorial/). Please read these carefully before getting started.

## Running this Project Locally

Make sure you have [Node.js](http://nodejs.org/). See the [HW Assignment #4 instructions](https://kpmoran.cs.gmu.edu/swe-432-s23/hw4-tutorial/) for more details.

*Note the following commands assume a Unix-based enviornment. If you are on windows, you may need to use something such as Windows Subsystem for Linux (https://docs.microsoft.com/en-us/windows/wsl/about).*

```sh
$ git clone <repo-name>
$ cd <repo-name>
$ npm install
$ npm start
```

After executing these commands, your React frontend should now be running on [localhost:3000](http://localhost:3000/). You can visit this page in your web browser to view your front-end user interface.

## Deploying to Render

Check out [our instructions](https://kpmoran.cs.gmu.edu/swe-432-s23/hw4-tutorial/) for deploying your application to Render. 

## Testing with Continuous Integration

**Note that you are not required to test your project with Jest for HW4, however, we have enabled this functionality in case you would like to use it to earn extra credit. If you would like to remove the tests, you can remove the `.github` directory from the repo.**

Currently, this repo is set up to run the Jest tests in the `App.test.js` file upon each commit to the `main` branch of the repository. If any of the tests fail, the CI process will fail and this will be indicated with red "X" on the main page of your repo, and GitHub will likely also send you a notification email that your automated tests have failed.

Currently, the tests are configured to run by getting deployed to a remote virtual server with an Ubuntu operating system, where the `npm install` and `npm test` commands are executed.

Note that we have included the [`jest-dom`](https://testing-library.com/docs/ecosystem-jest-dom/) library for your tests. This allows you to check DOM elements in your tests.

You can find the [GitHub Actions](https://github.com/features/actions) script for this CI job [here](.github/workflows/ci.yml) if you want to learn more.

## Additional Resources

For more information about using Node.js on Heroku, see these Heroku Dev Center articles:

- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Express Documentation](https://expressjs.com/en/5x/api.html)
- [Supertest Documentation](https://www.npmjs.com/package/supertest)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
