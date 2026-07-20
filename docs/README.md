# 🏠 Home

## Overview

Movie Data Crawler (MDC) is a software tool for organizing and scraping local movie or series files. It can obtain movie or series metadata from the Internet and download covers.

MDC consists of two parts:

* Web user panel
* Local client

### User Panel

* Account Management: Provides user registration and login
* Cloud Configuration Management: Manages cloud scraping configurations
* Device Management: Views and manages devices logged in with your account

### Local Client

✅ Multi-platform support - Supports Windows macOS Docker  
✅ Cloud configuration synchronization - Synchronizes cloud configurations from the web panel and organizes local videos based on those configurations  
✅ Metadata acquisition and cover download - Scrapes metadata for local videos and downloads covers based on cloud configurations  
✅ Multi-client support - Supports using multiple cloud configuration instances on multiple local clients under the same account  
✅ OpenAI large model translation integration support

::: info
This project does not provide any video download methods and is only for personal file organization.
:::

# 📖 Use Tutorial

## 1. Download and Run

* Go to the [download page](https://dl.mvdc.top), download and run the program. Global proxy usage is recommended
* Upon first opening, you can select the language in the `Language` field: `简体中文` `繁體中文` `English`
* Except for Windows systems, please read [How to use each client](/clients.html) before downloading

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

## 4. Adjust Local Configuration

* Configure the scraping directory and output directory on the `Local Configuration` page
* NAS or cloud drive users should refer to [NAS or cloud drive directory configuration](/cloud_mount.html)

<img src="/images/readme2_en.png" width="500" alt="">

By default, the input folder is the program directory, and the output folder is the newly created `output` folder under the program directory.

## 5. Select Scraping Type

According to the [File Naming Rules](/naming.html), click the corresponding `Video Type` in the lower right corner of the `Local Configuration` page.

<img src="/images/scraping_type_en.png" width="500" alt="">

* Before processing videos, click `Name Extraction Check` to confirm whether the extracted result meets expectations
* If the extracted name does not meet expectations, manually rename the video file

### Cloud Configuration

The default cloud configuration is the best adjustment based on extensive user feedback and testing, and can be used without editing.
If you need to adjust the cloud configuration, click `Edit Cloud Configuration and Synchronize`.

Clicking this entry will open the web page and **automatically trigger client synchronization**.

::: info
* This feature depends on permission for Chrome to access local network devices
* On macOS, please change the default browser to Chrome
:::

If the client does not show `Client synchronization completed`, click `Synchronize Cloud Configuration Only` below.

## 6. Start Scraping

::: tip
* Supports dragging multiple or single video files into the MDC window for scraping
* When dragging a single file into the MDC window, you can customize the scraping name
:::

Videos that fail to be processed will be recorded. You can click `❗` in the lower-left corner of `Completed Project Information` to remove them.

## 7. Finish Organizing

::: warning
Do not share or distribute the files before or after organization, or the generated metadata. This may create legal liability in the user's jurisdiction.
:::

The output folder can be imported into media managers such as Emby, Jellyfin, Plex to manage videos.

## Access Program Logs

`.mdc/logs` under the system user directory

## Contact Us

[Contact us](/contact.html)
