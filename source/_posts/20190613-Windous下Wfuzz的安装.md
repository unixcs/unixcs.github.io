---
title: Windous下Wfuzz的安装
date: 2019-06-13T12:07:54.000Z
tags: Tools
---

### 0x00**前言**
wfuzz这个工具在kali下是默认安装的~ 可是由于虚拟机用kali总是有种卡卡的感觉，就想着在windous下也装一个。
其实之前我尝试安装过几次，因为没学过python，就一直没有装成功。。~~还是因为自己菜~~
终于！！！趁着今天下午没事，在 你好表哥 的帮助下~ 终于把这个史诗级的难题给solve了
  







---

关于wfuzz的安装这里介绍**两种方法**




- 基于python2.7环境安装

exe版 免python环境，打开即用！！   ~~早知道有这个版本,我TM还费那么大劲去配置那些看着就脑壳疼的环境干嘛！~~








0x01 &ensp;**基于python2.7环境安装wufzz**首先你要有python2.7+pip的环境，这里环境的安装就不多介绍了~ 直接进入正题


[下载wfuzz](https://github.com/xmendez/wfuzz/archive/v2.3.4.tar.gz)


cmd进入文件根目录 `cd wfuzz-2.3.4` 


①`setup.py install`


②`pip install -r requirements.txt`


③`pip install wfuzz`


> 
① setup.py是**安装程序**
② requirements.txt 文件是python项目中必须包含一个文件用于记录所有依赖包及其精确的版本号用以新环境部署。**这里是安装依赖包**
③ **安装wfuzz**







到这里wfuzz就安装成功了，如何去验证是否安装成功呢？


在cmd下输入`wfuzz`









0x02  &ensp;**exe版本的安装**

- 下载
[下载wfuzz](https://github.com/xmendez/wfuzz/releases/download/v2.1-beta/wfuzz_2.1_windows.zip)





打开





- 运行
