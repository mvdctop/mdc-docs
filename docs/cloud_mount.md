# Use of cloud disk mounting tool
### Windows Please make sure that in `This PC`, the NAS disk is in `Network Location` and not `Devices and Drives`
If you use [CloudDrive](https://www.clouddrive2.com/), `RaiDrive`, `Alist` and other local cloud disk mounting tools
Please make sure that in the mounting tool, the mounted drive letter type is `network disk`, otherwise it may cause the program to run incorrectly.
The program is placed in the local disk and started

# NAS usage
* Map network drive: Open Explorer in Windows, click `Computer` at the top of the window, and click `Map Network Drive` at the bottom

* Please make sure that in `This PC`, the **NAS disk is in `Network Location`** and not in `Devices and Drives`

* The program is placed in the local disk of the current computer. If the NAS share has enabled exe execution permission, it can also be placed in the network drive.

* Scrape directory and output directory, select the directory under the network drive

# Use of cloud disk mounting tool
Due to the flow control of cloud disk manufacturers, please avoid creating metadata-related files in the cloud disk. It is strongly recommended that you adjust the following configuration
### Windows Please make sure that in `This computer`, the NAS disk is located in `Network location`, not `Devices and drives`
If you use local cloud disk mounting tools such as [CloudDrive](https://www.clouddrive2.com/), `RaiDrive`, `Alist`, etc.
Please make sure that the mounted drive letter type is `Network disk` in the mounting tool, otherwise it may cause the program to run incorrectly
The program is placed in the local disk to start

### Cloud configuration adjustment suggestions
* Common Configuration - Organize mode - Select `Create strm file`

## Local configuration adjustment suggestions
* Folders Configuration - Scrape directory - Select the directory in **Cloud disk**
* Folders Configuration - Output directory - Select the **Local** directory