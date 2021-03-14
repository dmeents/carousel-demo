# carousel-demo
A code challenge that requires the creation of a carousel component, and a backend to retrieve data from.

This repository is set up as a monorepo, and intended to demonstrate an environment similar to a microservices' architecture. It uses Lerna, Yarn, and Jest at a repository level to manage most interactions with the individual services.

The applications are built on an Express backend, and a React front end. 

### Requirements
The only thing you need is `Yarn` installed.

### Setup
From the repository root, run:
```bash
yarn install
```
This will install the required dependencies for each service.

### Start
After dependencies are installed, and still from the repository root, run:
```bash
yarn dev
```
This will start both applications in parallel from a single terminal. The api is accessible on `localhost:8000`, and the website is available at `localhost:8080`.

### Testing
From the repository root, run:
```bash
yarn test
```
This will execute all the unit tests for the api. The web code does not include any unit tests, or snapshots.