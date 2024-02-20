<template>
    <div class="not-found">
      <img class="search-not-found-image" src="@/assets/img_empty_houses@3x.png" alt="No results found" />
      <Paragraph class="body-message">No results found.<br />Please try another keyword.</Paragraph>
    </div>
  </template>
  
  <script setup>
    import Paragraph from '@/components/atoms/typography/Paragraph.vue'
  </script>
  
  <style scoped>
    .not-found {
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
    }
  
    .search-not-found-image {
      width: 100px;
    }
  
    .body-message {
      font-family: var(--font-headings);
      color: var(--text-secondary);
      font-size: var(--empty-message);
      font-weight: var(--medium);
      text-align: center;
    }
  
    @media screen and (min-width: 1024px) {
      .body-message {
        font-size: var(--empty-message);
      }
    }
  </style>
  