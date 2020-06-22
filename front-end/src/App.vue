<template>
  <div class="h-100">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html,body{
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  html,h1,h2,h3,h4,h5,h6,p{
    font-family: 'Roboto', sans-serif !important;
  }
  button.btn{
    padding: 10px 40px;
    font-weight: bold;
  }
  label{
    font-size: 0.75rem;
  }

  input.form-control{
    font-size: 0.75rem;
  }
</style>
