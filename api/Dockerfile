FROM ruby:2.6.6
RUN apt-get update -qq && apt-get install -y postgresql-client

RUN mkdir /api
WORKDIR /api

ENV BUNDLER_VERSION=1.17.2
RUN gem install bundler -v 1.17.2

COPY /api/Gemfile /api/Gemfile.lock
RUN mkdir -p /api/log && touch /api/log/development.log

RUN bundle install
COPY . /api
RUN gem install foreman
