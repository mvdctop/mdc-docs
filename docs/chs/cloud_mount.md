# NAS的使用
## Windows

* 映射网络驱动器：打开资源管理器，在窗口顶部点击`计算机`，在下方点击`映射网络驱动器`
![](/images/network_drive.png)
* 请确保在`此电脑`中，**NAS磁盘位于`网络位置`**，而不是`设备与驱动器`

* 程序放置在当前电脑本地磁盘中，若NAS共享已开启exe执行权限也可也放置在网络驱动器中

* 运行客户端`MDC.exe`，刮削目录和输出目录，选择网络驱动器下的目录

## MacOS
* [将 Mac 连接到共享的电脑和服务器](https://support.apple.com/zh-cn/guide/mac-help/mchlp1140/mac)

* 运行客户端`MDC`,刮削目录和输出目录，选择已连接服务器中的文件夹

# 云盘挂载工具使用
### Windows请确保在`此电脑`中，NAS磁盘位于`网络位置`，而不是`设备与驱动器`
如果阁下使用[CloudDrive](https://www.clouddrive2.com/), `RaiDrive`, `Alist`等本地云盘挂载工具  
请确保在挂载工具中，挂载的盘符类型为`网络盘`，否则可能会导致该程序运行出错  
程序放置在本地盘中启动