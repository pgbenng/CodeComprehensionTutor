# syntax=docker/dockerfile:1
# https://docs.docker.com/build/building/packaging/
# https://stackoverflow.com/questions/53507378/create-docker-file-for-client-and-server

# specifies the base image env
FROM node:20
WORKDIR /client

# copies all files in ./client from local build to root dir of image
COPY . /client/

# install client dependencies
RUN npm i

# marks that our client is listening on port 3000
EXPOSE 3000

# run the client
CMD npm start
