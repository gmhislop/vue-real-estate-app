<template>
  <div class="input-container">
    <Label class="label">{{ label }}</Label>

    <input
      class="input"
      :class="{ 'input--error': errors.length > 0 }"
      type="text"
      v-bind="$attrs"
      :value="modelValue"
      @input="updateModelValue"
    />

    <Paragraph variant="error-message" v-for="error in errors" :key="(error.$uid as any)">
      {{ error.$message }}
    </Paragraph>
  </div>
</template>

<script setup lang="ts">
import Paragraph from '@/components/atoms/typography/Paragraph.vue'
import Label from '@/components/atoms/Label/Label.vue'
import type { ErrorObject } from '@vuelidate/core'

defineProps({
  label: String,
  modelValue: String,
  errors: {
    type: Array as () => ErrorObject[],
    required: true,
    default: []
  },
})
const emit = defineEmits(['updateModel']);

const updateModelValue = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emit('updateModel', inputValue);
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--input-errors);
  font-weight: var(--regular);
  height: 2.25rem;
  border-radius: 4px;
  border: 1px solid transparent;
  color: var(--text-secondary);
  padding: 0 1rem;
}

.input--error {
  border: 1px solid red;
}

.input-container {
  flex-grow: 1;
}
</style>
