# 🚨 Exception Handling

## Opening the Client Shows No Response

If running `MDC.exe` or `MDC.app` shows no response, first [clear the configuration](/clean_config.html) according to your system type, then restart the MDC client

## Window Content Does Not Display

Try the following steps

1. Make sure the client archive has been fully extracted. Do not run the exe file directly from inside the archive
2. Temporarily disable antivirus or security software, then reopen the client

## Connection Timeout

If the log shows the following retry messages

```text
[-]Connect retry 1/3
[-]Connect retry 2/3
[-]Connect retry 3/3
```

Or the following error

```text
Caused by ProxyError
```

Check your proxy settings and try the following

1. Restart your proxy software
2. Switch proxy nodes one by one and retry
3. If the custom proxy is not enabled, enable the global proxy before running the client again

## Anonymous

All scraping information comes from public content on the Internet, so some information may be missing. The developer is not responsible for information accuracy. For details, see [Disclaimer Article 3: Data Accuracy](/laws/disclaimer.md#article-3-data-accuracy)
