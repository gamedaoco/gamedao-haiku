# Local development environment

### This package contains all the files and scripts to set up a locale env.

---

### Steps to run docker containers:

<br/>

#### Build docker image

Package service and squid are rebuilt must always be run as soon as there are change to the packages.

```bash
docker-compose build
``` 

---

#### Updating node and pulling new docker containers

```bash
docker-compose pull
``` 

---

#### Starting the dev env

```bash
docker-compose up
``` 

---

#### All in one for lazy people

```bash
docker-compose pull && docker-compose build && docker-compose up
``` 

### Importing metadata for hasura:

<br/>

1. Wait for docker to be fully up and running.
2. Open your browser and go to http://localhost:9080/console/settings/metadata-actions
3. Click on the button "Import Metadata"
4. Select the file `pkg/dev-env/hasura_metadata.json`

> Troubleshooting:
>
> - If there is an error when importing you should check if the squid and graph service container are running and ready


---

### Urls and ports:

<br/>

1. Zero Node: `ws://localhost:9944`
2. Indexer Gateway: `http://localhost:4010/console` -> `http://localhost:4010/v1/graphql`
3. GameDao Graphql service: `http://localhost:4090/graphql`
4. Hasura frontend: `http://localhost:9080/console` -> `http://localhost:9080/v1/graphql`

### Console to create testData:

<br/>

Starting the console.

This can take ~1 minute as balances are created for alice and bob ( Zero / GAME / PLAY )

- write help for more information and a command overview.

```bash
yarn console
```

