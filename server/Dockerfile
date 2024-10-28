# syntax=docker/dockerfile:1
# https://docs.docker.com/build/building/packaging/
# https://stackoverflow.com/questions/53507378/create-docker-file-for-client-and-server

# specifies the base image env
FROM node:20
WORKDIR /server

# copies all files in ./server from local build to root dir of image
COPY . /server/

# install server dependencies
RUN npm i
RUN npm run test

# marks that our server is listening on port 80
EXPOSE 80

# run the server
CMD npm start