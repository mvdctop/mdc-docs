# 🧾 檔案命名規則

## 一般影片或劇集

::: details 展開一般影片或劇集命名規則

### 劇集識別規則

* 刮削劇集時，檔案名稱**至少**需要包含`x集/話/话`或`EPxx`
* 如果檔案名稱只包含`x集/話/话`或`EPxx`，不包含`x季`或`SxxExx`，則預設識別為**第 1 季**的第 x 集
* 如需精確識別到第 x 季第 x 集，檔案名稱**必須**包含`SxxExx`、`x季x集`、`x季x集/話/话`或`x季x`

### 劇集命名示例

```text
行屍走肉.S01E01.2010.mp4
The.Vampire.Diaries.S01E13.2010.720p.BluRay.x264.AC3-CMCT.mkv
[某某電影-www.dyxxx.org]惡人傳記-01集.mp4
```

### 影片命名示例

![](/images/example3.png)

```text
Inception.2010.UHD.BluRay.1080p.DTS.HDR.x265-TnP.mkv
Kung.Fu.Hustle.2004.BluRay.1080p.x265.10bit.2Audio.MNHD-FRDS.mkv
火星救援.2015.mp4
生化危機.2002.1080p.mp4
[掃毒].The.White.Storm.2013.BluRay.1080p.x264.DTS.2Audios-CMCT.mp4
為奴十二年.mp4
[電影某堂www.dyxxxx.com]切爾諾貝利日記-2012_藍光中英雙字.mp4
陽某電影dyxxx.org.藍甲蟲.2023.BD.1080P.中英雙字.mkv
修理釣線.2023.HD1080P.AAC.H264.CHS.BT世某網.[www.btsxx.com].mp4
某影世界www.movie.com.測試.2022.HD.1080P.中英雙字.mkv
救贖之日.BD.1080p.中英雙字.mp4
```

:::

### 一般影片命名後綴

::: tip
命名後綴僅作為技術性標記。程式只會根據檔案名稱在 NFO 檔案中添加標籤，並給封面圖片打上浮水印，不會檢測檔案內容。

開發者不對檔案內容負責，也不代表任何特定立場。
:::

::: details 展開命名後綴與自訂浮水印說明

| 浮水印類型 | 影片檔案名稱 |
| --- | --- |
| 4K | `xxxxxx-4k.mp4` |
| 8K | `xxxxxx-8k.mp4` |
| 原盤 | `xxxxxx.iso` |
| 字幕 | `xxxxxx-C.mp4` |

#### 自訂浮水印圖片文件

* 建議使用`769 x 374`或比例相近的 PNG 圖片，且必須包含透明圖層，否則讀取會失敗
* 在目前使用者目錄下的`.mdc`目錄中新建`watermarks`目錄
* 如果`watermarks`目錄中存在以下命名的檔案，會覆蓋程式原有的浮水印圖片（區分大小寫）

| 浮水印類型 | 浮水印檔案名稱 |
| --- | --- |
| 字幕 | `SUB.png` |
| 4K | `4K.png` |
| 8K | `8K.png` |
| 原盤 | `ISO.png` |

:::

## 其他電影

::: details 展開其他電影命名規則

用於刮削在日本發售、以號碼為命名方式的影片，例如：

![](/images/example1.png)

### 無需判斷大小寫

| 影片類型 | 檔案名稱 |
| --- | --- |
| 普通影片 | `XXX-888.mp4` `lorem.11.22.33.mp4` `XXXXXX-114514_191.mp4` `XXXXX-191981-100.mp4` |
| 多集影片 | `XXX-777-CD1.mp4` `XXX-777-CD2.mp4` `XXX-777-part1.mp4` `xxx-777-part2.mp4` |
| DMM/FANZA | `test00114.mp4` |
| FC2 | `FC2-666666.mp4` |
| Fantia | `FANTIA-666666.mp4` |
| DLsite | `VJ555555.mp4` `RJ444444.mp4` |
| Getchu | `GETCHU-123456.mp4` `item654321.mp4` |
| Gcolle | `gcolle-987654.mp4` |
| 動漫番劇及其他日語檔案名稱 | `[xx字幕組][xxx]xxxxxxx[xxx][x264].mp4` `xxxxxxxxx.mp4` |

:::

### 其他電影命名後綴

::: tip
命名後綴僅作為技術性標記。程式只會根據檔案名稱在 NFO 檔案中添加標籤，並給封面圖片打上浮水印，不會檢測檔案內容。

開發者不對檔案內容負責，也不代表任何特定立場。
:::

::: details 展開命名後綴與自訂浮水印說明

| 浮水印類型 | 影片檔案名稱 |
| --- | --- |
| 流出 | `xxx-555-leak.mp4` |
| AI 去馬賽克 | `xxx-444-hack.mp4` |
| 4K | `xxx-333-4k.mp4` |
| 包含字幕 | `xxx-222ch.mp4` `xxx-222-C.mp4` |
| 字幕和 4K | `xxx-111-c-4k.mp4` |
| AI 去馬賽克和包含字幕 | `xxx-999-UC.mp4` |
| VR | `ddd-555-vr.mp4` |
| 原盤 | `xxx-xxx.iso` |

#### 自訂浮水印圖片文件

* 建議使用`769 x 374`或比例相近的 PNG 圖片，且必須包含透明圖層，否則讀取會失敗
* 在目前使用者目錄下的`.mdc`目錄中新建`watermarks`目錄
* 如果`watermarks`目錄中存在以下命名的檔案，會覆蓋程式原有的浮水印圖片（區分大小寫）

| 浮水印類型 | 浮水印檔案名稱 |
| --- | --- |
| 字幕 | `SUB.png` |
| 4K | `4K.png` |
| 8K | `8K.png` |
| 原盤 | `ISO.png` |
| 流出 | `LEAK.png` |
| VR | `VR.png` |
| 步兵 | `UNCENSORED.png` |
| AI 去馬賽克 | `HACK.png` |

:::
