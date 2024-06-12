# Command line parameters and configuration file editing
## Operating parameters
All the following parameters are optional parameters
* `file` [Single file mode](#Single file mode) file is the file path
* `-b` `--backend-hosting` Backend hosting mode, according to the current cloud configuration, the choice is `specified running time every day` or `hibernate and run after specified minutes`
* `-cli` opens command line mode
* `-login u=xxx,p=xxx` Log in, you can log in automatically after entering it for the first time
* `-g` debug mode
* `-t` name extraction mode
* `-s` adds subtitles to unsubtitled videos in the output directory
* `-o` other modes
* `-cc` `--cloud-config-instance` Cloud configuration instance selection, default `Default`, for example, select the cloud configuration instance named `test1` `--cloud-config-instance "test1"` or `- cc "test1"`
* `-lc` `--local-config-file` Local configuration file, default `mdc.ini`, for example, select the local configuration file named `mdc_test.ini` `--local-config-file "mdc_test.ini` "` or `-lc "mdc_test.ini"`
* `-C` local configuration file override mode is limited to overwriting the client's local configuration, such as input and output directory configuration. Use `;` to separate multiple configurations. Examples are as follows
```shell
./MDC -cli -C "common:source_folders=['/a/video1'];common:success_folder=/a/output2"
```

## Configuration file
After the program is run for the first time, the `.mdc/mdc.ini` file will be generated in the user's home directory.
Then edit the `.mdc/mdc.ini` configuration file

```ini
[proxy]
switch=0
type=http
proxy=localhost
port=1080
```
### switch
Agent switch 0 off 1 on

### type
Proxy type `http` `socks5` `socks5h`

## proxy
Proxy address `localhost` `192.168.x.x`

## port
proxy port

```ini
[common]
language =
sync_time =
source_folders=
success_folder =
```
### language
Programming language: Default empty is `eng`, optional `chs` simplified Chinese `cht` traditional Chinese

### source_folders
Input directory. Please enter this value as a list. Examples are as follows. Please do not re-enter.
```ini
[common]
source_folders = ['C:/Users/Administrator/video1']
source_folders = ['/home/test/video1', '/home/test/video2']
```

### success_folder
Successfully output the directory. Directly enter the directory path. The example is as follows:
```ini
[common]
success_folder = /home/test/output
```

### cloud_config_instance
Select a general movie cloud configuration instance. The default is `Default`. If you want to customize it, please fill in the name of the new configuration instance.
If the instance name does not exist, `Default` will be used
```ini
[common]
cloud_config_instance = Default
```

### cloud_config_instance_other
Select another movie cloud configuration instance. The default is `Default`. If you want to customize it, please fill in the name of the new configuration instance.
If the instance name does not exist, `Default` will be used
```ini
[common]
cloud_config_instance_other = Default
```

## subs
```ini
[subs]
switch=0
```
### Automatically add plug-in subtitle files when scraping
* 0 off 1 on

```ini
[subs]
subs_folder = /home/test/subs
```
### Directory of general video plug-in subtitles

## user_token
```ini
[user_token]
token =
```
### User login token
* Generated after first login and used for automatic login. The token is unique for each device.
* **DO NOT COPY AND ALTER**

## other
```ini
[other]
switch=0
```
### Other modes
* 0 off 1 on

## Single file mode
Drag and drop a video file to the program icon to run
Please enter `./MDC xxxxx.mp4` in the terminal
To process other videos, please first open other modes in the GUI, or open it in the configuration file, or append the `-r` parameter