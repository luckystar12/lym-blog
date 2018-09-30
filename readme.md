本地已经存在的项目如何和github发生关联
LYF edited this page on 23 Apr 2016 · 4 revisions
切换到本地项目地址 git init 初始化项目。该步骤会创建一个 .git文件夹是附属于该仓库的工作树。

git add .

git commit -m 'initial commit'

git remote add origin git@github.com:pod4g/sku.git 或者 git remote add origin https://github.com/pod4g/sku.git 把本地项目和github远程仓库发生关联

可能需要执行git config --global push.default matching命令，使得push命令默认push到github的同名仓库中

push -u origin master 把本地项目push到远程github仓库

本地仓库与远程仓库解除关联 rm -rf .git 删除该仓库的工作树即可 第2、3步可以在第4步之后执行

