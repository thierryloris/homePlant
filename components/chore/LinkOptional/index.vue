<script setup lang="ts">
import type { LinkOptionalProps } from "./types";

const { to } = defineProps<LinkOptionalProps>();
</script>
<template>
  <NuxtLink v-if="to" :to="to">
    <slot />
  </NuxtLink>
  <div v-else>
    <slot />
  </div>
</template>
