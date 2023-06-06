FROM ubuntu:20.04

COPY ./fe/build /usr/share/nginx/html

RUN apt-get update
RUN apt-get install -y nginx

RUN rm /etc/nginx/nginx.conf   
COPY ./conf/nginx/nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx", "-g", "daemon off;" ] 