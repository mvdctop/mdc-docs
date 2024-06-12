# Cloud configuration

# Main running mode
* 1. Organize and generate NFO files and download pictures
The video file will be moved to the target directory, an NFO file will be generated in the target directory, and two cover images will be downloaded, and the video file will be renamed as `Video name.Year.Suffix name`  
**If you set the `Scraping Folder` to be the same as the `Output Folder` in [Client Local Configuration](/client_configuration.html#directory-configuration), you can organize and generate NFO files and download images under the original folder**

* Retain the original file naming mode 1
The video file will be moved to the target directory, an NFO file will be generated in the target directory, and two cover images will be downloaded without renaming the video.

* 2. Organize files only by location rules
Move movie files to target directory using location rules only

* 3. Update existing NFO and pictures
Update the existing NFO files and pictures in the target directory according to the `Update mode NFO file validity period (days)` in the cloud configuration. The validity period is calculated from the creation time of the NFO files and pictures.

* 4. Scrape in situ
Generate NFO files directly in the folder where the video is located, and download two cover images

* 5. Scrape and rename in place
Generate the NFO file directly in the folder where the video is located, download the two cover images, and rename the video file to `Video name.Year.Suffix name`

# TMDB API KEY
* Optional fields

Fill in the 32-bit TMDB API KEY, and you can get more detailed scraping information after filling it in.
For the application tutorial, you can search on Google for `TMDB API KEY application`

# File scanning exclusion configuration
## Exclude folders
Exclude this folder when scanning. If there are multiple folders, use `,`, for example `aa,bb,cc`

# Naming rule settings
| Variable | Explanation |
|----|------------|
| `title` | film title |
| `original_title` | Original title (untranslated title) |
| `actor` | actor |
| `studio` | company |
| `director` | director |
| `release` | Release date |
| `year` | Year of release |
| `number` | Video number |
| `cover` | cover link |
| `tag` | type |
| `outline` | Introduction |
| `runtime` | duration |
| `series` | series |

The above parameters are called **variables** below.

## Custom rule method
There are two kinds of elements, variables and characters. The plus sign `+` must be used to connect any kind of elements.
For example: `'['+number+']-'+title`, in which the text within the colon `''` is a character, and the text contained without a colon is a variable. The plus sign `+` must be used to connect the elements.
Do not use characters such as `%` `$` `&`

* `genres+'/'+title`
* `'#'+genres+'/'+title`
* `actor+'/'+number`
* `'#'+actor+'/'+number`

## Metadata file title naming rules
This is the naming rule for the `<title>` field in the NFO file. It has nothing to do with the file name and folder name. It is used to display the title in Emby, Jellyfin, and Plex.

##Delete the specified characters in the title
Delete the specified characters in the title. If you enter `\()`, the `\()` characters in the title will be deleted.

## Exclude characters for number extraction
When extracting the number, eliminate characters that interfere with the extracted number and separate them with `,`, for example `xxx.com@,bbb.net,ccc.top`

## Field conversion settings
[Custom field mapping table](/client_configuration.html#custom-field-mapping-table)