# Linux

# MacOS
### 允許任何來源程式運行
* 左上角 - `系統偏好設定` - `安全性與隱私` - `安全性` - 勾選`任何來源`
* 如果沒有，請在`終端`執行 `sudo spctl --master-disable` 密碼為使用者登陸密碼
* 在`終端`執行 `sudo spctl --master-disable` 密碼為使用者登陸密碼

# Docker

::: warning
強烈建議在首次使用Docker版本前，先使用Windows或macOS版本

出現任何影響使用的BUG請使用桌面版，並參考[此處](/chs/cloud_mount.html)使用
:::

[Docker Hub 頁面](https://hub.docker.com/r/mvdctop/mdc-gui-lite)

## 遷移到新版本

::: tip
舊版 ~~mvdctop/mdc~~ **停止更新**
請拉取 mvdctop/mdc-gui-lite

該條目將指導閣下
由 ~~mvdctop/mdc~~ 遷移至 mvdctop/mdc-gui-lite
請點擊下方 **詳細** 閱讀
:::

::: details

---

### 新特性
可存取瀏覽器使用者介面，容器預設HTTP連接埠`5800`，與其他用戶端有一致的體驗

### 環境變數
* `UID`更改為`USER_ID`
* `GID`更改為`GROUP_ID`
* DSM請點選 `-` 移除環境變數空值
  ![](/images/docker/11.jpg)

### 連接埠
映射容器HTTP連接埠`5800`

### 設定文件
移除舊版設定檔`mdc.ini`，使用新版重新產生的設定文件

### 運行
瀏覽器訪問容器5800端口

**任何BUG請立即[聯絡我們](https://docs.mvdc.top/chs/contact.html)回饋**

---

:::


## 環境變數
| 欄位名稱 | 值語意 | 預設值        |
|:---------|:-----------|:-----------|
| USER_ID | 宿主機目前使用者ID | 1000       |
| GROUP_ID | 宿主機目前使用者群組ID | 1001       |
| NAME | 網頁端顯示的裝置名稱 | Docker-MDC |

## 卷
| 卷 | 解釋 |
|:-------------|:-------|
| /data | 媒體資料目錄 |
| /subs | 影片字幕目錄 |
| /config/.mdc | 設定檔目錄 |

::: warning
不建議在Docker容器內軟/硬連結文件

如果一定要使用連結文件，請確保在設定卷時
**宿主目錄與容器目錄完全一致**
:::

---

以下教學二選一

## NAS系統

::: details

* 開啟`Container Manager`取得`mvdctop/mdc-gui-lite`映像

### 連接埠
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
* 在宿主機中新資料夾，該目錄用於映射**容器內**目錄`/config/.mdc`（必選）
  ![](/images/docker/8.jpg)

* 在容器頁面中，右鍵詳情，編輯卷
  ![](/images/docker/12.jpg)

* `/subs`字幕目錄可選

### 完成運行，瀏覽器進入5800埠
http://192.168.1.2:5800

:::

## 普通 Linux 發行版

::: details

建議先將目前使用者加入Docker使用者群組中，具體請谷歌，免去sudo運行造成的目錄權限問題

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
儲存為 `docker-compose.yml` 於目前目錄
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