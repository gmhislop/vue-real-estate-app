<template>
    <div class="input-container">
        <Label class="label">{{ label }}</Label>

        <input class="input" :class="{ 'input--error': hasErrors }" type="text" v-bind="$attrs" :value="modelValue"
            @input="updateModelValue" :aria-describedby="errorIds" />

        <Paragraph v-if="hasErrors" variant="error-message" v-for="error in errors" :key="error.$uid" :id="error.$uid">
            {{ error.$message }}
        </Paragraph>
    </div>
</template>
  
<script setup>
import { Paragraph, Label } from '@components/atoms';

const { label, modelValue, errors } = props;
const hasErrors = errors.length > 0;

const updateModelValue = (event) => {
    emit('update:modelValue', event.target.value);
};

const errorIds = errors.map(error => error.$uid).join(' ');

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
    border: 1px solid #EB5440;
}

.input-container {
    flex-grow: 1;
}
</style>
  