FROM node:8
MAINTAINER Jason Shin

ENV CORE /home/node/app
RUN mkdir $CORE
RUN echo $CORE
WORKDIR $CORE

RUN apt-get install -y \
    graphicsmagick \
    imagemagick

RUN npm install -g html-pdf

# Install packages without NPM trick
COPY package.json $CORE
COPY yarn.lock $CORE
RUN yarn

# Finally add remaining project source code to the docker container
ADD . $CORE

RUN yarn global add babel-watch

# Exposing default project port
EXPOSE 8080
CMD ["yarn", "dev"]