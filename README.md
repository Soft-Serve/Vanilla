# Vanilla


## Requirements:
- Docker 
- VScode
- VScode extension remote container. click [here](https://code.visualstudio.com/docs/remote/containers) for more documentation on how to install the extension.


### How to run only Frontend
1. Ensure you have Docker running on your machine.
2. Ensure you are in the frontend folder. You can not start the remote container outside this folder.
3. Open the project in Visual Studio Code and run it inside Remote Container (see Requirements). This will install all VScode extensions to support this project, syntax highlighting and auto linting.
4. Inside the container (use Visual Studio Code console) run yarn to install al the dependecies required in the project.
Frontend will run al localhost 8080

### How to run Frontend and Backend simultaneously
1. run ```docker-compose run api rails db:reset```
2. run ```docker-compose up```
Frontend will run at localhost 8091. Backend will run at localhost 3019

### How to work out of the Frontend dev container with a running Backend
1. run ```docker-compose run api rails db:reset```
2. ```docker-compose run --service-ports api /bin/sh -c "rm -f tmp/pids/server.pid && rails s -b 0.0.0.0"```
3. cd to the Frontend folder. Ensure you have the vscode remote container extension installed and reopen the project in the container
3 run ```yarn serve``` once the container has been sucssesfully build. 
4. Go to localhost 3091 to see the backend running succesfully. Frontend runs at localhost 8080

### How to run the Backend 
```docker-compose run --service-ports api /bin/sh -c "rm -f tmp/pids/server.pid && rails s -b 0.0.0.0"```
Backend will run at localhost 3091


### Closing the project

As a reminder, once you are finished running this project and you have closed your remote container, you SHOULD stop and remove your Docker Container (from bash or PowerShell):

- ```~ docker-compose down -v```
- ```~ docker stop <container_id>```
- ```~ docker rm <container_id>```

