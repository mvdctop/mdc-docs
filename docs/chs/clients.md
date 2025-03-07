# Linux

# macOS
### 允许任何来源程序运行
* 左上角 - `系统偏好设置` - `安全性与隐私` - `安全性` - 勾选`任何来源`
* 如果没有，请在`终端`运行 `sudo spctl --master-disable` 密码为用户登陆密码
* 在`终端`运行 `sudo spctl --master-disable` 密码为用户登陆密码

# Docker

::: warning
强烈建议在首次使用Docker版本前，先使用Windows或macOS版本  

出现任何影响使用的BUG请使用桌面版，并参考[此处](/chs/cloud_mount.html)使用
:::

## 迁移到新版本

::: tip
旧版 ~~mvdctop/mdc~~ **停止更新**  
请拉取 mvdctop/mdc-gui-lite  

该条目将指导阁下  
由 ~~mvdctop/mdc~~ 迁移至 mvdctop/mdc-gui-lite  
请点击下方 **详细** 阅读
:::

::: details

---

### 新特性
可访问浏览器用户界面，容器默认HTTP端口`5800`，与其他客户端有一致的体验

### 环境变量
* `UID`更改为`USER_ID`
* `GID`更改为`GROUP_ID`
* DSM请点击 `-` 去除环境变量空值  
![](/images/docker/11.jpg)

### 端口
映射容器HTTP端口`5800`

### 配置文件
移除旧版配置文件`mdc.ini`，使用新版重新生成的配置文件

### 运行
浏览器访问容器5800端口

**任何BUG请立即[联系我们](https://docs.mvdc.top/chs/contact.html)反馈**

---

:::


## 环境变量
| 字段名      | 值语义        | 预设值        |
|:---------|:-----------|:-----------|
| USER_ID  | 宿主机当前用户ID  | 1026       |
| GROUP_ID | 宿主机当前用户组ID | 100        |
| UMASK    | 数据目录的权限掩码   | 002        |
| NAME     | 网页端显示的设备名称 | MDC-Docker |

## 卷
| 卷      | 解释     |
|:-------------|:-------|
| /data        | 媒體数据目录 |
| /subs        | 影片字幕目录 |
| /config/.mdc | 配置文件目录 |

#### 以下教程二选一

## NAS系统

::: details

* 打开`Container Manager`获取`mvdctop/mdc-gui-lite`映像

### 端口
* 映射端口5800
![](/images/docker/4.jpg)
* 5900为VNC访问端口，可点击右侧`-`移除  
![](/images/docker/11.jpg)


### 环境变量
![](/images/docker/5.jpg)

* 普通 Linux 发行版默认用户`USER_ID`与`GROUP_ID`均为`1000`
* Synology DSM 默认用户`USER_ID`为`1026` `GROUP_ID`为`100`

![](/images/docker/id.jpg)

* 点击 `-` 去除环境变量空值  
![](/images/docker/11.jpg)

### 卷
* 在宿主机中新建文件夹，该目录用于映射**容器内**目录`/config/.mdc`（必选）
![](/images/docker/8.jpg)

* 在容器页面中，右键详情，编辑卷
![](/images/docker/12.jpg)

* `/subs`字幕目录可选

### 完成运行，浏览器进入5800端口
http://192.168.1.2:5800

:::

## Linux Shell

::: details

建议先将当前用户添加至Docker用户组中，具体请谷歌，免去sudo运行造成的目录权限问题

### 拉取Docker镜像
```sh
docker pull mvdctop/mdc-gui-lite
mkdir -p config data data/output
```

### 放置测试影片，也可以用真实影片文件
该命令为创建空白测试文件
```sh
touch ./data/生化危机.2002.mp4
```

### 运行容器
```sh
docker run \
  --rm \
  --name mdc-gui-lite \
  -p 5800:5800 \
  -v ${PWD}/data:/data \
  -v ${PWD}/output:/data/output \
  -v ${PWD}/config:/config/.mdc \
  -e USER_ID=$(id -u) \
  -e GROUP_ID=$(id -g) \
  -e NAME=Docker-MDC-GUI-Lite \
  mvdctop/mdc-gui-lite
```

### 浏览器进入5800端口
http://192.168.1.2:5800

:::

