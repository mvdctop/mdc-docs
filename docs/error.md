# Exception handling

## Opening the Client Shows No Response

If running `MDC.exe` or `MDC.app` shows no response

### Windows

- Navigate to `C:\Users\Current Username` or enter `%homepath%` in the address bar of **File Explorer** and press Enter
- Delete the `.mdc` folder

### macOS

- Open Finder - Go - Home
- Press `Command + Shift + .` to show hidden files
- Delete the `.mdc` folder

### Docker

- Delete all files under `/config/.mdc`

### Linux & macOS shell

```shell
rm -rf ~/.mdc
```

## `Caused by ProxyError`
Please check the proxy. If the custom proxy is not enabled, please enable the global proxy and run
If the error persists, please replace the agent node

## Anonymous
All video scraping information comes from public content on the Internet. There will inevitably be missing information. The developer is not responsible for the accuracy of the information. For details, please see [Disclaimer Article 3: Data Accuracy](/laws/disclaimer.md)