FROM node:latest
MAINTAINER imater

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

# Install dependencies
WORKDIR /usr/src/app
ADD . /usr/src/app

# Expose the app port
EXPOSE 3001

# Start the app
CMD [ "npm", "run", "dev" ]
