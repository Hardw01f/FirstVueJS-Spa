
FROM centos:latest

#add rpm into nodejs
RUN yum update -y && curl -sL https://rpm.nodesource.com/setup_8.x | bash -

# install npm
RUN yum install -y nodejs \
	epel-release \
	zsh \
	vim \
	golang

WORKDIR /root/myfirstvue

#install vue-cli version 3
RUN npm install -g @vue/cli

EXPOSE 9000:8080

CMD ["npm","run","serve"]
