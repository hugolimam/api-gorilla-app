FROM node:8
RUN mkdir -p /opt/src
RUN mkdir -p /opt/api-doc
WORKDIR /opt
COPY api-doc /opt/api-doc
COPY src /opt/src
COPY package.json .
COPY tsconfig.json .
RUN apt-get update
RUN npm install -G yarn 
RUN yarn 
RUN yarn cache clean 
RUN yarn install
CMD [ "yarn", "start" ]
