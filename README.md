# P-Alpha
---

### Team members:

<ul>
  <li> Benjamin Nguyen </li>
  <li> Guntaj Grewal </li>
  <li> Ruby Liu </li>
</ul>

---

At its core, P-Alpha is a code comprehension virtual tutor targeted towards students in their first year of university
without prior programming experience. Users will be asked to give their explanation in plain English to what a provided
code snippet does, then code will be generated based on their explanation which is then run against pre-written test
cases for the provided code snippet to measure functional equivalence. If the test cases pass, the student will move on
to the next code sample, if they don’t then the user will be provided hints and feedback to guide them in the right
direction, with their next action being recorded.

---

### Configuration Details:

- The project will be organized into two elements within these directories: `client` and `server`.
- Code inside `client` will handle all UI aspects of P-Alpha, and will handle very limited logic for display purposes.
- Code inside `server` will handle all application business logic, including handling all requests from the client,
  communicating with the cloud database, while integrating with Ollama for code generation.

---

### Setup Guide (Devs):

- Open the command line, make sure you are in the project directory.
- Go into the client directory using `cd client`, and run `npm i` to install all necessary packages for the client side
  locally.
- Go into the server directory using `cd ../server`, and run `npm i` to install all necessary packages for the server
  side locally.
- Go back to the main project directory, and run `docker compose watch` to build the Docker containers from
  their configuration file and enable Docker to watch all file changes within the `client` and `server` directories.
- After the initial container builds, for subsequent launches run `docker compose up --watch` to avoid unnecessary
  container building.

---

### Demo (for TA/Chris)

#### Docker Compose (running the application):

- Make sure you are in the root project directory in the command line.
- Run `docker compose watch` to build the containers and launch the application.
- Navigate to `http://localhost:3000/signup` to get started.

#### Client & Server Tests:

Note: We began our project utilizing Jest tests since they are built-in alongside `create-react-app`, but after A4 was
due a rubric was posted for A5, which detailed that our tests had to be using Mocha/Chai. After a lot of trouble setting
up the browser test environment (similar to A1), consulting our TA for help and advice, and with our limited time
remaining, we decided to compromise by just displaying our Jest test results via the browser.

- Our component test files are located under `client/src/tests`, and our server code tests are located under
  `server/tests`.
- Our HTML test reports for `client` and `server` are located under those directories respectively,
  via `test-report.html`. Open the HTML file to see the auto-generated test report.
