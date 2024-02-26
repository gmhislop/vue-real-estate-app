<template>
  <form v-on:submit="submit" class="form">
    <Input 
      label="Street name*" 
      placeholder="Enter the street name" 
      type="text" 
      v-model="house.streetName"
      @updateModel="(val: string) => {
        house.streetName = val
      }"
      :errors="formValidation?.streetName.$errors"
    />

    <DetailsContainer class="inputs-container">
      <Input 
        label="House number*" 
        placeholder="Enter house number" 
        type="number" 
        v-model="house.houseNumber"
        @updateModel="(val: string) => house.houseNumber = val"
        :errors="formValidation.houseNumber.$errors"
      />
      <Input 
        label="Addition (optional)" 
        placeholder="e.g. A" 
        type="text" 
        @updateModel="(val: string) => house.numberAddition = val"
        v-model="house.numberAddition"
      />
    </DetailsContainer>

    <Input 
      label="Postal code*" 
      placeholder="e.g. 1000 AA" 
      type="text" 
      v-model="house.zip"
      @updateModel="(val: string) => house.zip = val"
      :errors="formValidation.zip.$errors"
    />
    <Input 
      label="City*" 
      placeholder="e.g. Utrecht" 
      type="text" 
      v-model="house.city"
      @updateModel="(val: string) => house.city = val"
      :errors="formValidation.city.$errors"
    />

    <ImageUploader 
      label="Upload picture (PNG or JPG)*"
      :previewImageUrl="house.image"
      :imageFile="house.file"
      @updateModel="(url: string, file: File | null) => {
        house.image = url;
        house.file = file;
      }"
      :errors="formValidation.image.$errors"
    />

    <Input 
      label="Price*" 
      placeholder="e.g. €150.000" 
      type="number" 
      v-model="house.price"
      @updateModel="(val: string) => house.price = val"
      :errors="formValidation.price.$errors"
    />

    <DetailsContainer class="inputs-container">
      <Input 
        label="Size*" 
        placeholder="e.g. 60m2" 
        type="number" 
        v-model="house.size"
        @updateModel="(val: string) => house.size = val"
        :errors="formValidation.size.$errors"
      />
      <div class="select-container">
        <Label>Garage*</Label>
        <select class="drop-down" :class="{'input--error': formValidation.hasGarage.$errors.length > 0}" v-model="house.hasGarage" @change="(event: Event) => house.hasGarage = (event.target as HTMLInputElement).value">
          <option disabled value="">Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <Paragraph variant="error-message" v-for="error in formValidation.hasGarage.$errors" :key="error.$uid">
          {{ error.$message }}
        </Paragraph>
      </div>
    </DetailsContainer>

    <DetailsContainer class="inputs-container">
      <Input 
        label="Bedrooms*" 
        placeholder="Enter amount" 
        type="number" 
        v-model="house.bedrooms"
        @updateModel="(val: string) => house.bedrooms = val"
        :errors="formValidation.bedrooms.$errors"
      />
      <Input 
        label="Bathrooms*" 
        placeholder="Enter amount" 
        type="number" 
        v-model="house.bathrooms"
        @updateModel="(val: string) => house.bathrooms = val"
        :errors="formValidation.bathrooms.$errors"
      />
    </DetailsContainer>

    <Input 
      label="Construction date*" 
      placeholder="e.g. 1990" 
      type="number" 
      v-model="house.constructionYear"
      @updateModel="(val: string) => house.constructionYear = val"
      :errors="formValidation.constructionYear.$errors"
    />
    <div class="description-container">
      <Label>Description*</Label>
      <textarea class="description-text-area" :class="{'input--error': formValidation.description.$errors.length > 0}" :value="house.description" placeholder="Enter description" @change="(event: Event) => house.description = (event.target as HTMLInputElement).value"></textarea>
      <Paragraph variant="error-message" v-for="error in formValidation.description.$errors" :key="error.$uid">
        {{ error.$message }}
      </Paragraph>
    </div>
    <button class="form-submit-button" type="submit">{{ buttonText }}</button>
  </form>
</template>

<script lang='ts' setup>
  import Input from '@/components/atoms/Input/Input.vue';
  import { reactive } from 'vue';
  import DetailsContainer from '@/components/atoms/DetailsContainer/DetailContainer.vue';
  import Label from '@/components/atoms/Label/Label.vue';
  import Paragraph from '@/components/atoms/typography/Paragraph.vue';
  import useVuelidate from '@vuelidate/core'
  import { required, helpers } from '@vuelidate/validators'
  import ImageUploader from '@/components/molecules/ImageUploader/ImageUploader.vue';
  import { DETAIL_PAGE } from '@/router';
  import { useRouter } from 'vue-router';
  import { uploadImage } from '@/services/api';
  const router = useRouter();

  const props = defineProps({
    values: {
      price: Number,
      houseNumber: String,
      image: String,
      bedrooms: Number,
      bathrooms: Number,
      size: Number,
      description: String,
      streetName: String,
      city: String,
      zip: String,
      constructionYear: Number,
      hasGarage: Boolean,
    },
    handleSubmit: Function,
    buttonText: String
  })

  const house = reactive({...props.values, file: null})

  const requiredFieldMissingValidator = helpers.withMessage('Required field missing', required);

  const rules = {
    streetName: {required: requiredFieldMissingValidator}, 
    houseNumber: {required: requiredFieldMissingValidator},
    numberAddition: '',
    image: {required: requiredFieldMissingValidator},
    zip: {required: requiredFieldMissingValidator},
    city: {required: requiredFieldMissingValidator}, 
    price: {required: requiredFieldMissingValidator},
    size: {required: requiredFieldMissingValidator},
    hasGarage: {required: requiredFieldMissingValidator},
    bedrooms: {required: requiredFieldMissingValidator},
    bathrooms: {required: requiredFieldMissingValidator},
    constructionYear: {required: requiredFieldMissingValidator},
    description: {required: requiredFieldMissingValidator}
  };

  const formValidation = useVuelidate(rules, house)

  async function submit(event: Event) {
    event.preventDefault();
    const valid = await formValidation.value.$validate();

    if (!valid) return
    const {
      price,
      houseNumber,
      bedrooms,
      bathrooms,
      size,
      description,
      streetName,
      city,
      zip,
      constructionYear,
      hasGarage,
      image,
    } = house;

    const savedHouse = await props.handleSubmit({
      price,
      houseNumber,
      bedrooms,
      bathrooms,
      size,
      description,
      streetName,
      city,
      zip,
      constructionYear,
      hasGarage,
    }, image);
    const file = house.file;
   
    if (file) {
      await uploadImage(file, savedHouse.id);
    }
    router.push({name: DETAIL_PAGE, params: {id: savedHouse.id}});
  }

</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .inputs-container {
    padding: 0;
  }

  .inputs-container:last-of-type {
    gap: 0;
  }

  .select-container {
    width: 177px;
    flex-grow: 1;
  }

  .drop-down {
    display: block;
    width: 100%;
    font-family: var(--font-body);
    font-size: var(--buttons-tabs-text);
    font-weight: var(--regular);
    height: 2.25rem;
    border-radius: 4px;
    border: none;
    color: var(--text-secondary);
    padding: 0 1rem;
  }

  .description-text-area {
    font-family: var(--font-body);
    font-size: var(--buttons-tabs-text);
    font-weight: var(--regular);
    width: 100%;
    height: 6.5rem; 
    border: none;
    border-radius: 4px;
    color: var(--text-secondary);
    resize: none;
    padding: 1rem 0 0 1rem;
    }

  .input--error {
    border: 1px solid var(--color-primary);
  }

  .form-submit-button {
    font-family: var(--font-headings);
    font-size: var(--buttons-tabs-text);
    font-weight: var(--bold);
    color: var(--color-background-2);
    border: none;
    border-radius: 8px;
    background-color: var(--color-primary);
    width: 100%;
    height: 2.25rem;
    margin: 1rem 0;
  }

  .form-submit-button--inactive {
    color: var(--background-2);
    background-color: var(--color-primary / 0.9);
  }

  @media screen and (min-width: 1024px) {
    .form-submit-button {
      width: 55%;
      margin-left: auto;
    }
  }
</style>
