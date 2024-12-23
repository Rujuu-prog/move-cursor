FROM golang:1.24rc1-bullseye

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download && go mod verify

# nodeのインストール
RUN apt-get update && apt-get install -y nsis libgtk-3-dev libwebkit2gtk-4.0-dev docker.io libx11-xcb-dev libxkbcommon-x11-dev
RUN apt-get install -yq x11-apps
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs


# wails CLIインストール
RUN go install github.com/wailsapp/wails/v2/cmd/wails@latest

CMD ["xeyes"]