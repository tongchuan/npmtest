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
