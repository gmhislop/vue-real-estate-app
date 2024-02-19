<template>
    <div class="about">
        <h1>About DTT Real Estate</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. <br /><br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        </p>
        <h2>Design and Development</h2>
        <div class="logo-container">
            <img src="@/assets/dtt-logo.png" alt="DTT Logo" width="100" />
            <div class="link-container">
                <p>By DTT</p>
                <a to="https://www.d-tt.nl">www.d-tt.nl</a>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'About'
};
</script>
  
<style scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 2rem 10vw;
    gap: 2rem;
}

h1,
h2 {
    font-size: 24px;
    font-weight: 700;
}

link-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

img {
    width: 300px;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>
  