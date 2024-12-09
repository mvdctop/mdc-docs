# 命令行参数与配置文件编辑
## 运行参数
以下所有参数为可选参数
* `file` [单文件模式](#单文件模式) file为文件路径
* `-b` `--backend-hosting` 后台托管模式（目录监控），依据当前云配置选择是`每天指定运行时间`或`休眠指定分钟后运行`
* `-cli` 打开命令行模式
* `-login u=xxx,p=xxx` 登录，首次输入后续可自动登录
* `-g` 调试模式
* `-t` 名称提取模式
* `-s` 为输出目录下无字幕影片添加字幕
* `-o` 其他模式
* `-cc` `--cloud-config-instance` 云配置实例选择，默认`Default`，如选择名为`test1`的云配置实例`--cloud-config-instance "test1"` 或 `-cc "test1"`
* `-lc` `--local-config-file` 本地配置文件，默认`mdc.ini`，如选择名为`mdc_test.ini`的本地配置文件`--local-config-file "mdc_test.ini"` 或 `-lc "mdc_test.ini"`
* `-C` 本地配置文件覆盖模式，仅限于覆盖客户端本地配置，如输入输出目录配置，多个配置使用`;`分隔，实例如下
```shell
./MDC -cli -C "common:source_folders=['/a/video1'];common:success_folder=/a/output2"
```

## 配置文件
程序首次运行后，会在用户家目录下生成`.mdc/mdc.ini`文件
然后编辑`.mdc/mdc.ini`配置文件

```ini
[proxy]
switch = 0
type = http
proxy = localhost
port = 1080
```
### switch
代理开关 0关1开

### type
代理类型 `http` `socks5` `socks5h`

## proxy
代理地址 `localhost` `192.168.x.x`

## port
代理端口

```ini
[common]
language =
sync_time =
source_folders =
success_folder =
```
### language
程序语言 默认空为`eng` 可选`chs`简体中文 `cht`繁体中文

### source_folders
输入目录 该值请输入为列表 实例如下 请勿重复输入
```ini
[common]
source_folders = ['C:/Users/Administrator/video1']
source_folders = ['/home/test/video1', '/home/test/video2']
```

### success_folder
成功输出目录 直接输入目录路径 实例如下
```ini
[common]
success_folder = /home/test/output
```

### cloud_config_instance
选择一般电影云配置实例，默认为`Default`，如自定义请填写新建配置实例名称  
如果实例名称不存在，则会使用`Default`
```ini
[common]
cloud_config_instance = Default
```

### cloud_config_instance_other
选择其他电影云配置实例，默认为`Default`，如自定义请填写新建配置实例名称  
如果实例名称不存在，则会使用`Default`
```ini
[common]
cloud_config_instance_other = Default
```

## subs
```ini
[subs]
switch = 0
```
### 刮削时自动添加外挂字幕文件 
* 0关 1开

```ini
[subs]
subs_folder = /home/test/subs
```
### 一般影片外挂字幕目录

## user_token
```ini
[user_token]
token =
```
### 用户登录令牌
* 首次登录后生成 用于自动登录 每台设备的令牌都独一无二
* **请勿复制和更改**

## other
```ini
[other]
switch = 0
```
### 其他模式 
* 0关 1开

## 单文件模式
可拖拽一个影片文件到程序图标运行  
终端中请输入`./MDC xxxxx.mp4`
若要处理其他影片 请先在GUI中打开其他模式，或在配置文件中打开，或附上`-r`参数