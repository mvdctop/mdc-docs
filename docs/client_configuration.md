# ⚙️ Client Local Configuration

## Configuration Reading

The default configuration file path is `.mdc/mdc.ini` under the system user directory.

If a file named `mdc.ini` also exists in the program directory, the program will read that file first. This allows programs in different locations to use independent configuration files.

## Directory Config

When one of the `Scraping Directory` entries is the same as the `Output Directory`, scraping and organizing can be done directly under the scraping directory. In this mode, only 1 scraping directory can be configured.

### Scraping Directory

Defaults to the folder where the program is located. You can add multiple folders manually.

### Output Directory

Defaults to the newly created `output` folder under the program runtime directory.

## Subtitle Config

If the subtitle file prefix in the `Scraping Directory` matches the video file prefix, the subtitle will be automatically moved to the same directory as the video during subsequent processing. The `Subtitle` tag will also be added to the NFO metadata file, and a watermark will be added to the cover (this can be turned on or off on the web cloud configuration page).

## General Settings

### Debug Mode

* Keep this disabled unless a BUG occurs, otherwise it may increase the probability of program crashes

When a BUG occurs, click `Stop`, enable `Debug Mode`, click `Run` again, then save the output log and related screenshots and send them according to [Report BUG](/bug_report.md).

### Check for Update on start

* Recommended to keep enabled to receive the latest update reminders

### Chrome Simulator

It is recommended to disable this feature. Enabling it will allow you to request sites with strong anti-scraping measures, but it will increase the scraping time. Chrome browser must be installed.

### Backend Hosting Mode

When checked, the scraping will not automatically stop after each cycle. It will automatically scrape newly added video files at intervals based on the currently selected cloud configuration settings.

## Custom URL Scraping

* Click`+`to add video files
* Fill in the specific video information URL, such as [https://www.themoviedb.org/movie/13189-a-christmas-carol](https://www.themoviedb.org/movie/13189-a-christmas-carol)
* Supported video information URLs include general websites in cloud configuration and video type websites in naming rules
* During processing, if a video has a custom URL, the custom URL will be used

## Actors

Add avatars for media server

::: tip
Only Emby and Jellyfin are supported.
:::

* Enter the server address
* Enter the API key, or open the `Key Creation Page`, create a new API key, and copy it into the input box
* Click `Save and test`
* Click `Start completing avatars`

## Custom Field Mapping Table

* After the program runs for the first time, a `mapping_tables` directory will be generated under `.mdc` in the system user directory. It contains two XML files and can be used with `Field Conversion Settings` in cloud configuration
* Actor mapping table: `mapping_actor.xml`
* Other field mapping table: `mapping_info.xml`
* Simplified Chinese to Traditional Chinese corresponds to `zh_tw`, Traditional Chinese to Simplified Chinese corresponds to `zh_cn`, and English `en` only supports content in the custom mapping table
