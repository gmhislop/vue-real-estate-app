<template>
  <div class="input-container">
    <Label class="label">{{ label }}</Label>

    <input
      class="input"
      :class="{ 'input--error': hasErrors }"
      type="text"
      v-bind="$attrs"
      :value="modelValue"
      @input="updateModelValue"
      :aria-describedby="errorIds"
    />

    <Paragraph
      v-if="hasErrors"
      variant="error-message"
      v-for="error in errors"
      :key="error.$uid"
      :id="error.$uid"
    >
      {{ error.$message }}
    </Paragraph>
  </div>
</template>

<script setup lang="ts">
import Paragraph from '@/components/atoms/typography/Paragraph.vue'
import Label from '@/components/atoms/Label/Label.vue'

interface ErrorObject {
  $uid: string;
  $message: string;
}

interface Props {
  label: string;
  modelValue: string;
  errors: ErrorObject[];
  updateModel: (value: string) => void;
}

const props = defineProps<Props>()

const { label, modelValue, errors, updateModel } = props

const hasErrors = errors.length > 0

const updateModelValue = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  updateModel(inputValue);
}

const errorIds = errors.map((error) => error.$uid).join(' ')
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
  border: 1px solid #eb5440;
}

.input-container {
  flex-grow: 1;
}
</style>
