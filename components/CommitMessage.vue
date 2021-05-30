<template>
  <div class="flex place-content-around">
    <BaseTable :commits="commitTypes" :headers="['Type', '说明']" />
    <BaseTable :commits="commitsOthers" :headers="['其他', '说明']" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const commitTypes = ref([
  {
    name: "feat",
    message: "添加新功能",
  },
  {
    name: "fix",
    message: "修复bug",
  },
  {
    name: "docs",
    message: "文档修改",
  },
  {
    name: "style",
    message: "不影响代码运行的修改，包括空白符处理，格式化等",
  },
  {
    name: "refactor",
    message: "重构（既不是添加新功能，也不是代码的修改）",
  },
  {
    name: "perf",
    message: "改善性能的改变",
  },
  {
    name: "test",
    message: "添加或者修改测试",
  },
  {
    name: "chore",
    message: "辅助工具的修改，包括构建工具，CI等",
  },
]);

const commitsOthers = ref([
  {
    name: "Revert",
    message:
      "当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header,Body写成This reverts commit <hash>",
  },
  {
    name: "Scope",
    message: "修改的影响范围（可选）",
  },
  {
    name: "Subject",
    message: "commit的简洁描述，以动词开头，第一个子母小写，结尾不加(.)",
  },
  {
    name: "Body",
    message: "应该说明代码变动的动机，以及与以前行为的对比",
  },
  {
    name: "Footer",
    message: "主要说明 Breaking Changes和相关的issue",
  },
]);
</script>
