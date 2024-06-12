# Client local configuration

## Please be sure to click Save after each modification.

## Configuration reading
The default path of the configuration file is `.mdc/mdc.ini` located in the system user directory
However, if a configuration file named `mdc.ini` also exists in the directory where the program is located, then the program will read that file first. Enables programs in different locations to read independent configuration files

## Directory configuration
When one of the `Scraping Folders` is the same as the `Output Folder`, can realize scraping and finishing under the `Scraping Folders`, only one scraping directory can be configured.
### Scraping Folders
The default is the folder where the program is located, you can add multiple folders yourself
### Output Folder
The default is the newly created `output` folder in the program running directory.

## Other configurations
### Name extraction mode
* Based on the file naming of the movie, perform name extraction test on the movie

Before each run, be sure to check the name extraction check box and run it once.
If the extracted name is inconsistent with the movie name, please manually modify the movie file name according to [Naming Rules] (/chs/naming.md) and run it again to check.
Until the name extraction of the video to be scraped is correct, you can uncheck the name extraction mode and run

### Debug mode
* Be sure to keep it normally closed and only open it when a BUG occurs, otherwise it will increase the probability of program crash.

Please click `Stop` when a BUG occurs, check `Debug Mode` and click `Run` again, save the output log and relevant screenshots and send them according to [Report BUG](/chs/bug_report.md)

### Check for updates
* It is recommended to keep it open to get the latest update reminders

## Custom URL scraping
* Click `+` to add video files
* Fill in the URL as the specific URL of the movie information, such as [https://www.themoviedb.org/movie/13189-a-christmas-carol](https://www.themoviedb.org/movie/13189-a-christmas -carol)
* The supported video information URLs are general websites in cloud configuration and video type websites in naming rules.
* During operation, if a video with a custom URL is processed, the custom URL will be used

## Custom field mapping table
* After the program is run for the first time, the `mapping_tables` directory will be generated in the `.mdc` directory in the system user directory, containing two xml files, which can be used in conjunction with the `field conversion settings` in the cloud configuration.
* Actor mapping table: `mapping_actor.xml`, other field mapping tables: `mapping_info.xml`
* English `en` only supports the content in the custom mapping table