<script setup lang="ts">
import { ButtonStyles } from "./styles";
import { type ButtonProps } from "./types";

const {
  color,
  font,
  variant,
  decoration,
  isTextOnLeft = false,
  classNames,
  align,
  onClick,
  fit,
  size,
} = defineProps<ButtonProps>();

const styles = ButtonStyles({
  color: color ?? "primary",
  variant: variant ?? "contained",
  decoration: decoration ?? "icon",
  align: align ?? "mauto",
  fit: fit ?? "none",
  size: size ?? "medium",
});

const handleClick = onClick || (() => {});
</script>

<template>
  <ChoreLinkOptional :to="link">
    <button :class="[styles, classNames]" @click="handleClick">
      <span v-if="isTextOnLeft">{{ label }}</span>
      <slot name="icon"></slot>
      <span v-if="!isTextOnLeft">{{ label }}</span>
    </button>
  </ChoreLinkOptional>
</template>
