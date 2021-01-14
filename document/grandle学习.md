一：构建脚本配置

##### 1：配置发布到远程仓库

build.gradlew

```groovy
// 应用插件
plugins {
    id 'java'
    id 'maven'
}
uploadArchives {
    repositories {
        mavenDeployer {
            repository(url: '[你的仓库地址]') {
                authentication(userName: "[你的用户名]", password: "[你的密码]")
            }
        }
    }
}
```

然后执行任务：`./gradlew uploadArchives`，即可发布到远程仓库

### 附：学习疑问

1：编译范围依赖在所有的 classpath 中可用？

2：运行时类路径默认会搜索当前目录吗？

3：编译时maven下载的jar包，针对这种情况，类路径的搜索机制？