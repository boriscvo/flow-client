## Installation

The project is built using create-next-app. Clone/download the repo, install dependencies, run the development server and start the application:

```bash
npm install
npm run dev
```

The app is running on [http://localhost:3000](http://localhost:3000).

You will need to set up environment variables.
`NEXT_PUBLIC_API_URL=http://localhost:8000` is required to point to the backend API.

## Stack

- Next, React, TypeScript, Tailwind CSS - the core, as requested.
- Tanstack Query - for data fetching and caching.
- ShadCN - as requested.
- Zod - for form validation.
- date fns, Lucide ... and some other small libraries for various tasks.

## The top level structure looks like this:

**src** This directory contains the main UX and business logic. Inside we have:

**app** - due to the opinionated nature of Next, pages are leading the routes.
**components** - atoms, blocks and \_ui components.
**lib** - installations, provider, etc.
**api** contains services, REST and other network requests.
**utils** are also defined at the "top" level, indicating their reusability across the app.
**types** - global types definitions, api synchronizations.

## Project structure and the approach

The project is structured to support maintenance and scalability. Modular approach is used with composite components pattern and atomic design principles. The presentational components are also heavily emphasised to improve code readibility. Separation of concerns is applied with hooks and services abstracted away from the UI logic.

The building blocks are components. They are divided into:

- \_ui - shadcn components, mostly as they come, with minimal changes, combined with atoms and blocks (with restricted usage with eslint rules to only atoms and blocks)
- atoms - the smallest reusable presentational components, which rely on shadcn components and styles
- blocks - more complex, yet reusable and relatively rounded components, groups of atoms and shadcn.

The idea is to make atoms and blocks controlled and, if possible, stateless. The Shadcn is used as transitional library, isolated, to allow easy migration to custom components in the future, if needed. (not a fan of shadcn obviously, I prefer in-house elements).

These components are used to build pages and page modules, independent parts of pages, with it's own business logic and ui. Each of these functions is defined in such structure that is reusable only on the same level and below. No reusability outside its scope, no complex imports. From inside, their structure is divided into

- ui - presentational components only, no business logic, good for Tailwind abstraction to reduce it's verbosity
- hooks - business logic, state management, side effects, data fetching, etc.
- types - types definitions, specific to the atom/block/module.
