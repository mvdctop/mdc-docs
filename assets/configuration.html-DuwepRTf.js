import{_ as h,a as c}from"./watermark2-ODKcVxf0.js";import{_ as n,r as l,o as s,c as u,e as a,a as e,b as t,d as o,w as i}from"./app-C3BwfcLt.js";const p={};function b(f,d){const r=l("RouterLink");return s(),u("div",null,[d[12]||(d[12]=a('<h1 id="雲端配置" tabindex="-1"><a class="header-anchor" href="#雲端配置" aria-hidden="true">#</a> 雲端配置</h1><h1 id="常規設定" tabindex="-1"><a class="header-anchor" href="#常規設定" aria-hidden="true">#</a> 常規設定</h1><h2 id="主運行模式" tabindex="-1"><a class="header-anchor" href="#主運行模式" aria-hidden="true">#</a> 主運行模式</h2>',3)),e("ul",null,[e("li",null,[e("p",null,[d[7]||(d[7]=t("1.整理和產生NFO檔案並下載圖片 將會移動影片檔案到目標目錄，在目標目錄下產生NFO文件，並下載兩張封面圖片，並重命名影片檔案為")),d[8]||(d[8]=e("code",null,"影片名稱.年份.後綴名",-1)),d[9]||(d[9]=e("br",null,null,-1)),e("strong",null,[d[1]||(d[1]=t("如果在")),o(r,{to:"/cht/client_configuration.html#%E8%B3%87%E6%96%99%E5%A4%BE%E9%85%8D%E7%BD%AE"},{default:i(()=>d[0]||(d[0]=[t("用戶端本機配置")])),_:1}),d[2]||(d[2]=t("中，設定")),d[3]||(d[3]=e("code",null,"刮削資料夾",-1)),d[4]||(d[4]=t("與")),d[5]||(d[5]=e("code",null,"輸出資料夾",-1)),d[6]||(d[6]=t("一致，可實現在原資料夾（刮削資料夾）下整理和產生NFO檔案並下載圖片"))])])]),d[10]||(d[10]=a("<li><p>保留原檔案命名的整理与刮削 將會移動影片檔案到目標目錄，在目標目錄下產生NFO文件，並下載兩張封面圖片，不重新命名影片</p></li><li><p>2.僅透過位置規則整理檔案 僅透過位置規則，將影片檔案移動到目標目錄中</p></li><li><p>3.更新現有NFO和圖片 根據雲端配置中<code>更新模式NFO檔案有效期限(天)</code>更新目標目錄中現有的NFO檔案和圖片，有效期限從NFO檔案和圖片的建立時間起計算</p></li><li><p>4.原地刮削 在影片所在資料夾下直接產生NFO文件，並下載兩張封面圖片</p></li><li><p>5.原地刮削並重命名 在影片所在資料夾下方直接產生NFO文件，並下載兩張封面圖片，並重新命名影片檔案為<code>影片名稱.年份.後綴名</code></p></li>",5))]),d[13]||(d[13]=a('<h2 id="僅下載缺失圖片" tabindex="-1"><a class="header-anchor" href="#僅下載缺失圖片" aria-hidden="true">#</a> 僅下載缺失圖片</h2><p>適用於主運行模式下的<code>3.更新現有NFO和圖片</code>，只會下載缺失的圖片，已有圖片不會被重新覆蓋</p><h2 id="匿名演員填充" tabindex="-1"><a class="header-anchor" href="#匿名演員填充" aria-hidden="true">#</a> 匿名演員填充</h2><p>開啟後，取得的元資料中無演員訊息，則會自動填入為<code>佚名</code></p><h2 id="tag僅保留演員" tabindex="-1"><a class="header-anchor" href="#tag僅保留演員" aria-hidden="true">#</a> tag僅保留演員</h2><p>開啟後，<code>.NFO</code>副檔名的元資料檔案的<code>&lt;tag&gt;</code>欄位只會填入演員名稱</p><h1 id="查找網站設定" tabindex="-1"><a class="header-anchor" href="#查找網站設定" aria-hidden="true">#</a> 查找網站設定</h1><h2 id="深度查找" tabindex="-1"><a class="header-anchor" href="#深度查找" aria-hidden="true">#</a> 深度查找</h2><p>在單一網站上可能無法取得完整的資料。因此，深度查找功能將依次訪問<code>查找網站順序</code>設定的網站 程式將持續搜尋直到在<code>深度查找欄位</code>中取得到資料或遍歷完所有指定網站為止，實現數據匯總</p><ul><li>開啟將延長檔案處理和完成休眠時間<br> 可能會觸發部分網站反爬</li></ul><h2 id="tmdb-api-key" tabindex="-1"><a class="header-anchor" href="#tmdb-api-key" aria-hidden="true">#</a> TMDB API KEY</h2><ul><li>可選填項</li></ul><p>填寫長度32位元的TMDB API KEY, 填入後可獲得更為詳細的刮削信息 申請教學可谷歌搜尋<code>TMDB API KEY申請</code></p><h1 id="檔案掃描排除配置" tabindex="-1"><a class="header-anchor" href="#檔案掃描排除配置" aria-hidden="true">#</a> 檔案掃描排除配置</h1><h2 id="排除資料夾" tabindex="-1"><a class="header-anchor" href="#排除資料夾" aria-hidden="true">#</a> 排除資料夾</h2><p>掃描時排除該資料夾，若多個資料夾使用<code>,</code>，範例<code>aa,bb,cc</code></p><h2 id="命名規則設定" tabindex="-1"><a class="header-anchor" href="#命名規則設定" aria-hidden="true">#</a> 命名規則設定</h2><table><thead><tr><th>變數</th><th>解釋</th></tr></thead><tbody><tr><td><code>title</code></td><td>片名</td></tr><tr><td><code>original_title</code></td><td>原生片名（未翻譯片名）</td></tr><tr><td><code>actor</code></td><td>演員</td></tr><tr><td><code>studio</code></td><td>公司</td></tr><tr><td><code>director</code></td><td>導演</td></tr><tr><td><code>release</code></td><td>發售日</td></tr><tr><td><code>year</code></td><td>發行年份</td></tr><tr><td><code>number</code></td><td>影片號碼</td></tr><tr><td><code>cover</code></td><td>封面連結</td></tr><tr><td><code>tag</code></td><td>類型</td></tr><tr><td><code>outline</code></td><td>簡介</td></tr><tr><td><code>runtime</code></td><td>時長</td></tr><tr><td><code>series</code></td><td>系列</td></tr><tr><td><code>prefix</code></td><td>號碼前綴</td></tr></tbody></table><p>上面的參數以下都稱為<strong>變數</strong></p><h2 id="自訂規則方法" tabindex="-1"><a class="header-anchor" href="#自訂規則方法" aria-hidden="true">#</a> 自訂規則方法</h2><p>請勿使用<code>%</code> <code>$</code> <code>&amp;</code>等字符</p><ul><li><code>genres/title</code></li><li><code>actor/[number]-title</code></li><li><code>actor/number</code></li><li><code>#actor/number</code></li></ul><h2 id="資料夾路徑規則" tabindex="-1"><a class="header-anchor" href="#資料夾路徑規則" aria-hidden="true">#</a> 資料夾路徑規則</h2><p>媒體檔案處理完成後，輸出到此設定的路徑中</p><h2 id="媒體檔案命名規則" tabindex="-1"><a class="header-anchor" href="#媒體檔案命名規則" aria-hidden="true">#</a> 媒體檔案命名規則</h2><p>媒體檔案處理完成後的命名規則，如果<code>主運作模式</code>為<code>保留原檔案命名的整理与刮削</code>，則改為設定不生效</p><h2 id="媒體文件命名帶後綴" tabindex="-1"><a class="header-anchor" href="#媒體文件命名帶後綴" aria-hidden="true">#</a> 媒體文件命名帶後綴</h2><p>媒體檔案處理成功後，開啟則命名包含<code>-4K</code> <code>-VR</code> <code>-C</code>等後綴</p><h2 id="元資料檔案標題命名規則" tabindex="-1"><a class="header-anchor" href="#元資料檔案標題命名規則" aria-hidden="true">#</a> 元資料檔案標題命名規則</h2><p>這是<code>.NFO</code>副檔名的元數據檔案內<code>&lt;title&gt;</code>欄位命名規則，與檔案名稱和資料夾名無關，用於在Emby, Jellyfin, Plex中顯示標題</p><h2 id="標題指定字元刪除" tabindex="-1"><a class="header-anchor" href="#標題指定字元刪除" aria-hidden="true">#</a> 標題指定字元刪除</h2><p>標題指定字元刪除，如輸入<code>\\()</code>，則刪除標題中<code>\\()</code>字符</p><h2 id="號碼提取排除字符" tabindex="-1"><a class="header-anchor" href="#號碼提取排除字符" aria-hidden="true">#</a> 號碼提取排除字符</h2><p>號碼提取時，排除乾擾提取號碼的字符，用<code>,</code>分割，示例<code>xxx.com@,bbb.net,ccc.top</code></p><h1 id="水印配置" tabindex="-1"><a class="header-anchor" href="#水印配置" aria-hidden="true">#</a> 水印配置</h1><h2 id="水印風格" tabindex="-1"><a class="header-anchor" href="#水印風格" aria-hidden="true">#</a> 水印風格</h2><ul><li>參考水印文字語言為英文</li></ul><h3 id="經典" tabindex="-1"><a class="header-anchor" href="#經典" aria-hidden="true">#</a> 經典</h3><p><img src="'+h+'" alt=""></p><h3 id="x風格" tabindex="-1"><a class="header-anchor" href="#x風格" aria-hidden="true">#</a> X風格</h3><p><img src="'+c+'" alt=""></p><h2 id="字段轉換設定" tabindex="-1"><a class="header-anchor" href="#字段轉換設定" aria-hidden="true">#</a> 字段轉換設定</h2>',42)),e("p",null,[o(r,{to:"/cht/client_configuration.html#%E8%87%AA%E8%A8%82%E6%AC%84%E4%BD%8D%E5%B0%8D%E6%87%89%E8%A1%A8"},{default:i(()=>d[11]||(d[11]=[t("自訂字段對應表")])),_:1})])])}const E=n(p,[["render",b],["__file","configuration.html.vue"]]);export{E as default};
