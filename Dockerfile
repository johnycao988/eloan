## build csanuglar image
FROM node

RUN sudo npm install -g typescript   \
    sudo npm install -g typings \
    sudo npm install -g @angular/cli



#WORKDIR /workspace

#CMD ng serve -H 0.0.0.0 --port=4200