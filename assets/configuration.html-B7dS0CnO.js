import{_ as h,a as n}from"./watermark2-ODKcVxf0.js";import{_ as c,r as l,o as s,c as u,e as a,a as e,b as t,d as o,w as i}from"./app-C3BwfcLt.js";const p={};function b(f,d){const r=l("RouterLink");return s(),u("div",null,[d[14]||(d[14]=a('<h1 id="云配置" tabindex="-1"><a class="header-anchor" href="#云配置" aria-hidden="true">#</a> 云配置</h1><h1 id="常规设置" tabindex="-1"><a class="header-anchor" href="#常规设置" aria-hidden="true">#</a> 常规设置</h1><h2 id="主运行模式" tabindex="-1"><a class="header-anchor" href="#主运行模式" aria-hidden="true">#</a> 主运行模式</h2>',3)),e("ul",null,[e("li",null,[e("p",null,[d[7]||(d[7]=t("1.整理和生成NFO文件并下载图片")),d[8]||(d[8]=e("br",null,null,-1)),d[9]||(d[9]=t(" 将会移动影片文件到目标目录，在目标目录下生成NFO文件，并下载两张封面图片，并重命名影片文件为")),d[10]||(d[10]=e("code",null,"影片名称.年份.后缀名",-1)),d[11]||(d[11]=e("br",null,null,-1)),e("strong",null,[d[1]||(d[1]=t("如果在")),o(r,{to:"/chs/client_configuration.html#%E7%9B%AE%E5%BD%95%E9%85%8D%E7%BD%AE"},{default:i(()=>d[0]||(d[0]=[t("本地配置")])),_:1}),d[2]||(d[2]=t("中，设置")),d[3]||(d[3]=e("code",null,"刮削目录",-1)),d[4]||(d[4]=t("与")),d[5]||(d[5]=e("code",null,"输出目录",-1)),d[6]||(d[6]=t("一致，可实现在原目录（刮削目录）下整理和生成NFO文件并下载图片"))])])]),d[12]||(d[12]=a("<li><p>保留原文件命名的模式1<br> 将会移动影片文件到目标目录，在目标目录下生成NFO文件，并下载两张封面图片，不重命名影片</p></li><li><p>2.仅通过位置规则整理文件<br> 仅通过位置规则，将影片文件移动到目标目录中</p></li><li><p>3.更新现有NFO和图片<br> 根据云配置中<code>更新模式NFO文件有效期(天)</code>更新目标目录中现有的NFO文件和图片，有效期从NFO文件和图片的创建时间起计算</p></li><li><p>4.原地刮削<br> 在影片所在文件夹下直接生成NFO文件，并下载两张封面图片</p></li><li><p>5.原地刮削并重命名<br> 在影片所在文件夹下直接生成NFO文件，并下载两张封面图片，并重命名影片文件为<code>影片名称.年份.后缀名</code></p></li>",5))]),d[15]||(d[15]=a('<h2 id="仅下载缺失图片" tabindex="-1"><a class="header-anchor" href="#仅下载缺失图片" aria-hidden="true">#</a> 仅下载缺失图片</h2><p>适用于主运行模式下的<code>3.更新现有NFO和图片</code>，只会下载缺失的图片，已有图片不会被重新覆盖</p><h2 id="匿名演员填充" tabindex="-1"><a class="header-anchor" href="#匿名演员填充" aria-hidden="true">#</a> 匿名演员填充</h2><p>开启后，获取的元数据中无演员信息，则会自动填充为<code>佚名</code></p><h2 id="tag只保留演员" tabindex="-1"><a class="header-anchor" href="#tag只保留演员" aria-hidden="true">#</a> tag只保留演员</h2><p>开启后，<code>.NFO</code>后缀的元数据文件的<code>&lt;tag&gt;</code>字段只会填充演员名称</p><h1 id="查找网站设置" tabindex="-1"><a class="header-anchor" href="#查找网站设置" aria-hidden="true">#</a> 查找网站设置</h1><h2 id="深度查找" tabindex="-1"><a class="header-anchor" href="#深度查找" aria-hidden="true">#</a> 深度查找</h2><p>在单个网站上可能无法获取到完整的数据，深度查找功能将依次访问<code>查找网站顺序</code>设定的网站<br> 程序将持续搜索直到在<code>深度查找字段</code>中获得到数据或者遍历完所有指定网站为止，实现数据汇总</p><ul><li>打开将延长文件处理和完成休眠时间<br> 可能会触发部分网站反爬</li></ul><h2 id="tmdb-api-key" tabindex="-1"><a class="header-anchor" href="#tmdb-api-key" aria-hidden="true">#</a> TMDB API KEY</h2><ul><li>可选填项</li></ul><p>填写长度32位的TMDB API KEY, 填入后可获得更为详细的刮削信息<br> 申请教程可谷歌搜索<code>TMDB API KEY申请</code></p><h1 id="文件扫描排除配置" tabindex="-1"><a class="header-anchor" href="#文件扫描排除配置" aria-hidden="true">#</a> 文件扫描排除配置</h1><h2 id="排除文件夹" tabindex="-1"><a class="header-anchor" href="#排除文件夹" aria-hidden="true">#</a> 排除文件夹</h2><p>扫描时排除该文件夹，若多个文件夹使用<code>,</code>，示例<code>aa,bb,cc</code></p><h1 id="命名规则设置" tabindex="-1"><a class="header-anchor" href="#命名规则设置" aria-hidden="true">#</a> 命名规则设置</h1><table><thead><tr><th>变量</th><th>解释</th></tr></thead><tbody><tr><td><code>title</code></td><td>片名</td></tr><tr><td><code>original_title</code></td><td>原生片名（未翻译片名）</td></tr><tr><td><code>actor</code></td><td>演员</td></tr><tr><td><code>studio</code></td><td>公司</td></tr><tr><td><code>director</code></td><td>导演</td></tr><tr><td><code>release</code></td><td>发售日</td></tr><tr><td><code>year</code></td><td>发行年份</td></tr><tr><td><code>number</code></td><td>影片号码</td></tr><tr><td><code>cover</code></td><td>封面链接</td></tr><tr><td><code>tag</code></td><td>类型</td></tr><tr><td><code>outline</code></td><td>简介</td></tr><tr><td><code>runtime</code></td><td>时长</td></tr><tr><td><code>series</code></td><td>系列</td></tr><tr><td><code>prefix</code></td><td>号码前缀</td></tr></tbody></table><p>上面的参数以下都称之为<strong>变量</strong></p><h2 id="自定义规则方法" tabindex="-1"><a class="header-anchor" href="#自定义规则方法" aria-hidden="true">#</a> 自定义规则方法</h2><p>请勿使用<code>%</code> <code>$</code> <code>&amp;</code>等字符</p><ul><li><code>genres/title</code></li><li><code>actor/[number]-title</code></li><li><code>actor/number</code></li><li><code>#actor/number</code></li></ul><h2 id="文件夹路径规则" tabindex="-1"><a class="header-anchor" href="#文件夹路径规则" aria-hidden="true">#</a> 文件夹路径规则</h2><p>媒体文件处理完成后，输出到此设置的路径中</p><h2 id="媒体文件命名规则" tabindex="-1"><a class="header-anchor" href="#媒体文件命名规则" aria-hidden="true">#</a> 媒体文件命名规则</h2><p>媒体文件处理完成后的命名规则，如果<code>主运行模式</code>为<code>保留原文件命名的模式1</code>，则改设置不生效</p><h2 id="媒体文件命名带后缀" tabindex="-1"><a class="header-anchor" href="#媒体文件命名带后缀" aria-hidden="true">#</a> 媒体文件命名带后缀</h2><p>媒体文件处理成功后，打开则命名含<code>-4K</code> <code>-VR</code> <code>-C</code>等后缀</p><h2 id="元数据文件标题命名规则" tabindex="-1"><a class="header-anchor" href="#元数据文件标题命名规则" aria-hidden="true">#</a> 元数据文件标题命名规则</h2><p>这是<code>.NFO</code>后缀的元数据文件内<code>&lt;title&gt;</code>字段命名规则，与文件名和文件夹名无关，用于在Emby, Jellyfin, Plex中显示标题</p><h2 id="标题指定字符删除" tabindex="-1"><a class="header-anchor" href="#标题指定字符删除" aria-hidden="true">#</a> 标题指定字符删除</h2><p>标题指定字符删除，如输入<code>\\()</code>，则删除标题中<code>\\()</code>字符</p><h2 id="号码提取排除字符" tabindex="-1"><a class="header-anchor" href="#号码提取排除字符" aria-hidden="true">#</a> 号码提取排除字符</h2><p>号码提取时，排除干扰提取号码的字符，用<code>,</code>分割，示例<code>xxx.com@,bbb.net,ccc.top</code></p><h1 id="水印配置" tabindex="-1"><a class="header-anchor" href="#水印配置" aria-hidden="true">#</a> 水印配置</h1><h2 id="水印风格" tabindex="-1"><a class="header-anchor" href="#水印风格" aria-hidden="true">#</a> 水印风格</h2><ul><li>参考水印文字语言为英文</li></ul><h3 id="经典" tabindex="-1"><a class="header-anchor" href="#经典" aria-hidden="true">#</a> 经典</h3><p><img src="'+h+'" alt=""></p><h3 id="x风格" tabindex="-1"><a class="header-anchor" href="#x风格" aria-hidden="true">#</a> X风格</h3><p><img src="'+n+'" alt=""></p><h2 id="字段转换设置" tabindex="-1"><a class="header-anchor" href="#字段转换设置" aria-hidden="true">#</a> 字段转换设置</h2>',42)),e("p",null,[o(r,{to:"/chs/client_configuration.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AD%97%E6%AE%B5%E6%98%A0%E5%B0%84%E8%A1%A8"},{default:i(()=>d[13]||(d[13]=[t("自定义字段映射表")])),_:1})])])}const E=c(p,[["render",b],["__file","configuration.html.vue"]]);export{E as default};
