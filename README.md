<h1>
  Practice test automation with <a href="https://cypress.io"> <img width="140" alt="Cypress Logo" src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/113/000/resized/logo_landscape_(1).png?1643756332" /> </a> on <a href="https://www.demoblaze.com/">Demoblaze Store</a> & <a href="https://restful-booker.herokuapp.com//">Restful-Booker</a>
</h1>

> **Note**
>
> +  **<a href="https://www.demoblaze.com/">Demoblaze Store</a>** is a basic online store with optional login from BlazeMeter. Great for example web UI tests.
> +  **<a href="https://restful-booker.herokuapp.com//">Restful-Booker</a>** is an online site for bed & breakfast bookings from Mark Winteringham. The frontend is a React app, and the backend is a REST API.
>
## Cypress Features
This tests are purely for Cypress features practice, usage of <a href="https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/">Page Object Model</a> and API testing.


## Getting Started

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) **version 18.12.1** installed on your machine.

## Useful Commands

### Open Cypress

```shell
npm run cy:open
```

### Run all tests in Cypress for Restful-Booker 

```shell
npm run test:booker
```

### Run all tests in Cypress for Demoblaze Store

```shell
npm run test:demoblaze
```

### Run smoke tests

```shell
npm run test:smoke
```

### Run regression tests

```shell
npm run test:regression
```

> **Note**
>
> In this case <a href="https://github.com/cypress-io/cypress/tree/develop/npm/grep">Grep</a> plugin is used. It can filter tests to run using part of their title via grep, and via explicit tags via grepTags Cypress environment variables.
