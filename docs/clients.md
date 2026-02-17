# macOS
### Allow any source program to run
* Run `sudo spctl --master-disable` in `terminal` and the password is the user login password
* Upper left corner - `System Preferences` - `Security & Privacy` - `Security` - Check `Any Source`

# Docker

### New Material Design UI

[Docker Hub page](https://hub.docker.com/r/mvdctop/mdc-gui-lite)

## Environment variables
| Field name | Value semantics | Default value |
|:---------|:-----------|:--------------|
| USER_ID | Current user ID of the host | 1000          |
| GROUP_ID | Current user group ID of the host | 1001          |
| NAME | Device name displayed on the web | Docker-MDC    |

## Volumes
| Volumes | Explanation                  |
|:-------------|:-----------------------------|
| /config | Configuration file directory |
| /data | Media data directory         |
| /data | Media data output directory  |

::: warning
Soft/hard link files in Docker containers are not recommended

If you must use link files, make sure that when configuring volumes,
**the host directory and the container directory are exactly the same**

:::

## Port
* `5800` HTTP


# Detailed tutorial

## NAS system

::: details

* Open `Container Manager` to obtain the `mvdctop/mdc-gui-lite` image

### Ports
* Map port HTTP 5800
  ![](/images/docker/4.jpg)

### Environment variables
![](/images/docker/5.jpg)

|        | fnOS | Synology DSM  | Linux distributions  |
|:---------|:------|:--------------|:---------------------|
| USER_ID  | 1000  | 1026          | 1000                 |
| GROUP_ID | 1001  | 100           | 1000                 |

![](/images/docker/id.jpg)

* Click `-` to remove the empty value of the environment variable
  ![](/images/docker/11.jpg)

### Volumes
* Create a new folder in the host machine. This directory is used to map the **container** directory `/config` (required)
  ![](/images/docker/8.jpg)

* In the container page, right-click details and edit volume
  ![](/images/docker/12.jpg)


### After running, enter port 5800 in the browser
http://192.168.1.2:5800

:::

## Ordinary Linux distribution

::: details

It is recommended to add the current user to the Docker user group first. Please Google for details to avoid directory permission problems caused by sudo operation

### Pull Docker image
```sh
docker pull mvdctop/mdc-gui-lite
mkdir -p config data data/output
```

### Place the test video, or you can use a real video file
This command is to create a blank test file
```sh
touch ./data/Resident Evil.2002.mp4
```

### Run the container

#### shell
```sh
docker run \
  --rm \
  --name mdc-gui-lite \
  -p 5800:5800 \
  -v ${PWD}/data:/data \
  -v ${PWD}/output:/data/output \
  -v ${PWD}/config:/config \
  -e USER_ID=$(id -u) \
  -e GROUP_ID=$(id -g) \
  -e NAME=Docker-MDC \
  mvdctop/mdc-gui-lite
```
#### docker-compose
Save as `docker-compose.yml` in current directory
```yml
version: '3.8'

services:
  mdc-gui-lite:
    image: mvdctop/mdc-gui-lite
    container_name: Docker-MDC-GUI-Lite
    ports:
      - "5800:5800"
    volumes:
      - ./data:/data
      - ./output:/data/output
      - ./config:/config
    environment:
      - USER_ID=${USER_ID}
      - GROUP_ID=${GROUP_ID}
      - NAME=Docker-MDC
```
Linux Commands
```sh
mkdir -p config data data/output
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)
docker-compose up
```

### Enter port 5800 in the browser
http://192.168.1.2:5800

:::