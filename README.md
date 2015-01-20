# [![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/) io.js on Azure Websites
Want to use Azure Websites with the latest version of io.js? Simply include .deployment, deploy.cmd and iisnode.yml in your project. Done!

## Creating a io.js Website from Scratch
- Sign up for an Azure account. You can run up to 10 websites on Azure for free, so any account will do - for instance the [pay-as-you-go account with free trial credits](http://azure.microsoft.com/en-us/pricing/free-trial/) or the included accounts coming with [BizSpark for startups](http://www.bizspark.com) or the [GitHub Student Developer Pack](https://education.github.com/pack).

#### Option A (for quick testing and small apps)
- Click the 'Deploy to Azure' button in the title of this readme to deploy this repository with an empty app.js. The 'Deploy to Azure' asisstant will automatically create a website for you and guide you through the process. Once created, you can then use Visual Studio Online or FTP to work on your application.

#### Option B (for deployment workflows)
- Fork or download this repository
- Make changes as you see fit - if you just want to see io.js working, you can use the included `app.js`, which will create a small HTTP server and report back the currently running version of io.js.
- Once you made changes, you're ready to deploy - either using the [Azure Git/GitHub/Bitbucket integration or FTP Upload, Dropbox Sync or one of the many command line tools](http://azure.microsoft.com/en-gb/documentation/articles/web-sites-deploy/). If you don't have sensitive code, I recommend [forking this repo and hooking it up to the website](http://azure.microsoft.com/en-gb/documentation/articles/web-sites-publish-source-control/#Step7) - that way, you don't have to worry about deploying yourself. 

## The Deployment Script in Detail
- `.deployment` instructs Azure to run deploy.cmd as the deployment command
- `deploy.cmd` runs the usual Azure Websites deployment for Node Apps, but also downloads the latest version of io.js - saving it to `D:\home\site\bin\iojs`. Folders are created if necessary and older versions of io.js overwritten.
- `iisnode.yml` finally tells Azure Websites to use the just downloaded iojs.exe as Node binary.
- `app.js` is entirely optional and simply spits out the installed version of io.js. It's only included to "prove" that io.js is running, but you should most likely replace it with your own app.js/server.js.

## Copyright and License
The MIT License (MIT)
Copyright (c) Microsoft Corporation
Please see LICENSE.md for more information.
