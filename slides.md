---
# try also 'default' to start simple
theme: seriph
title: 代码管理及集成 (基本Git)
# random image from a curated Unsplash collection by Anthony
# like theme? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## 代码管理及集成
---

# 代码管理及集成

---

# Git 基础

基本操作

<div class="flex justify-center" v-click>
  <img src="/git_action.jpg"/> 
</div>

---

# 常用操作

<v-clicks>

- git cherry-pick
- git rebase 
- git merge
- git stash 
- git revert
- git reset

</v-clicks>

---
layout: center
class: text-center
---

# 分支合并

git merge/rebase

![merge](/merge_1.jpg)

---
name: 合并操作比较
---

<div class="grid grid-cols-2 gap-x-8">

<div>

# git merge

将**指定分支**合并到**当前**分支

<v-click>

```sh
git checkout main
git merge bugFix
```
</v-click>

<v-click>

![merge](/merge_2.jpg)

</v-click>

</div>
<div>

# git rebase

将**当前分支**添加到**指定分支**的最前面

<div class="flex justify-start">
<div v-click class="mr-8">

```sh
git checkout bugFix
git rebase main
```
</div>
<div v-click>

```sh
git checkout main
git merge bugFix
```

</div>
</div>


<div v-click class="relative">

![merge](/merge_3.jpg)

<div class="absolute top-4 w-60"><div class="inline-flex">

<emojione-warning class="text-xl text-orange-300 animate-ping mx-2"/>

> 只对尚未推送或分享给别人的本地修改执行**rebase**清理历史， 从不对已推送至别处的提交执行**rebase**

</div>
</div>
</div>
</div>
</div>

---

# 撤销变更
git revert/reset

```bash
git reset HEAD^ # 变更本地,只是修改了历史提交记录
git revert HEAD # 变更远程
```

<div class="flex mt-4">
  <div class="mr-4" v-click><img src="/reset_1.png"></div>
  <div v-click><img src="/reset_2.png"></div>
</div>

---

# 任意修改提交记录 

<div class="grid grid-cols-2 gap-x-8">

<div>

### cherry-pick


```bash
# 将指定的提交应用到当前分支
git cherry-pick <commitHash> [<commitHash> ...]
# 将指定分支的最近一次提交应用到当前分支
git cherry-pick <branch-name> 
```

<div class="flex mt-4">
  <div class="mr-4 w-60" v-click><img src="/cherry_pick_1.png"></div>
  <div v-click class="w-50"><img src="/cherry_pick_2.png"></div>
</div>

</div>

<div>

### git rebase -i

```bash
# 修改最近4次提交，包括排序，合并，修改等
# 修改c3,c4的提交顺序
git rebase -i HEAD~4
```

<div class="flex mt-4">
  <div class="mr-4 w-32" v-click><img src="/rebase_i_1.png"></div>
  <div v-click class="w-50"><img src="/rebase_i_2.png"></div>
</div>

</div>
</div>

---
name: 分支管理(一)
---

# Git Flow

分支管理(一)

<div class="w-150 m-auto"><img src="/branch_1.png"></div>


---
name: 分支管理(二)
---

# Git Flow

分支管理(二)

<div class="w-80 m-auto"><img src="/branch_2.png"></div>


---
name: 分支管理(三)
---

# Git Flow

分支管理(三)

<div class="w-150 m-auto"><img src="/branch_3.png"></div>

---

# commit message 规范

---

# 常用的工具

- gitmoji
- lint-staged
- husky


---

# 生成 CHANGELOG


---

# Pull Request

---

# lock branch 

---

# Code Review

---

# Coding 持续集成

---
