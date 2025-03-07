# General Movie or Episode 

::: details

### Episode naming rules
🟢 To scrape episodes, the file name must contain at least `x episodes/episodes/episodes`, `EPxx`  
🟢 If the file name is only `x episode/episode/episode` `EPxx` and does not contain `x season`, `SxxExx`, it will be recognized as episode x of **Season 1** by default  
🟢 Accurate to scrape x season x episode, the file name **must** contain `SxxExx` `x season x episode` `x season  

### Episode naming
`The.Walking.Dead.S01E01.2010.mp4`  
`The.Vampire.Diaries.S01E13.2010.720p.BluRay.x264.AC3-CMCT.mkv`

## Video naming
![](/images/example33.png)

`Inception.2010.UHD.BluRay.1080p.DTS.HDR.x265-TnP.mkv`  
`Kung.Fu.Hustle.2004.BluRay.1080p.x265.10bit.2Audio.MNHD-FRDS.mkv`  
`The Martian.2015.mp4`  
`Resident Evil.2002.1080p.mp4`  

### Naming suffix

> As a technical mark only, the program only adds labels and watermarks to the cover image in the NFO file based on the file name, and does not detect the file content;
> The developer is not responsible for the content of the file and does not represent any specific position

Please open the folded content below to view

::: details

| Watermark type | Video file name |
|------|-----------------|
| 4K | `xxxxxx-4k.mp4` |
| 8K | `xxxxxx-8k.mp4` |
| Original disk(ISO) | `xxxxxx.iso` |

### Custom watermark image file
* It is recommended that the size be `769 x 374` or a PNG image with similar proportions (must contain a transparent layer or the reading will fail)

* Create a new `watermarks` directory under the `.mdc` directory in the current user directory. If there are files named below in the newly created directory, the original watermark image of the program will be overwritten (case sensitive)

| Watermark type | Watermark file name |
|------|-----------|
| Subtitles | `SUB.png` |
| 4K | `4K.png` |
| 8K | `8K.png` |
| Original disk(ISO) | `ISO.png` |

:::


---

# Other Movie

::: details

Used to scrape movies sold in Japan that are named after numbers, for example:
> The following pictures are from the Internet and are for reference only. The copyright belongs to the copyright holder.

![](/images/example11.png)

### No need to judge case

| Video type | File name |
|----------------|-------------------------------------------------------|
| Ordinary video | `xxx-888.mp4` |
| Multi-episode videos | `xxx-777-CD1.mp4` `xxx-777-CD2.mp4` If other suffixes are included - CD is placed last |
| DMM/FANZA | `test00114.mp4` |
| FC2 | `FC2-666666.mp4` |
| Fantia | `FANTIA-666666.mp4` |
| DLsite | `VJ555555.mp4` `RJ444444.mp4` |
| Getchu | `GETCHU-123456.mp4` `item654321.mp4` |
| Gcolle | `gcolle-987654.mp4` |

### Naming suffix

> As a technical mark only, the program only adds labels and watermarks to the cover image in the NFO file based on the file name, and does not detect the file content;
> The developer is not responsible for the content of the file, nor does it represent any specific position

Please open the folded content below to view

::: details

| Watermark type | Video file name |
|-------------|---------------------------------|
| Outflow | `xxx-555-leak.mp4` |
| AI demosaicing | `xxx-444-hack.mp4` |
| 4K | `xxx-333-4k.mp4` |
| VR | `ddd-555-vr.mp4` |
| Original disk(ISO) | `xxx-xxx.iso` |

### Custom watermark image file
The recommended size is `769 x 374` or a PNG image with similar proportions (must contain a transparent layer or the reading will fail)
Create a new `watermarks` directory under the `.mdc` directory in the current user directory. If there are files named below in the newly created directory, the original watermark image of the program will be overwritten (case sensitive)

| Watermark type | Watermark file name |
|--------|------------------|
| Subtitles | `SUB.png` |
| 4K | `4K.png` |
| 8K | `8K.png` |
| Original disk | `ISO.png` |
| Outflow | `LEAK.png` |
| VR | `VR.png` |
| Infantry | `UNCENSORED.png` |

:::
