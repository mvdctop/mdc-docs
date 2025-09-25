# 异常处理

## 打开客户端无任何反应

若运行`MDC.exe`或者`MDC.app`无任何反应

### Windows

* 进入`C:\Users\`当前用户名 或 在**资源管理器**中的地址栏中输入`%homepath%`回车
* 删除`.mdc`文件夹

### macOS

* 访达 - 前往 - 个人
* 按下`Command + Shift + .`显示隐藏文件
* 删除`.mdc`文件夹

### Docker

* 删除`/config/.mdc`下所有文件

### Linux & macOS shell

```shell
rm -rf ~/.mdc
```

## `Caused by ProxyError`
请检查代理，如果自定义代理未开启，请开启全局代理后运行  
如果错误依旧，请更换代理节点

## 佚名
所有影片刮削信息均来自互联网公开内容，难免会有信息缺失现象，开发者不对信息的准确性负责，详细请看[免责声明 第三条：数据准确性](/chs/laws/disclaimer.md#第三条-数据准确性)1