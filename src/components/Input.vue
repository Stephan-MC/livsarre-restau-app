<template>
  <div class="Input">
    <div :class="[ 'Input-Wrapper', classes.wrapper, { 'p-1': size == 'sm', 'p-2': size == 'md', 'p-3': size == 'lg' } ]">
      <slot name="leftIcon">
        <Icon v-if="leftIcon" :class="['Input-LeftIcon', classes?.leftIcon, { 'h-8': size == 'sm', 'h-10': size == 'md', 'h-14': size == 'lg'}]" :path="leftIcon" />
      </slot>

      <div class="grow">
        <input :type="type" :placeholder="placeholder" :value="modelValue" :class="['Input-Input', classes?.input ]"
          :required="required" @input="
            $emit('update:model-value', ($event.target as HTMLInputElement).value)
            " />
      </div>

      <slot name="rightIcon">
        <Icon v-if="rightIcon || props.type == 'password'" :class="[
          'cursor-pointer text-primary InputRightIcon InputIcon',
          classes?.rightIcon,
          {'h-6': size == 'sm', 'h-8': size == 'md', 'h-10': size == 'lg'}
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
  type?: string
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  modelValue: string | number | null
  required: boolean
  error?: string | null
  classes?: {
    icon?: string
    leftIcon?: string
    rightIcon?: string
    wrapper?: string
    input?: string
    error?: string
  }
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'md'
})

const type = ref(props.type)
</script>

<style scoped></style>
