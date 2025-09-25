# 錯誤處理

## 開啟客戶端無任何反應

若執行 `MDC.exe` 或 `MDC.app` 無任何反應

### Windows

- 進入 `C:\Users\當前使用者名稱` 或在**檔案總管**的地址欄中輸入 `%homepath%` 並按 Enter 鍵
- 刪除 `.mdc` 資料夾

### macOS

- 開啟 Finder - 前往 - 個人
- 按下 `Command + Shift + .` 顯示隱藏檔案
- 刪除 `.mdc` 資料夾

### Docker

- 刪除 `/config/.mdc` 下的所有檔案

### Linux & macOS shell

```shell
rm -rf ~/.mdc
```

## `Caused by ProxyError`
請檢查代理，如果自訂代理未開啟，請開啟全域代理後運行
如果錯誤依舊，請更換代理節點

## 佚名
所有影片刮除資訊來自網路公開內容，難免會有資訊缺失現象，開發者不對資訊的準確性負責，詳細請看[免責聲明第三條：資料準確度](/cht/laws/disclaimer.md# 第三條-數據準確性)1