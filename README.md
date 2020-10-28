# Vanilla


## Requirements:
- Docker 
- VScode
- VScode extension remote container. click [here](https://code.visualstudio.com/docs/remote/containers) for more documentation on how to install the extension.

### How to run only Frontend
1. Ensure you have Docker running on your machine.
2. Open the project in Visual Studio Code and run it inside Remote Container (see Requirements). This will install all VScode extensions to support this project, syntax highlighting and auto linting.
3. Inside the container (use Visual Studio Code console) run yarn to install al the dependecies required in the project.

### How to run Frontend and Backend simultaneously
1. run ```docker-compose run api rails db:reset```
2. run ```docker-compose up```

### How to run the Backend 
```docker-compose run --service-ports api /bin/sh -c "rm -f tmp/pids/server.pid && rails s -b 0.0.0.0"```


### Closing the project

As a reminder, once you are finished running this project and you have closed your remote container, you SHOULD stop and remove your Docker Container (from bash or PowerShell):
```~ docker stop <container_id>```
```~ docker rm <container_id>```

