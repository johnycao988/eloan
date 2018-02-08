## build csanuglar image
#FROM node
#RUN npm install -g typescript   
#RUN npm install -g typings 
#RUN npm install -g @angular/cli


FROM csangular

COPY ./ /angulardemo

WORKDIR /angulardemo
 
CMD ng serve -H 0.0.0.0 --port=4200 --env=prod