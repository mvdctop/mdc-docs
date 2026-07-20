# 🗄️ NAS Usage

## Windows

* Map network drive: open File Explorer, click `Computer` at the top, then click `Map Network Drive`

![](/images/network_drive.png)

* Make sure that in `This PC`, the **NAS disk is under `Network Location`**, not `Devices and Drives`
* Place the program on the local disk of the current computer. If exe execution permission is enabled on the NAS share, it can also be placed on the network drive
* Run the client `MDC.exe`, then select directories under the network drive for the scraping directory and output directory

## macOS

* Refer to [Connect your Mac to shared computers and servers](https://support.apple.com/guide/mac-help/mchlp1140/mac)
* Run the client `MDC`, then select folders in the connected server for the scraping directory and output directory

# 🗂️ Cloud Drive Mounting Tool Usage

Due to cloud drive vendor rate limits, avoid creating metadata-related files in the cloud drive. It is strongly recommended to adjust to the following configuration.

::: tip
On Windows, make sure that in `This PC`, the NAS disk is under `Network Location`, not `Devices and Drives`.
:::

If you use local cloud drive mounting tools such as [CloudDrive](https://www.clouddrive2.com/), `RaiDrive`, or `Alist`, make sure the mounted drive type is `Network Disk`; otherwise, the program may fail to run correctly.

Start the program from a local disk.

![](/images/mount_en.jpg)

## Cloud Configuration Adjustment Suggestions

* Common Configuration - Organize mode - Select `Create strm file`

## Local Configuration Adjustment Suggestions

* Directory Configuration - Scraping Directory - Select a directory in the **cloud drive**
* Directory Configuration - Output Directory - Select a **local** directory
