# README

Start backend for development
docker-compose run --service-ports api /bin/sh -c "rm -f tmp/pids/server.pid && rails s -b 0.0.0.0"

Stop all containers
docker-compose down

Start only frontend
docker-compose up -d frontend

DB
docker-compose run api rails db:reset

docker-compose run api rails db:create
docker-compose run api rails db:migrate
docker-compose run api rails db:seed

Rails Console
docker exec -it soft_serve_api_run_455fb92af71e bash
cd app
rail console

All rails commands must be run as follows
docker-compose run api ...