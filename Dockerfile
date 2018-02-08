FROM node
RUN npm install -g @angular/cli \
    npm install -g typescript   \
    npm install -g typings

WORKDIR /workspace

CMD ng serve -H 0.0.0.0 --port=4200