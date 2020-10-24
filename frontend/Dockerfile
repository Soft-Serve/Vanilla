FROM node:14.4-alpine
WORKDIR /frontend
COPY package*.json ./

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.1/zsh-in-docker.sh)" -- \
    -p git -p 'history-substring-search' \
    -a 'bindkey "\$terminfo[kcuu1]" history-substring-search-up' \
    -a 'bindkey "\$terminfo[kcud1]" history-substring-search-down'

RUN apk update && \
    apk upgrade && \
    apk --no-cache add git && \
    yarn install

COPY . .
CMD ["yarn", "serve"]
