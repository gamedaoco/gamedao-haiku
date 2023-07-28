#!/bin/bash

REPO=gamedao/graph-api
VERSION=$(node ./utils/version.cjs)
NAME=$REPO:$VERSION

echo -e building version $NAME

docker build -t $NAME .
docker push $NAME
