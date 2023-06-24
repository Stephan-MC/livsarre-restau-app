<template>
  <div class="Input">
    <div class="Input-Wrapper">
      <slot name="leftIcon">
        <Icon v-if="leftIcon" :class="['Input-LeftIcon', classes?.leftIcon]" :path="leftIcon" />
      </slot>

      <input :type="type" :placeholder="placeholder" :value="modelValue" :class="['Input-Input', classes?.input]"
        :required="required" @input="
          $emit('update:model-value', ($event.target as HTMLInputElement).value)
          " />

      <slot name="rightIcon">
        <Icon v-if="rightIcon || props.type == 'password'" :class="[
          'h-4 aspect-square cursor-pointer text-primary InputRightIcon',
          classes?.rightIcon
        ]" :path="rightIcon ?? type == 'password' ? mdiEyeOutline : mdiEyeOffOutline
  " @click="type = type == 'password' ? 'text' : 'password'" tabindex="0" />
      </slot>
    </div>
    <span v-if="error" :class="['text-sm font-bold text-red-600 Input-Icon']" v-text="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'

interface InputProps {
  leftIcon?: string
  rightIcon?: string
  type?: string
  placeholder?: string
  modelValue: string | number | null
  required: boolean
  error?: string | null
  classes?: {
    leftIcon?: string
    input: string
    rightIcon: string
    error: string
  }
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text'
})

const type = ref(props.type)
</script>

<style scoped></style>
