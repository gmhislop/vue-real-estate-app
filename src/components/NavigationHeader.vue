<template>
    <!-- Desktop version -->
    <header class="header-desktop">
        <nav class="desktop-nav" aria-label="Main navigation">
            <RouterLink :to="{ name: HOME_PAGE }">
                <img alt="Logo" class="logo" src="@/assets/dtt-logo.png" width="45" height="45" />
            </RouterLink>
            <RouterLink :to="{ name: HOME_PAGE }">Houses</RouterLink>
            <RouterLink :to="{ name: ABOUT_PAGE }">About</RouterLink>
        </nav>
    </header>

    <!-- Mobile version -->
    <nav class="mobile-nav" aria-label="Main navigation">
        <RouterLink :to="{ name: HOME_PAGE }">
            <img alt="House icon" class="nav-icon nav-icon--inactive" src="@/assets/ic_mobile_navigarion_home@3x.png" />
            <img alt="House icon" class="nav-icon nav-icon--active"
                src="@/assets/ic_mobile_navigarion_home_active@3x.png" />
        </RouterLink>
        <RouterLink :to="{ name: ABOUT_PAGE }">
            <img alt="Information icon" class="nav-icon nav-icon--inactive"
                src="@/assets/ic_mobile_navigarion_info@3x.png" />
            <img alt="Information icon" class="nav-icon nav-icon--active" src="@/ic_mobile_navigarion_info_active@3x.png" />
        </RouterLink>
    </nav>
</template>
  
<script setup>
import { HOME_PAGE, ABOUT_PAGE } from '@/router';
</script>
<style scoped>
.header-desktop {
    display: none;
}

.desktop-nav {
    max-width: 1440px;
    padding: 1rem 10.3125rem 1rem 10.3125rem;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 4rem;
}

.logo {
    display: block;
}

nav {
    font-size: var(--header-menu);
}

nav a.router-link-active {
    font-weight: var(--bold);
    color: var(--text-primary);
}

nav a.router-link-active:hover {
    background-color: transparent;
}

a.router-link-active .nav-icon--inactive {
    display: none;
}

a.router-link-active .nav-icon--active {
    display: block;
}

a .nav-icon--inactive {
    display: block;
}

a .nav-icon--active {
    display: none;
}

.mobile-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--background-2);
    min-height: 3.125rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
}

.nav-icon {
    width: 1.925rem;
    height: 1.925rem;
}

@media (min-width: 1024px) {

    .mobile-nav {
        display: none;
    }

    .header-desktop {
        display: block;
        background-color: var(--background-2);
    }

}
</style>
