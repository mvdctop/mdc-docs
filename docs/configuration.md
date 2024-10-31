# Cloud configuration

# Common Configuration
## Primary Operating Mode
* 1.Organize, Create NFO, Download Img
The video file will be moved to the target directory, an NFO file will be generated in the target directory, and two cover images will be downloaded, and the video file will be renamed as `Video name.Year.Suffix name`  
**If you set the `Scraping Folder` to be the same as the `Output Folder` in [Client Local Configuration](/client_configuration.html#directory-configuration), you can organize and generate NFO files and download images under the original folder**

* Keep original naming with Organize
The video file will be moved to the target directory, an NFO file will be generated in the target directory, and two cover images will be downloaded without renaming the video.

* 2.Organize Based on Location Rules
Move movie files to target directory using location rules only

* 3.Update existing NFO and Images
Update the existing NFO files and pictures in the target directory according to the `Update mode NFO file validity period (days)` in the cloud configuration. The validity period is calculated from the creation time of the NFO files and pictures.

* 4.Scrape in place
Generate NFO files directly in the folder where the video is located, and download two cover images

* 5.Scrape and rename in place
Generate the NFO file directly in the folder where the video is located, download the two cover images, and rename the video file to `Video name.Year.Suffix name`


## Organize mode
The organize mode determines how the movie file is handled in order to move it to the target directory or create an association with the original file

### Move
In this mode, the movie file is moved from the original location to the target directory. This means that the original file will no longer remain in its initial directory, but will be managed in the new location

### Soft link
The soft link mode creates a shortcut to the original movie file in the target directory, and the file itself remains in the original location

### Hard link
**The file and the linked file must be in the same partition or file system**
Hard links are file system-level links, and multiple hard links actually point to the same physical file data blocks

### Create strm file
This mode creates a `.strm` file in the target directory, which is a simple text file containing the path information of the original movie file


## Download Missing Images Only
Applicable to `3.Update existing NFO and Images` in the main running mode. Only the missing images will be downloaded, and existing images won't be overwritten again.

## Actor-Only Tag
When turned on, the `<tag>` field of the metadata file with the `.NFO` extension will only be filled with the actor's name.

## Anonymous Fill
After turning it on, if there is no actor information in the metadata obtained, it will be automatically filled in as `Anonymous`

# Search Websites Configuration
## Deep Search
It may not be possible to obtain complete data on a single website. Therefore, the deep search function will visit the websites set in the `Search Website Order` in sequence.
The program will continue searching until data is obtained in the `Deep Search Fields` or all specified websites are traversed, Implementing data aggregation

* Turning it on will extend the file processing and completion sleep time.  
  It may trigger anti-crawl on some websites.

## TMDB API KEY
* Optional fields

Fill in the 32-bit TMDB API KEY, and you can get more detailed scraping information after filling it in.
For the application tutorial, you can search on Google for `TMDB API KEY application`

# File scanning exclusion configuration
## Exclude folders
Exclude this folder when scanning. If there are multiple folders, use `,`, for example `aa,bb,cc`

# Naming rule settings
| Variable | Explanation                         |
|----|-------------------------------------|
| `title` | film title                          |
| `original_title` | Original title (untranslated title) |
| `actor` | actor                               |
| `studio` | company                             |
| `director` | director                            |
| `release` | Release date                        |
| `year` | Year of release                     |
| `number` | Video number                        |
| `cover` | cover link                          |
| `tag` | type                                |
| `outline` | Introduction                        |
| `runtime` | runtime                             |
| `series` | Series                              |
| `prefix`         | mumber prefix                       |

The above parameters are called **variables** below.

## Custom rule method
Do not use characters such as `%` `$` `&`

* `genres/title`
* `actor/[number]-title`
* `actor/number`
* `#actor/number`

## Folder location Rule
After the media file is processed, it will be output to the path set by this setting.

## Media File Naming Rule
The naming rules after media file processing is completed. If the `Primary Operating Mode` is `Keep original naming with Organize`, the changed setting will not take effect.

## Media File Naming with Extension
After the media file is successfully processed, it will be opened with a suffix such as `-4K` `-VR` `-C`

## Metadata file title naming rules
This is the naming rule for the `<title>` field in the NFO file. It has nothing to do with the file name and folder name. It is used to display the title in Emby, Jellyfin, and Plex.

##Delete the specified characters in the title
Delete the specified characters in the title. If you enter `\()`, the `\()` characters in the title will be deleted.

## Exclude characters for number extraction
When extracting the number, eliminate characters that interfere with the extracted number and separate them with `,`, for example `xxx.com@,bbb.net,ccc.top`

# Watermark Configuration
## Watermark Type
* The reference watermark text language is English
### Classic
![](/images/watermark1.png)
### X Style
![](/images/watermark2.png)

## Field conversion settings
[Custom field mapping table](/client_configuration.html#custom-field-mapping-table)