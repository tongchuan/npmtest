git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:tongchuan/npmtest.git
git push -u origin master

npm adduser
username: zhangtongchuan
password: *****
tongchuanxing@163.com

npm publish

维护一个包，肯定是要进行包的版本升级的。如何进行呢？手动修改 package.json 的 version 字段是一个办法，但是显得有点 low。可以使用下面的命令：
npm version v0.1.0      # 版本号变成 0.1.0，即显式设置版本号。
npm version patch       # 版本号从 0.1.0 变成 0.1.1，即修订版本号加一。
npm version minor       # 版本号从 0.1.1 变成 0.2.0，即子版本号加一。
npm version major       # 版本号从 0.2.0 变成 1.0.0，即主版本号加一。

但是，除此之外，还有四条命令，用于创建“预发布版本”，也就是非稳定版本。
npm version v1.2.3

# 版本号从 1.2.3 变成 1.2.4-0，就是 1.2.4 版本的第一个预发布版本。
npm version prepatch

# 版本号从 1.2.4-0 变成 1.3.0-0，就是 1.3.0 版本的第一个预发布版本。
npm version preminor

# 版本号从 1.2.3 变成 2.0.0-0，就是 2.0.0 版本的第一个预发布版本。
npm version premajor

# 版本号从 2.0.0-0 变成 2.0.0-1，就是使预发布版本号加一。
npm version prerelease


注意： version 命令默认会给你的 git 仓库自动 commit 一把，并打一个 tag。如果不想它动你的 git 仓库，你应该使用 --no-git-tag-version 参数，例如：

npm --no-git-tag-version version patch
如果你想一劳永逸，那么可以使用如下 NPM 设置彻底禁止它：

npm config set git-tag-version false  # 不要自动打 tag
npm config set commit-hooks false     # 不要自动 commit

默认是发布到 latest 标签下的。

例如 npm publish --tag dev 就可以发布一个版本到 dev 标签下。


这里面的 @types/ 和 @angular/ 叫做包前缀（scope）。

作者起初以为使用包前缀也是收费的，后来仔细阅读了文档才发现公开的包可以免费使用 包前缀。

那我们怎么使用呢？很简单，首先在 package.json 里面把 name 字段加上一个前缀。

前缀必须是你 NPM 账户的用户名，比如你注册了一个用户名为 abc 的账户，则你只能使用 @abc/ 为你的包前缀。

举个例子，将你的包名设置为 @abc/test。

如果你要初始化一个带包前缀的包，则可以使用下面的命令。

npm init --scope=abc # 当然你还可以加上个 `-y` 快速创建。
或者你想每次都使用 @abc/ 包前缀？加个设置即可：

# 这样每次初始化新的 package.json，都将自动应用 @abc/ 包前缀。
npm config set scope abc
现在，可以发布你的包到 npmjs.org 了。哦不，别忘了一点：

官方文档表示：所有带前缀的包，在发布的时候，默认都是发布为私有包。

这意味着你不能就这么发布，因为你（可能）不是付费用户，不能发布私有的包。那怎么办呢？别 担心，npm publish 命令还有一个参数 --access ，通过这个参数可以指定发布的是公共包 还是私有包。因此，只要用下面的命令就可以发布一个公共的，带包前缀的包了：

npm publish --access=public
（完）

来自：https://my.oschina.net/fenying/blog/1607571