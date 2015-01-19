# io.js on Azure Websites
Want to use Azure Websites with the latest version of io.js? Simply include .deployment, deploy.cmd and iisnode.yml in your project. Done!

Here's what happens in detail:
- `.deployment` instructs Azure to run deploy.cmd as the deployment command
- `deploy.cmd` runs the usual Azure Websites deployment for Node Apps, but also downloads the latest version of io.js - saving it to `D:\home\site\bin\iojs`. Folders are created if necessary and older versions of io.js overwritten.
- `iisnode.yml` finally tells Azure Websites to use the just downloaded iojs.exe as Node binary.
- `app.js` is entirely optional and simply spits out the installed version of io.js. It's only included to "prove" that io.js is running, but you should most likely replace it with your own app.js/server.js.
