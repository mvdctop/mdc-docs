# Linux

# MacOS
### 允許任何來源程式運行
* 左上角 - `系統偏好設定` - `安全性與隱私` - `安全性` - 勾選`任何來源`
* 如果沒有，請在`終端`執行 `sudo spctl --master-disable` 密碼為使用者登陸密碼
* 在`終端`執行 `sudo spctl --master-disable` 密碼為使用者登陸密碼

# Docker （實驗性）
* 注意，因為Docker檔案系統的特殊性，請仔細閱讀以下操作指南後再行使用，開發者對使用者**因未仔細閱讀文件**造成使用不當導致的文件遺失、損壞均不負責
* **無需設置任何網絡端口**

## 强烈建議在首次使用Docker版本之前，先使用Windows或macOS版本

## 與其他客戶端一些不同之處
*失敗處理記錄檔`failed_list.txt`，存放於容器目錄`/config`中
* 目前Docker版本只支援兩種影片模式各**一個**刮削目錄

## 環境變數

本鏡像增加了權限設定功能，你可以透過使用 UID (使用者id) GID (群組id) 兩個環境變數來設定程式執行後所有檔案的權限。

| 欄位名稱 | 值語意 | 預設值 |
|:------|:-----|:-------|
| UID | uid | 1026 |
| GID | gid | 100 |
| UMASK | source, output目錄的umask | 002 |
| NAME | 網頁端顯示的裝置名稱 | MDC-Docker |
| ARGS | [運行參數](/cht/cli.html# 運行參數) | 無 |
| cloud_username | 網頁端的使用者名稱 | 無 |
| cloud_password | 網頁端的密碼 | 無 |
| cloud_config_instance | 雲端設定實例名稱 | Default |
| local_config_file | 本機設定檔 | mdc.ini |

## 卷
| Docker卷      | 解釋     |
|:-------------|:-------|
| 自訂           | 媒體數據目錄 |
| /subs        | 影片字幕目錄 |
| /config/.mdc | 設定檔目錄  |

#### 以下教程二选一

## NAS系统

<details>

### 簡要流程
* 開啟`Container Manager`下載`mvdctop/mdc`映像

* 建立容器，設定環境變數

* 依閣下的[註冊](https://docs.mvdc.top/cht/#_1-%E5%9C%A8%E7%BD%91%E9%A1%B5%E7%AB%AF%E7% 9A%84%E7%94%A8%E6%88%B7%E9%9D%A2%E6%9D%BF%E6%B3%A8%E5%86%8C%E8%B4%A6%E5%8F% B7)的使用者名稱和密碼，且已被激活，填入`cloud_username`和`cloud_password`
* 可依需要填入`ARGS`[運行參數](/cht/cli.html#運行參數)，刮削**其他**影片則加`-o`
* 如指定自訂配置，則`cloud_config_instance`填入自訂雲端配置實例名稱，`local_config_file`為在容器`/config/.mdc`對應宿主目錄下的設定檔名

* DSM首個新建用戶的`UID`為1026，無需設定；Unraid請設定為99
* 其他系統：連接系統SSH，連線方法自行搜索，連線後輸入`id`指令取得目前使用者 `UID` `GID`，填入環境變數`UID` `GID`

* **不勾選**完成後執行此容器

* 在容器頁面中，右鍵詳情，編輯卷，`/subs`字幕目錄可選

* 左側為宿主機目錄（自行設定），右側為容器中的目錄（不可變）
* 在宿主機中新資料夾，該目錄用於映射**容器內**目錄`/config/.mdc`

* 儲存後運行

* 第一次運行，會在`config`目錄下產生`mdc.ini`文件
  閱讀[這裡](https://docs.mvdc.top/cht/cli.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)依自身需求配置 ，如配置代理

* **請勿修改`[common]`下`folder`相關配置**，這是容器內的目錄配置，修改會導致`來源資料夾找不到`

* 第二次運行後，查看日誌後如果正常，則可在運行結束後移除環境變數`cloud_username`和`cloud_password`

### 圖文流程
* 開啟`Container Manager`下載`mvdctop/mdc`映像
  ![](/images/docker/1.jpg)
  ![](/images/docker/2.jpg)
  ![](/images/docker/3.jpg)
  ![](/images/docker/4.jpg)
* 依閣下的[註冊](https://docs.mvdc.top/cht/#_1-%E5%9C%A8%E7%BD%91%E9%A1%B5%E7%AB%AF%E7% 9A%84%E7%94%A8%E6%88%B7%E9%9D%A2%E6%9D%BF%E6%B3%A8%E5%86%8C%E8%B4%A6%E5%8F% B7)的使用者名稱和密碼，且已被激活，填入`cloud_username`和`cloud_password`  
  可依需要填寫`ARGS`[運行參數](/cht/cli.html#運行參數)，如果刮削或整理**其他**影片，則添加`-o`  
  如自訂其他雲端設定實例，則`cloud_config_instance`填寫自訂雲端設定實例名稱，`local_config_file`自訂本機設定檔

* DSM首個新建用戶的`UID`為1026，無需設定；Unraid請設定為99  
  其他系統：連接系統SSH，連線方法自行搜索，連線後輸入`id`指令取得目前使用者 `UID` `GID`，填入環境變數`UID` `GID`

![](/images/docker/id.jpg)
![](/images/docker/5.jpg)
* **不勾選**完成後執行此容器
  ![](/images/docker/6.jpg)
* 在容器頁面中，右鍵詳情，編輯卷
  ![](/images/docker/7.jpg)
* 在宿主機中新資料夾，該目錄用於映射**容器內**目錄`/config/.mdc`（必選）
  ![](/images/docker/8.jpg)
* 
* 預設情況下，雲端配置為以移動方式整理文件，如需使用連結方式整理文件，請在[用戶面板](https://user.mvdc.top)中修改儲存
* 設定左側與右側的資料目錄為一致，且**刮削目錄與輸出目錄在同一目錄下**

* 若使用硬鏈接，請確保刮削目錄與輸出目錄都處於**同一硬碟分區**下

* 在下文產生的`mdc.ini`檔案中修改目錄配置
* `mdc.ini`中把`source_folders`為刮削目錄，請勿移除`['`和`']`
* `mdc.ini`中把`success_folder`為輸出目錄
* `/subs`字幕目錄可選

* 儲存後運行

* 第一次運行，會在`config`目錄下產生`mdc.ini`文件，如果發生意外退出錯誤請忽略
* **請勿修改`[common]`下`folder`相關配置**，這是容器內的目錄配置，修改會導致`來源資料夾找不到`
* 閱讀[這裡](https://docs.mvdc.top/cht/cli.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)依自身需求配置
  ![](/images/docker/10.jpg)
* 第二次運行後，查看日誌後如果正常，則可在運行結束後移除環境變數`cloud_username`和`cloud_password`
  ![](/images/docker/11.jpg)

## 若發生意外退出錯誤請忽略

</details>

## Linux Shell

<details>


## 首次運行
建議先將目前使用者加入Docker使用者群組中，具體請谷歌，免去sudo運行造成的目錄權限問題

### 拉取Docker映像
```sh
docker pull mvdctop/mdc
mkdir test output
```

### 放置測試影片，也可以用真實影片文件
該命令為建立空白測試文件
```sh
touch ./test/生化危機.2002.mp4
```

### 第一次運行，在當前`config`目錄下注入預設設定文件
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/config:/config/.mdc \
  mvdctop/mdc
```

此時，目前目錄下的config資料夾出現mdc.ini文件，可依自身需求，參考[設定檔](https://docs.mvdc.top/cht/cli.html)進行編輯，請勿修改mdc .ini中的**目錄配置**和**token**

### 運行容器
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/source:/source \
  -v ${PWD}/output:/output \
  -v ${PWD}/config:/config/.mdc \
  -e UID=$(stat -c %u test) \
  -e GID=$(stat -c %g test) \
  -e ARGS="" \
  -e NAME=MDC-Docker \
  -e cloud_username=USERNAME \
  -e cloud_password=PASSWORD \
  -e cloud_config_instance="Default" \
  -e local_config_file="mdc.ini" \
  mvdctop/mdc
```


## 後續運行
* 非首次運行，可以刪除`cloud_username`和`cloud_password`，登入憑證已寫入配置
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/source:/source \
  -v ${PWD}/output:/output \  
  -v ${PWD}/config:/config/.mdc \
  -e UID=$(stat -c %u test) \
  -e GID=$(stat -c %g test) \
  -e ARGS="" \
  mvdctop/mdc
```

* 如顯示被踢出，則需再次輸入`cloud_username`和`cloud_password`環境變量
* 如需要改名，則需要刪除容器再次進行上一步的拉取，進行首次運行操作

然後你會看到以下輸出，如果輸出如下證明工作正常

```sh
---Setup Timezone to Asia/Shanghai---
---Checking if UID: 1000 matches user---
---Checking if GID: 1000 matches user---
usermod: no changes
---Setting umask to 002---
---Taking ownership of data...---
Checking if config file exist
Starting...
---------------------------------------------------------
                      Login Success
---------------------------------------------------------
                 Expire Date: 2XXX-01-01
---------------------------------------------------------
[*]================= Movie Data Capture =================
[*]                        7.0.3
[*]======================================================
[*] - Linux-6.2.0-1016-kvm-x86_64-with-glibc2.37
[*] - x86_64 - Python-3.11.4
[*]======================================================
[*] Current Cloud Config Instance: Default
[*]======================================================
[+] Start at 2023-XX-XX XX:XX:XX
[+] Main Working mode - 1 - Scraping
[+] Find  1  movies
[*]======================================================
[!]                - 100.% [1/1] -             XX:XX:XX
[!] [生化危機] As Name Processing for '生化危機.2002.mp4'
[+]Image Downloaded! thumb.jpg
[+]Image Downloaded! backdrop.jpg
[*]======================================================
[+]Running time 0:00:08.148  End at 2023-XX-XX XX:XX:XX
[+]All finished!!!
- Log file '/config/.mdc/logs/mdc_2023xxxxTxxxxxx.txt' saved
```

</details>

