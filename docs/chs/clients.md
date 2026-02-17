# macOS
### 允许任何来源程序运行
* 在`终端`运行 `sudo spctl --master-disable` 密码为用户登陆密码
* 左上角 - `系统偏好设置` - `安全性与隐私` - `安全性` - 勾选`任何来源`

# Docker

### 全新 Material Design 风格界面

[Docker Hub 页面](https://hub.docker.com/r/mvdctop/mdc-gui-lite)


## 环境变量
| 字段名      | 值语义        | 预设值        |
|:---------|:-----------|:-----------|
| USER_ID  | 宿主机当前用户ID  | 1000       |
| GROUP_ID | 宿主机当前用户组ID | 1001       |
| NAME     | 网页端显示的设备名称 | Docker-MDC |

## 卷
| 卷               | 解释      |
|:----------------|:--------|
| /config/.mdc    | 配置文件目录  |
| /data           | 媒体数据目录  |
| /data/output    | 媒体数据输出目录 |

::: warning
不推荐在Docker容器内软/硬链接文件

如果一定要使用链接文件，请确保配置卷时  
**宿主目录与容器目录完全一致**
:::

## 端口
* `5800` HTTP

# 详细教程

## NAS系统

::: details

* 打开`Container Manager`获取`mvdctop/mdc-gui-lite`映像

### 端口
* 映射HTTP端口5800
![](/images/docker/4.jpg)


### 环境变量
![](/images/docker/5.jpg)

|        | 飞牛 fnOS | 群晖 DSM | 普通 Linux 发行版 |
|:---------|:--------|:------|:-----------|
| USER_ID  | 1000    | 1026  | 1000       |
| GROUP_ID | 1001    | 100   | 1000       |

![](/images/docker/id.jpg)

* 点击 `-` 去除环境变量空值  
![](/images/docker/11.jpg)

### 卷
* 在宿主机中新建文件夹，该目录用于映射**容器内**目录`/config`（必选）
![](/images/docker/8.jpg)

* 在容器页面中，右键详情，编辑卷
![](/images/docker/12.jpg)


### 完成运行，浏览器进入5800端口
http://192.168.1.2:5800

:::

## 普通 Linux 发行版

::: details

建议先将当前用户添加至Docker用户组中，具体请谷歌，免去sudo运行造成的目录权限问题

### 拉取Docker镜像
```sh
docker pull mvdctop/mdc-gui-lite
mkdir -p config data data/output
```

### 放置测试影片，也可以用真实影片文件
该命令为创建空白测试文件
```sh
touch ./data/生化危机.2002.mp4
```

### 运行容器

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
保存为 `docker-compose.yml` 于当前目录
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
命令
```sh
mkdir -p config data data/output
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)
docker-compose up
```

### 浏览器进入5800端口
http://192.168.1.2:5800

:::

