# 首頁
* Movie Data Capture (MDC) 是一款強大的軟體工具
* 專用於整理與刮削**本地影片或劇集**文件，從互聯網中獲取**電影或劇集**元數據和下載封面
* MDC有2個部分：網頁端用戶面板，本地客戶端
### 用戶面板
* **帳戶管理**：提供使用者註冊和登入功能
* **雲端配置管理**：用於管理雲端刮削的配置設置
* **裝置管理**：用於查看於管理登入帳號的裝置
### 本機客戶端
✅ 支援 Windows, Linux, Docker, MacOS X86 & ARM  
✅ **雲端配置同步**：客戶端可以同步網頁端的雲端配置，根據雲端配置對本地電影進行整理刮削  
✅ **元資料取得與封面下載**：根據雲端配置，對本機影片進行元資料刮削與封面下載  
✅ **多客戶端支援**：支援使用相同帳戶在多個本機用戶端上使用多個雲端設定實例  

# 使用教學

* 本程式和網站**不提供任何影片的下載途徑 僅供個人文件整理使用**
* 請關注[Telegram頻道](https://t.me/mvdc_news) 以取得最新通知

## 註冊帳號
* 在網頁端的[用戶面板](https://user.mvdc.top)註冊帳號
* 可在網頁端登入後，進行個人化[設定](https://user.mvdc.top/configuration/general)，新用戶建議使用當前默認設定
* 雲端配置支援多個配置實例，可新增多個雲端配置實例，應對不同類型的影片
  *（可選）如果頻繁使用或對資料精準有要求，建議閣下申請[TMDB API KEY](/cht/configuration.html#tmdb-api-key)填入雲端設定中

## 2. 訂閱
* **未激活賬號單次最多處理2個媒體檔案**
* 月付請等待內測結束，48小時內未激活帳號將會被刪除
### 目前內測階段價格
🟢 **永久** 440`HKD` 56`USDT` 399`CNY` （原價555，内測階段限時優惠；存量用戶轉永久價格為減去先前的訂閱費用）  
🟢 **一年** 110`HKD` 14`USDT` 110`CNY`

* 其他地區，通過WISE匯款，[點擊](/cht/payments.md)查看WISE教程

* 内測階段人工處理，**直接發送付款截圖**至Email`yoshiko2.dev@gmail.com`，Email標題：`付款截圖`
  永久只需發送附加用戶名無需手動激活

* 將盡快向閣下發送激活訊息，最快秒回最晚12小時內

![](/images/pay.png)

## 3. [下載](https://dl.mvdc.top)和運行
* 下載前請閱讀[各客戶端使用方式](/cht/clients.html)
* 强烈建議在使用Docker版本前，先使用Windows或macOS版本

## 4. 開啟用戶端 登入帳號
* 第一次打開，可在`Language`欄中選擇語言
* 每個帳號最多可登入3台設備，兩種配置各最多6個雲端配置實例

![](/images/readme1.png)

## 5. 用戶端設定
* 在本機用戶端設定頁中 設定刮削資料夾和輸出資料夾

![](/images/readme2.png)

* 預設情況下，輸入資料夾為程式所在目錄，輸出資料夾為程式所在目錄下新建的`output`資料夾

### 支援多個或單一檔案拖曳至程式視窗中刮削

### 外掛字幕文件
若在`刮削目錄`中，字幕檔名前綴名與影片檔前綴名一致，則會在後續處理中，自動移動到與影片同一目錄下，同時在NFO元資料檔標籤中打上`字幕`標籤， 並為封面打上浮水印（可自行在網頁雲端設定頁面中開啟或關閉）

## 6. 檢查檔案命名，可參考[檔案命名規則](/cht/naming.html)

* **根據影片類型在`本地配置`頁右下選擇相應`刮削類型`**

* 請在處理影片前進行名稱提取檢查是否符合預期
* 如果發現有提取名稱不符預期的影片，請手動重命名

## 7. 運行
* 為確保資料安全，暫定每次執行最多處理1000部影片。 如果需要處理1000部以外的本地影片，請在每次執行完成後查看處理情況，繼續運行

* 如閣下在客戶端**登入後**，在網頁端修改了雲端配置，請在點擊`運行`前在**客戶端**`配置`頁中點擊`同步`配置後運行

* 關於[單一檔案模式](/cht/cli.html#單一檔案模式)

* 處理失敗的影片會被記錄，在程式所在目錄下產生`failed_list.txt`

## 8. 結尾
* 可將輸出資料夾匯入於Emby, Jellyfin, Plex等媒體管理器中，管理影片
  ⚠️ **請勿**將整理前後的文件與產生的元數據，進行包括但不限於傳播，分發等侵犯版權的行為

---


## 存取程式日誌
系統使用者所在目錄下的 `.mdc/logs`

### 售後聯繫
yoshiko2.dev@gmail.com

### 友情鏈接
[CloudDrive](https://www.clouddrive2.com/)