# Gamedao Haiku

### Prerequisites

<details><summary>node >= 16 </summary>
<h3>Linux</h3>
<pre><code>sudo apt update &&
sudo apt install nodejs npm
</code></pre>
<hr>
<h3>Windows:</h3>
<a href="https://nodejs.org/en/"> Installer </a>
</details>

---

## Packages:

### App:
    Frontend application for gamedao

### GraphQL
    Everything about GraphQL Resolver and type generators

### Translations:
    Package to organize the translation files

<br/>

---

## Install:

Run `yarn install`

<br/>

---

## Local Frontend development

1. Before the frontend can be started, the GraphQL types and queries must be generated for this `yarn build:graphql` must be executed
2. Run development with `yarn dev`


### Urls:
> Frontend: `http://localhost:3000/app`
> 
> GraphQL Playground `http://localhost:3000/api/graphql`

<br/>

---

## Update GraphQL package

After changes in the graphql package `yarn build:graphql` must be executed to rebuild the types and queries.

<br/>

---


## Steps to Commit code
1. Run `yarn install`
2. Run `yarn format`
3. Commit message must be formatted as described here -> `https://www.conventionalcommits.org/en/v1.0.0-beta.2/`
4. Push your changes ;)

<br/>

---

# greetings x credits x kudos

- fractal.id
- kilt.io
- ovol
- rmrk.app
- substrate.io
- zero.io
