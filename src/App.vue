<template>
  <div id="app">
    <b-alert show>Padrao</b-alert>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  // created(){
  //   this.$http.post('usuarios.json',{
  //     nome: 'Marcio',
  //     email: 'marcio@hotmail.com'
  //   }).then(res => console.log(res))
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
