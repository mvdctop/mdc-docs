# MacOS
### 允許任何來源程式運行
* 在`終端`執行 `sudo spctl --master-disable` 密碼為使用者登陸密碼
* 左上角 - `系統偏好設定` - `安全性與隱私` - `安全性` - 勾選`任何來源`

# Docker

### 全新 Material Design 風格介面

[Docker Hub 頁面](https://hub.docker.com/r/mvdctop/mdc-gui-lite)


## 環境變數
| 欄位名稱 | 值語意 | 預設值        |
|:---------|:-----------|:-----------|
| USER_ID | 宿主機目前使用者ID | 1000       |
| GROUP_ID | 宿主機目前使用者群組ID | 1001       |
| NAME | 網頁端顯示的裝置名稱 | Docker-MDC |

## 卷
| 卷              | 解釋          |
|:---------------|:------------|
| /config/.mdc   | 設定檔資料夾      |
| /data          | 媒體資料資料夾     |
| /data/output   | 媒體資料輸出資料夾   |

::: warning
不建議在Docker容器內軟/硬連結文件

如果一定要使用連結文件，請確保在設定卷時
**宿主資料夾與容器資料夾完全一致**
:::

## 通訊埠
* `5800` HTTP


# 詳細教程

## NAS系統

::: details

* 開啟`Container Manager`取得`mvdctop/mdc-gui-lite`映像

### 通訊埠
* 映射埠HTTP 5800
  ![](/images/docker/4.jpg)


### 環境變數
![](/images/docker/5.jpg)

|        | fnOS   | Synology DSM  | 普通 Linux 發行版 |
|:---------|:-------|:--------------|:-----------|
| USER_ID  | 1000   | 1026          | 1000 |
| GROUP_ID | 1001   | 100           | 1000 |

![](/images/docker/id.jpg)

* 點選 `-` 移除環境變數空值
  ![](/images/docker/11.jpg)

### 卷
* 在宿主機中新資料夾，該資料夾用於映射**容器內**資料夾`/config`（必選）
  ![](/images/docker/8.jpg)

* 在容器頁面中，右鍵詳情，編輯卷
  ![](/images/docker/12.jpg)


### 完成運行，瀏覽器進入5800埠
http://192.168.1.2:5800

:::

## 普通 Linux 發行版

::: details

建議先將目前使用者加入Docker使用者群組中，具體請谷歌，免去sudo運行造成的資料夾權限問題

### 拉取Docker映像
```sh
docker pull mvdctop/mdc-gui-lite
mkdir -p config data data/output
```

### 放置測試影片，也可以用真實影片文件
該命令為建立空白測試文件
```sh
touch ./data/生化危機.2002.mp4
```

### 運行容器

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
儲存為 `docker-compose.yml` 於目前資料夾
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
命令
```sh
mkdir -p config data data/output
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)
docker-compose up
```

### 瀏覽器進入5800埠
http://192.168.1.2:5800

:::