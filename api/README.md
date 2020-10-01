# README

Run docker container for development
docker-compose run --service-ports app /bin/sh -c "rm -f tmp/pids/server.pid && rails s -b 0.0.0.0"

Run all 3 containers 
docker-compose up

Stop all containers 
docker-compose down

Start only frontend
docker container run soft_serve_frontend


DB
docker-compose run api db:reset

docker-compose run api db:create
docker-compose run api db:migrate
docker-compose run api db:seed

Rails Console
docker exec -it soft_serve_api_1 bash
cd app
rail console