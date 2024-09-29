# Linux

# macOS
### 允许任何来源程序运行
* 左上角 - `系统偏好设置` - `安全性与隐私` - `安全性` - 勾选`任何来源`
* 如果没有，请在`终端`运行 `sudo spctl --master-disable` 密码为用户登陆密码
* 在`终端`运行 `sudo spctl --master-disable` 密码为用户登陆密码

# Docker （实验性）
* 注意，因为Docker文件系统的特殊性，请仔细阅读以下操作指南后再行使用，开发者对用户**因未仔细阅读文档**造成使用不当导致的文件丢失、损坏均不负责
* **无需设置任何网络端口**

## 强烈建议在首次使用Docker版本前，先使用Windows或macOS版本

## 与其他客户端一些不同之处
* 失败处理记录文件`failed_list.txt`，存放于容器目录`/config`中
* 目前Docker版本只支持两种影片模式各**一个**刮削目录

## 环境变量

本镜像增加了权限设置功能，你可以通过使用 UID (用户id) GID (组id) 两个环境变量来配置程序运行后所有文件的权限。

| 字段名                   | 值语义                        | 预设值        |
|:----------------------|:---------------------------|:-----------|
| UID                   | uid                        | 1026       |
| GID                   | gid                        | 100        |
| UMASK                 | source, output目录的umask     | 002        |
| NAME                  | 网页端显示的设备名称                 | MDC-Docker |
| ARGS                  | [运行参数](/chs/cli.html#运行参数) | 无          |
| cloud_username        | 网页端的用户名                    | 无          |
| cloud_password        | 网页端的密码                     | 无          |
| cloud_config_instance | 云配置实例名称                    | Default    |
| local_config_file     | 本地配置文件                     | mdc.ini    |

## 卷
| Docker卷      | 解释     |
|:-------------|:-------|
| 自定义          | 媒體数据目录 |
| /subs        | 影片字幕目录 |
| /config/.mdc | 配置文件目录 |

#### 以下教程二选一

## NAS系统

<details>

### 简要流程
* 打开`Container Manager`下载`mvdctop/mdc`映像

* 创建容器，设置环境变量

* 根据阁下的[注册](https://docs.mvdc.top/chs/#_1-%E5%9C%A8%E7%BD%91%E9%A1%B5%E7%AB%AF%E7%9A%84%E7%94%A8%E6%88%B7%E9%9D%A2%E6%9D%BF%E6%B3%A8%E5%86%8C%E8%B4%A6%E5%8F%B7)的用户名和密码，且已经激活，填写`cloud_username`和`cloud_password`  
* 可根据需要填写`ARGS`[运行参数](/chs/cli.html#运行参数)，刮削**其他**影片则添加`-o`  
* 如指定自定义配置，则`cloud_config_instance`填写自定义云配置实例名称，`local_config_file`为在容器`/config/.mdc`对应宿主目录下的配置文件名

* DSM首个新建用户的`UID`为1026，无需设置；Unraid请设置为99  
* 其他系统：连接系统SSH，连接方法自行搜索，连接后输入`id`命令获取当前用户 `UID` `GID`，填入环境变量`UID` `GID`

* **不勾选**完成后运行此容器

* 在容器页面中，右键详情，编辑卷，`/subs`字幕目录可选

* 左侧为宿主机目录（自行设置），右侧为容器中的目录（不可变）
* 在宿主机中新建文件夹，该目录用于映射**容器内**目录`/config/.mdc`

* 保存后运行

* 第一次运行，会在`config`目录下生成`mdc.ini`文件
  阅读[这里](https://docs.mvdc.top/chs/cli.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)根据自身需求配置，如配置代理

* **请勿修改`[common]`下`folder`相关配置**，这是容器内的目录配置，修改会导致`源文件夹未找到`

* 第二次运行后，查看日志后如果正常，则可在运行结束后移除环境变量`cloud_username`和`cloud_password`

### 图文流程
* 打开`Container Manager`下载`mvdctop/mdc`映像
![](/images/docker/1.jpg)
![](/images/docker/2.jpg)
![](/images/docker/3.jpg)
![](/images/docker/4.jpg)
* 根据阁下的[注册](https://docs.mvdc.top/chs/#_1-%E5%9C%A8%E7%BD%91%E9%A1%B5%E7%AB%AF%E7%9A%84%E7%94%A8%E6%88%B7%E9%9D%A2%E6%9D%BF%E6%B3%A8%E5%86%8C%E8%B4%A6%E5%8F%B7)的用户名和密码，且已经激活，填写`cloud_username`和`cloud_password`  
  可根据需要填写`ARGS`[运行参数](/chs/cli.html#运行参数)，如果刮削或整理**其他**影片，则添加`-o`  
  如自定义其他云配置实例，则`cloud_config_instance`填写自定义云配置实例名称，`local_config_file`自定义本地配置文件

* DSM首个新建用户的`UID`为1026，无需设置；Unraid请设置为99  
  其他系统：连接系统SSH，连接方法自行搜索，连接后输入`id`命令获取当前用户 `UID` `GID`，填入环境变量`UID` `GID`

![](/images/docker/id.jpg)
![](/images/docker/5.jpg)
* **不勾选**完成后运行此容器
![](/images/docker/6.jpg)
* 在容器页面中，右键详情，编辑卷
![](/images/docker/7.jpg)
* 在宿主机中新建文件夹，该目录用于映射**容器内**目录`/config/.mdc`（必选）
![](/images/docker/8.jpg)

* 默认情况下，以**移动**方式整理文件，以下方式二选一

### 移动方式整理文件

<details>

* 添加宿主中含有影片的目录，映射为Docker中的`/data`
* 默认情况下输出目录为上述目录中的`output`目录，如需要输出到其他位置，可添加宿主中其他目录，映射为Docker的`/data/output`

</details>

### 链接方式整理文件


<details>

* 在[用户面板](https://user.mvdc.top)中修改`整理模式`为`链接`，点击最下方`更新配置`
* 设置左侧与右侧的数据目录为一致，且**刮削目录与输出目录在同一目录下**

* 若使用硬链接，请确保刮削目录与输出目录都处于**同一硬盘分区**下

* 在下文生成的`mdc.ini`文件中修改目录配置
* `mdc.ini`中把`source_folders`为刮削目录，请勿移除`['`和`']`
* `mdc.ini`中把`success_folder`为输出目录


</details>

* `/subs`字幕目录可选

* 保存后运行

* 第一次运行，会在`config`目录下生成`mdc.ini`文件，如果出现意外退出错误请忽略
* 阅读[这里](https://docs.mvdc.top/chs/cli.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)根据自身需求配置，如配置代理
![](/images/docker/10.jpg)
* 第二次运行后，查看日志后如果正常，则可在运行结束后移除环境变量`cloud_username`和`cloud_password`
![](/images/docker/11.jpg)

## 如果出现意外退出错误请忽略

</details>

## Linux Shell

<details>


## 首次运行
建议先将当前用户添加至Docker用户组中，具体请谷歌，免去sudo运行造成的目录权限问题

### 拉取Docker镜像
```sh
docker pull mvdctop/mdc
mkdir test output
```

### 放置测试影片，也可以用真实影片文件
该命令为创建空白测试文件
```sh
touch ./test/生化危机.2002.mp4
```

### 第一次运行，在当前`config`目录下注入默认配置文件
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/config:/config/.mdc \
  mvdctop/mdc
```

此时，当前目录下的config文件夹出现mdc.ini文件，可根据自身需求，参考[配置文件](https://docs.mvdc.top/chs/cli.html)进行编辑，请勿修改mdc.ini中的**目录配置**和**token**

### 运行容器
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/source:/source \
  -v ${PWD}/output:/output \
  -v ${PWD}/config:/config/.mdc \
  -e UID=$(stat -c %u test) \
  -e GID=$(stat -c %g test) \
  -e ARGS="" \
  -e NAME=MDC-Docker \
  -e cloud_username=USERNAME \
  -e cloud_password=PASSWORD \
  -e cloud_config_instance="Default" \
  -e local_config_file="mdc.ini" \
  mvdctop/mdc
```


## 后续运行
* 非首次运行，可以删除`cloud_username`和`cloud_password`，登录凭据已被写入配置
```sh
docker run --rm --name mdc -it \
  -v ${PWD}/source:/source \
  -v ${PWD}/output:/output \  
  -v ${PWD}/config:/config/.mdc \
  -e UID=$(stat -c %u test) \
  -e GID=$(stat -c %g test) \
  -e ARGS="" \
  mvdctop/mdc
```

* 如显示被踢出，则需再次输入`cloud_username`和`cloud_password`环境变量
* 如需要改名，则需要删除容器再次进行上一步的拉取，进行首次运行操作

然后你会看到如下输出，如果输出如下证明工作正常

```sh
---Setup Timezone to Asia/Shanghai---
---Checking if UID: 1000 matches user---
---Checking if GID: 1000 matches user---
usermod: no changes
---Setting umask to 002---
---Taking ownership of data...---
Checking if config file exist
Starting...
---------------------------------------------------------
                      Login Success
---------------------------------------------------------
                 Expire Date: 2XXX-01-01
---------------------------------------------------------
[*]================= Movie Data Capture =================
[*]                        7.0.3
[*]======================================================
[*] - Linux-6.2.0-1016-kvm-x86_64-with-glibc2.37
[*] - x86_64 - Python-3.11.4
[*]======================================================
[*] Current Cloud Config Instance: Default
[*]======================================================
[+] Start at 2023-XX-XX XX:XX:XX
[+] Main Working mode - 1 - Scraping
[+] Find  1  movies
[*]======================================================
[!]                - 100.% [1/1] -             XX:XX:XX
[!] [生化危机] As Name Processing for '生化危机.2002.mp4'
[+]Image Downloaded! thumb.jpg
[+]Image Downloaded! backdrop.jpg
[*]======================================================
[+]Running time 0:00:08.148  End at 2023-XX-XX XX:XX:XX
[+]All finished!!!
- Log file '/config/.mdc/logs/mdc_2023xxxxTxxxxxx.txt' saved
```

</details>

