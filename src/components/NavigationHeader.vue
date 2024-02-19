<template>
    <header v-show="!mobile" :class="{ 'scroll-nav': scrollPosition }">
        <nav>
            <img alt="DTT Logo" class="logo" src="@/assets/dtt-logo.png" width="80" />
            <ul class="navigation">
                <li>
                    <router-link class="link" to="/" exact>
                        <span :class="{ 'active': $route.path === '/' }">Houses</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/about" exact>
                        <span :class="{ 'active': $route.path === '/about' }">About</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

type NavBarProps = {
    mobileNav: null | boolean;
    mobile: null | boolean;
    scrollPosition: number | null;
    windowWidth: number | null;
    toggleMobileNav: () => void;
    checkScreen: () => void;
};

export default defineComponent({
    name: 'NavigationHeader',
    data() {
        return {
            mobileNav: null,
            mobile: true,
            scrollPosition: null,
            windowWidth: null,
        } as NavBarProps;
    },
    created() {
        this.checkScreen();
        window.addEventListener('resize', this.checkScreen);
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 768) {
                this.mobile = true;
            } else {
                this.mobile = false;
            }
            if (!this.mobile || this.scrollPosition) {
                this.mobileNav = false;
            }
        },
    },
    mounted() {
        this.checkScreen();
        window.addEventListener('resize', this.checkScreen);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreen);
    },
});
</script>
  
<style scoped>
header {
    z-index: 100;
    width: 100%;
    position: fixed;
    top: 0;
    transition: all 0.5s ease;
    padding: 1rem 0;
    color: var(--color-primary);
    background-color: var(--color-background-2);
}

nav {
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    gap: 1rem;
    margin: 0 10vw;
}

ul {
    padding: 0;
}

ul,
.link {
    list-style: none;
    text-decoration: none;
    color: var(--color-tertiary-dark);
    gap: 1rem;
    cursor: pointer;
}

.active {
    color: var(--color-text-primary);
    font-weight: 700;
}

li {
    display: inline;
    margin-left: 2rem;
}

.link {
    font-size: 0.8rem;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

.logo {
    cursor: pointer;
}

.dropdown-nav {
    color: var(--color-text-primary);
    background-color: var(--color-background-1);
}

@media (min-width: 768px) {
    nav {
        max-width: 1140px;
    }
}

.nav-links {
    display: flex;
    gap: 1rem;
}
</style>
  