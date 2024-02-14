# 命令列參數與設定檔編輯
## 運行參數
以下所有參數為可選參數
* `file` [單一檔案模式](#單一檔案模式) file為檔案路徑
* `-b` `--backend-hosting` 後台託管模式，依據當前雲端配置選擇是`每天指定運行時間`或`休眠指定分鐘後運行`
* `-cli` 開啟命令列模式
* `-login u=xxx,p=xxx` 登錄，首次輸入後續可自動登入
* `-g` 調試模式
* `-t` 名稱擷取模式
* `-s` 為輸出目錄下無字幕影片新增字幕
* `-o` 其他模式
* `-cc` `--cloud-config-instance` 雲端配置實例選擇，預設`Default`，如選擇名為`test1`的雲端配置實例`--cloud-config-instance "test1"` 或`- cc "test1"`
* `-lc` `--local-config-file` 本機設定文件，預設`mdc.ini`，如選擇名為`mdc_test.ini`的本機設定檔`--local-config-file "mdc_test.ini "` 或`-lc "mdc_test.ini"`
* `-C` 本機設定檔覆蓋模式，僅限於覆寫客戶端本機配置，如輸入輸出目錄配置，多個配置使用`;`分隔，實例如下
```shell
./MDC -cli -C "common:source_folders=['/a/video1'];common:success_folder=/a/output2"
```

## 配置文件
程式首次運作後，會在使用者家目錄下產生`.mdc/mdc.ini`文件
然後編輯`.mdc/mdc.ini`配置文件

```ini
[proxy]
switch = 0
type = http
proxy = localhost
port = 1080
```
### switch
代理開關 0關1開

### type
代理类型 `http` `socks5` `socks5h`

## proxy
代理地址 `localhost` `192.168.x.x`

## port
代理端口

```ini
[common]
language =
sync_time =
source_folders =
success_folder =
```
### language
程式語言 預設空為`eng` 可選`chs`簡體中文 `cht`繁體中文

### source_folders
輸入目錄 該值請輸入為清單 實例如下 請勿重複輸入
```ini
[common]
source_folders = ['C:/Users/Administrator/video1']
source_folders = ['/home/test/video1', '/home/test/video2']
```

### success_folder
成功輸出目錄 直接輸入目錄路徑 實例如下
```ini
[common]
success_folder = /home/test/output
```

### cloud_config_instance
選擇一般電影雲端配置實例，預設為`Default`，如自訂請填入新配置實例名稱
如果實例名稱不存在，則會使用`Default`
```ini
[common]
cloud_config_instance = Default
```

### cloud_config_instance_other
選擇其他電影雲端配置實例，預設為`Default`，如自訂請填入新配置實例名稱
如果實例名稱不存在，則會使用`Default`
```ini
[common]
cloud_config_instance_other = Default
```

## subs
```ini
[subs]
switch = 0
```
### 刮削時自動新增外掛字幕文件
* 0關 1開

```ini
[subs]
subs_folder = /home/test/subs
```
### 一般影片外掛字幕目錄

## user_token
```ini
[user_token]
token =
```
### 使用者登入令牌
* 首次登入後產生 用於自動登入 每台裝置的令牌都獨一無二
* **請勿複製並更改**

## other
```ini
[other]
switch = 0
```
### 其他模式
* 0關 1開

## 單一檔案模式
可拖曳一個影片檔案到程式圖示運行
終端機中請輸入`./MDC xxxxx.mp4`
若要處理其他影片 請先在GUI中開啟其他模式，或在設定檔中開啟，或附上`-r`參數