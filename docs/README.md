# 🏠 Home

[繁體中文](/zh-Hant/README.md) | [简体中文](/zh-Hans/README.md)

## Overview

Movie Data Crawler (MDC) is a software tool for organizing and scraping **local movie or series** files. It can obtain **movie or series** metadata from the Internet and download covers.

MDC consists of two parts:

* Web user panel
* Local client

### User Panel

* **Account Management**: Provides user registration and login
* **Cloud Configuration Management**: Manages cloud scraping configurations
* **Device Management**: Views and manages devices logged in with your account

### Local Client

* ✅ **OpenAI large model translation integration**: Supports translation with OpenAI large models
* ✅ **Multi-platform support**: Supports Windows, Linux, Docker, MacOS X86 & ARM
* ✅ **Cloud configuration synchronization**: Synchronizes cloud configurations from the web panel and organizes local videos based on those configurations
* ✅ **Metadata acquisition and cover download**: Scrapes metadata for local videos and downloads covers based on cloud configurations
* ✅ **Multi-client support**: Supports using multiple cloud configuration instances on multiple local clients under the same account

## Contact Us

[Contact us](/contact.html)

# 📖 Use Tutorial

::: warning
This program and website **do not provide any video download methods and are only for personal file organization**.
:::

## 1. Download and Run

* Go to the [download page](https://dl.mvdc.top), download and run the program. Global proxy usage is recommended
* Upon first opening, you can select the language in the `Language` field: `简体中文` `繁體中文` `English`
* Except for Windows systems, please read [How to use each client](/clients.html) before downloading
* It is strongly recommended to install the `Chrome` browser, as MDC relies on `Chrome` to improve the scraping success rate

## 2. Register an Account and Log In

* Register an account on the web [User Panel](https://user.mvdc.top)
* Click `Login` in the client

![](/images/readme1_en.png)

After logging in, you can personalize [Cloud Configuration](https://user.mvdc.top/configuration/general). New users are recommended to use the current default configuration first.

* Cloud configuration supports multiple instances, which can be added for different types of videos
* Each account can log in to up to 3 devices, and each of the two configurations can have up to 6 cloud configuration instances
* (Optional) If you use it frequently or require more accurate data, apply for a [TMDB API KEY](/configuration.html#tmdb-api-key) and fill it in the cloud configuration

## 3. Activate Subscription

* Select a suitable subscription plan on the [Activate Subscription](https://user.mvdc.top/activation) page
* The subscription will be activated automatically after payment is completed
* Multiple payment methods are supported

## 4. Configure Local Directories

* Configure the scraping directory and output directory on the `Local Configuration` page
* NAS or cloud drive users should refer to [NAS or cloud drive directory configuration](/cloud_mount.html)

![](/images/readme2_en.png)

By default, the input folder is the program directory, and the output folder is the newly created `output` folder under the program directory.

## 5. Select Scraping Type

According to the [File Naming Rules](/naming.html), click the corresponding `Scraping Type` in the lower right corner of the `Local Configuration` page.

![](/images/scraping_type_en.png)

* Before processing videos, click `Name Extraction Check` to confirm whether the extracted result meets expectations
* If the extracted name does not meet expectations, manually rename the video file

### External Subtitle Files

If the subtitle file prefix in the `Scraping Directory` matches the video file prefix, the subtitle will be automatically moved to the same directory as the video during subsequent processing. The `Subtitle` tag will also be added to the NFO metadata file, and a watermark will be added to the cover (this can be turned on or off on the web cloud configuration page).

## 6. Start Scraping

If you modified the web cloud configuration after **logging in** on the client, click `Synchronize` on the **client** `Configuration` page before clicking `Start`.

::: tip
* Supports dragging multiple or single files into the MDC window for scraping
* When dragging a single file into the MDC window, you can customize the scraping name
:::

Videos that fail to be processed will be recorded, and a `failed_list.txt` failure list file will be generated in the program directory. It can be removed on the local configuration page.

## 7. Finish Organizing

::: warning
* Please use the files and generated metadata before and after organization only for personal local management
* Do not share or distribute them, as this may create legal liability in the user's jurisdiction
:::

The output folder can be imported into media managers such as Emby, Jellyfin, Plex to manage videos.

## Access Program Logs

`.mdc/logs` under the system user directory

## Contact Us

[Contact us](/contact.html)
