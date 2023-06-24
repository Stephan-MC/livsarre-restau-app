<template>
  <div class="Select">
    <div class="Select-Wrapper">
      <slot name="leftIcon">
        <Icon v-if="leftIcon" :class="['Select-LeftIcon Select-Icon', classes?.leftIcon]" :path="leftIcon" />
      </slot>

      <select :placeholder="placeholder" :class="[classes?.select,
        'focus:outline-none h-full grow bg-transparent SelectInut',
      ]" :required="required" @input="
  $emit('update:model-value', ($event.target as HTMLInputElement).value)
  ">
        <option v-for="option in options" :value="option.value" :key="`${option.label}-${option.value}`"
          :class="[classes?.option, 'Select-Option']">
          {{ option.label }}
        </option>
      </select>

      <slot name="rightIcon">
        <Icon v-if="rightIcon" :class="[
          'cursor-pointer text-primary SelectIcon Select-RightIcon',
          classes?.rightIcon
        ]" :path="rightIcon ?? type == 'password' ? mdiEyeOutline : mdiEyeOffOutline
  " @click="type = type == 'password' ? 'text' : 'password'" tabindex="0" />
      </slot>
    </div>
    <span v-if="error" :class="['text-sm font-bold text-red-600']" v-text="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'

interface InputProps {
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  modelValue: string | number | null
  required: boolean
  error?: string | null
  options: { label: string; value?: string | null }[]
  classes?: {
    leftIcon?: string
    select?: string
    rightIcon?: string
    error?: string
    option?: string
  }
}

withDefaults(defineProps<InputProps>(), {})
</script>

<style scoped></style>
