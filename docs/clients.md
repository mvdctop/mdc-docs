# Linux

# macOS
### Allow any source program to run
* Upper left corner - `System Preferences` - `Security & Privacy` - `Security` - Check `Any Source`
* If not, please run `sudo spctl --master-disable` in `terminal` and the password is the user login password
* Run `sudo spctl --master-disable` in `terminal` and the password is the user login password

# Docker

::: warning
It is strongly recommended to use the Windows or macOS version before using the Docker version for the first time

If any bugs affect the use, please use the desktop version and refer to [here](/chs/cloud_mount.html)

:::

[Docker Hub page](https://hub.docker.com/r/mvdctop/mdc-gui-lite)

## Migrate to the new version

::: tip
Old version ~~mvdctop/mdc~~ **Stop updating**
Please pull mvdctop/mdc-gui-lite

This entry will guide you
Migrate from ~~mvdctop/mdc~~ to mvdctop/mdc-gui-lite
Please click **Details** below to read
:::

::: details

---

### New features
Access the browser user interface, the container defaults to HTTP port `5800`, and has a consistent experience with other clients

### Environment variables
* `UID` changed to `USER_ID`
* `GID` changed to `GROUP_ID`
* DSM, please click `-` to remove the empty value of the environment variable
  ![](/images/docker/11.jpg)

### Port
Map container HTTP port `5800`

### Configuration file
Remove the old version of the configuration file `mdc.ini` and use the new version to regenerate the configuration file

### Run
Access the container port 5800 through the browser

**Please [contact us](https://docs.mvdc.top/chs/contact.html) for any bugs**

---

:::

## Environment variables
| Field name | Value semantics | Default value |
|:---------|:-----------|:--------------|
| USER_ID | Current user ID of the host | 1000          |
| GROUP_ID | Current user group ID of the host | 1001          |
| NAME | Device name displayed on the web | Docker-MDC    |

## Volumes
| Volumes | Explanation |
|:-------------|:-------|
| /data | Media data directory |
| /subs | Video subtitle directory |
| /config/.mdc | Configuration file directory |

::: warning
Soft/hard link files in Docker containers are not recommended

If you must use link files, make sure that when configuring volumes,
**the host directory and the container directory are exactly the same**

:::

---

Choose one of the following tutorials

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
* Create a new folder in the host machine. This directory is used to map the **container** directory `/config/.mdc` (required)
  ![](/images/docker/8.jpg)

* In the container page, right-click details and edit volume
  ![](/images/docker/12.jpg)

* `/subs` subtitle directory is optional

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
  -v ${PWD}/config:/config/.mdc \
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
      - ./config:/config/.mdc
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