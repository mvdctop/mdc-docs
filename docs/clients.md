# 🍎 macOS

### Allow Programs from Any Source

* Run `sudo spctl --master-disable` in `Terminal`; the password is the user login password
* Open `System Preferences` - `Security & Privacy` - `Security`, then check `Any Source`

# 🐳 Docker

### New Material Design UI

[Docker Hub page](https://hub.docker.com/r/mvdctop/mdc-gui-lite)

## Environment Variables

| Field Name | Meaning | Default |
| :--- | :--- | :--- |
| USER_ID | Current user ID of the host | 1000 |
| GROUP_ID | Current user group ID of the host | 1001 |
| NAME | Device name shown in the User Panel and web title | Docker-MDC |
| ACCESS_USERNAME | Docker Web access account | - |
| ACCESS_PASSWORD | Docker Web access password | - |

If both `ACCESS_USERNAME` and `ACCESS_PASSWORD` are non-empty, the **Docker Web Access Lock** will be enabled automatically and used as login credentials.

## Volumes

| Volume | Description |
| :--- | :--- |
| /config/.mdc | Configuration file directory |
| /data | Media data directory |
| /data/output | Media data output directory |

::: warning
Soft/hard link files are not recommended inside Docker containers.

If link files must be used, make sure **the host directory and container directory are exactly the same** when configuring volumes.
:::

## Port

* `5800` HTTP

# 📚 Detailed Tutorial

## NAS System

::: details Expand NAS system tutorial

Open `Container Manager` and get the `mvdctop/mdc-gui-lite` image.

### Ports

* Map HTTP port `5800`

![](/images/docker/4.jpg)

### Environment Variables

![](/images/docker/5.jpg)

|  | fnOS | Synology DSM | Common Linux Distribution |
| :--- | :--- | :--- | :--- |
| USER_ID | 1000 | 1026 | 1000 |
| GROUP_ID | 1001 | 100 | 1000 |

![](/images/docker/id.jpg)

* Click `-` to remove empty environment variable values

![](/images/docker/11.jpg)

### Volumes

* Create a new folder on the host. This directory maps to the **container** directory `/config` (required)

![](/images/docker/8.jpg)

* On the container page, right-click details and edit volumes

![](/images/docker/12.jpg)

### Finish Running

Open port `5800` in the browser:

```text
http://192.168.1.2:5800
```

:::

## Common Linux Distribution

::: details Expand common Linux distribution tutorial

It is recommended to add the current user to the Docker user group first to avoid directory permission issues caused by running with sudo.

### Pull Docker Image

```sh
docker pull mvdctop/mdc-gui-lite
mkdir -p config data data/output
```

### Place a Test Video

This command creates an empty test file. You can also use a real video file.

```sh
touch ./data/Resident.Evil.2002.mp4
```

### Run the Container

#### shell

```sh
docker run \
  --rm \
  --name mdc-gui-lite \
  -p 5800:5800 \
  -v ${PWD}/data:/data \
  -v ${PWD}/output:/data/output \
  -v ${PWD}/config:/config/.mdc \
  -e USER_ID=$(id -u) \
  -e GROUP_ID=$(id -g) \
  -e NAME=Docker-MDC \
  mvdctop/mdc-gui-lite
```

#### docker-compose

Save as `docker-compose.yml` in the current directory:

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
      - ./config:/config/.mdc
    environment:
      - USER_ID=${USER_ID}
      - GROUP_ID=${GROUP_ID}
      - NAME=Docker-MDC
```

Run:

```sh
mkdir -p config data data/output
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)
docker-compose up
```

### Browser Access

Open port `5800` in the browser:

```text
http://192.168.1.2:5800
```

:::
