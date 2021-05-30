<template>
  <div class="table border-collapse text-xs">
    <div class="table-header-group bg-emerald-200">
      <div class="table-row">
        <div
          class="table-cell border center border-emerald-500 p-1 text-emerald-600 font-medium"
          v-for="item in headers"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="table-row-group w-max-50">
      <div class="table-row w-80" v-for="commit in commits" :key="commit.name">
        <div
          class="table-cell border border-emerald-500 p-1 text-emerald-600 max-w-80"
          v-for="item in Object.keys(commit)"
          :key="item"
        >
          {{ commit[item] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  headers: [],
  commits: [],
});
</script>
