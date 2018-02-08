FROM node
USER root
RUN mkdir -p /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass/.node-gyp/9.5.0 \
    chmod 777 /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass/.node-gyp/9.5.0
RUN npm install -g @angular/cli \
    npm install -g typescript   \
    npm install -g typings

WORKDIR /workspace

CMD ng serve -H 0.0.0.0 --port=4200