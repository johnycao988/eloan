FROM docker.io/google/nodejs-runtime

# Create app directory
RUN mkdir -p /home/angulardemo
WORKDIR /home/angulardemo

# Bundle app source
COPY . /home/angulardemo
RUN npm install

EXPOSE 8888
CMD [ "npm", "start" ]