<template>
  <div id="app">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="md"
          v-model="usuario.nome"
          placeholder="Informe o Nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input
          type="email"
          size="md"
          v-model="usuario.email"
          placeholder="Informe o E-mail"
        ></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="primary" class="mr-2"
        >Salvar</b-button
      >
      <b-button @click="obterUsuarios" size="lg" variant="success"
        >Obter Usuários</b-button
      >
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(user, i) in usuarios" :key="i">
        <strong>Nome: </strong> {{ user.nome }} <strong>E-mail: </strong>
        {{ user.email }}
        <br />
        <strong>ID: </strong> {{ i }}
        <br />
        <b-button variant="warning" size="lg" @click="carregar(i)"
          >Carregar</b-button
        >
        <b-button variant="danger" size="lg" class="ml-2" @click="excluir(i)"
          >Excluir</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      usuarios: [],
      id: null,
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
    },
    carregar(id) {
      console.log('ID: ', id)
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    excluir(id) {
      try {
        this.$http.delete(`/usuarios/${id}.json`).then(() => this.limpar());
      } catch (error) {
        console.log('Erro ao tentar excluir o usuário.', error)
      }finally{
        this.obterUsuarios()
      }
    },
    salvar() {
      try {
        const metodo = this.id ? 'patch' : 'post'
        const finalURL = this.id ? `/${this.id}.json` : '.json'
        this.$http[metodo](`/usuarios${finalURL}`, this.usuario).then(() => this.limpar);
      } catch (error) {
        console.log("Erro ao salvar dados. :(");
      } finally {
        this.limpar();
        this.obterUsuarios()
      }
    },
    obterUsuarios() {
      this.$http.get("usuarios.json").then((res) => {
        this.usuarios = res.data;
        console.log(res);
      });
    },
  },
  // created(){
  //   this.$http.post('usuarios.json',{
  //     nome: 'Marcio',
  //     email: 'marcio@hotmail.com'
  //   }).then(res => console.log(res))
  // }
};
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
