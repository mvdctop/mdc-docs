# 一般影片或剧集

<details>

### 剧集命名规则
🟢 刮削剧集，文件名**至少**包含`x集/話/话`,`EPxx`  
🟢 如文件名只有`x集/話/话` `EPxx`，不含`x季`,`SxxExx`，则默认识别为**第1季**的第x集  
🟢 精确到刮削x季x集，文件名**必须**包含`SxxExx` `x季x集` `x季x集/话/話` `x季x`  

### 剧集的命名
`行尸走肉.S01E01.2010.mp4`  
`The.Vampire.Diaries.S01E13.2010.720p.BluRay.x264.AC3-CMCT.mkv`  
`[某某电影-www.dyxxx.org]恶人传记-01集.mp4`

## 影片的命名
![](/images/example3.png)

`Inception.2010.UHD.BluRay.1080p.DTS.HDR.x265-TnP.mkv`  
`Kung.Fu.Hustle.2004.BluRay.1080p.x265.10bit.2Audio.MNHD-FRDS.mkv`  
`火星救援.2015.mp4`  
`生化危机.2002.1080p.mp4`
`[扫毒].The.White.Storm.2013.BluRay.1080p.x264.DTS.2Audios-CMCT.mp4`  
`为奴十二年.mp4`  
`[电影某堂www.dyxxxx.com]切尔诺贝利日记-2012_蓝光中英双字.mp4`  
`阳某电影dyxxx.org.蓝甲虫.2023.BD.1080P.中英双字.mkv`  
`修理钓线.2023.HD1080P.AAC.H264.CHS.BT世某网.[www.btsxx.com].mp4`  
`某影世界www.movie.com.测试.2022.HD.1080P.中英双字.mkv`
`救赎之日.BD.1080p.中英双字.mp4`  

### 命名后缀

> 仅作为技术性标记，程序只根据文件名，在NFO文件中添加标签与封面图片打上水印，不对文件内容进行检测；
> 开发者不对文件内容负责，也不代表任何特定立场

请打开下方折叠内容查看

<details>

| 水印类型 | 影片文件名           |
|------|-----------------|
| 4K   | `xxxxxx-4k.mp4` |
| 8K   | `xxxxxx-8k.mp4` |
| 原盘   | `xxxxxx.iso`    |
| 字幕   | `xxxxxx-C.mp4`  |

### 自定义水印图片文件
* 建议大小为`769 x 374`或比例相近的PNG图片（必须包含透明图层否则读取失败）

* 在当前用户目录下的`.mdc`目录下新建`watermarks`目录，在新建的目录下若存在以下命名的文件则会覆盖程序原有的水印图片（区分大小写）

| 水印类型 | 水印文件名     |
|------|-----------|
| 字幕   | `SUB.png` |
| 4K   | `4K.png`  |
| 8K   | `8K.png`  |
| 原盘   | `ISO.png` |

</details>

</details>

---


# 其他电影

<details>

用于刮削在日本发售以号码为命名方式的影片，例如：
> 以下图片来自互联网，仅供参考，版权归版权者所有

![](/images/example1.png)

### 无需判断大小写

| 影片类型           | 文件名                                                  |
|----------------|------------------------------------------------------|
| 普通影片           | `xxx-888.mp4`                                        |
| 多集影片           | `xxx-777-CD1.mp4` `xxx-777-CD2.mp4` 包含其他后缀情况下-CD放最后  |
| DMM/FANZA      | `test00114.mp4`                                      |
| FC2            | `FC2-666666.mp4`                                     |
| Fantia         | `FANTIA-666666.mp4`                                  |
| DLsite         | `VJ555555.mp4` `RJ444444.mp4`                        |
| Getchu         | `GETCHU-123456.mp4` `item654321.mp4`                 |
| Gcolle         | `gcolle-987654.mp4`                                  |
| 动漫番剧 及 其他日语文件名 | `[xx字幕组][xxx]xxxxxxx[xxx][x264].mp4` `xxxxxxxxx.mp4` |

### 命名后缀

> 仅作为技术性标记，程序只根据文件名，在NFO文件中添加标签与封面图片打上水印，不对文件内容进行检测；
> 开发者不对文件内容负责，也不代表任何特定立场

请打开下方折叠内容查看

<details>

| 水印类型        | 影片文件名                           |
|-------------|---------------------------------|
| 流出          | `xxx-555-leak.mp4`              |
| AI去马赛克      | `xxx-444-hack.mp4`              |
| 4K          | `xxx-333-4k.mp4`                |
| 包含字幕        | `xxx-222ch.mp4` `xxx-222-C.mp4` |
| 字幕和4K       | `xxx-111-c-4k.mp4`              |
| AI去马赛克和包含字幕 | `xxx-999-UC.mp4`                |
| VR          | `ddd-555-vr.mp4`                |
| 原盘          | `xxx-xxx.iso`                   |

### 自定义水印图片文件
建议大小为`769 x 374`或比例相近的PNG图片（必须包含透明图层否则读取失败）
在当前用户目录下的`.mdc`目录下新建`watermarks`目录，在新建的目录下若存在以下命名的文件则会覆盖程序原有的水印图片（区分大小写）

| 水印类型   | 水印文件名            |
|--------|------------------|
| 字幕     | `SUB.png`        |
| 4K     | `4K.png`         |
| 8K     | `8K.png`         |
| 原盘     | `ISO.png`        |
| 流出     | `LEAK.png`       |
| VR     | `VR.png`         |
| 步兵     | `UNCENSORED.png` |
| AI去马赛克 | `HACK.png`       |

</details>

</details>
