<template>
  <main>
    <Layout class="layout">
      <div class="about-container">
        <Heading as="h2">
          About DTT Real Estate
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat. <br /><br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat
        </Paragraph>
      </div>

      <div class="about-container">
        <Heading as="h2">Design and Development</Heading>
        <div class="info-container">
          <img src="@/assets/dtt-logo.png" alt="DTT Logo" class="logo-image" />
          <div class="link-container">
            <Paragraph>By DTT</Paragraph>
            <a href="https://www.d-tt.nl" class="about-link">www.d-tt.nl</a>
          </div>
        </div>
      </div>
    </Layout>
  </main>
</template>

<script setup lang="ts">
import Heading from '@/components/atoms/typography/Heading.vue';
import Paragraph from '@/components/atoms/typography/Paragraph.vue';
import Layout from '@/components/templates/Layout/Layout.vue';
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
  height: 100%;
}

.logo-image {
  width: 10.5rem;
}

.info-container {
  display: flex;
  gap: 2rem;
}

.link-container {
  display: flex;
  flex-direction: column;
}

.about-link {
  text-decoration: none;
  color: var(--color-hyperlink);
  font-size: var(--listing-information);
}
</style>
