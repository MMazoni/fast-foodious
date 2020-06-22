<template>
  <div class="form">
    <header>
      <a href=""><h1>Fast&Food'ious</h1></a>
    </header>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <h4 class="mb-4 mt-2">Cadastro</h4>
              <form  @submit.prevent="cadastro">
                <div class="form-group">
                  <label for="nome">Nome</label>
                  <input type="text" class="form-control" id="nome" aria-describedby="emailHelp" 
                  placeholder="Digite seu nome" v-model="nome" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                  placeholder="Digite seu username" v-model="email" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Senha</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha"
                  v-model="password" required>
                </div>
                <div class="form-check">
                  <input class="form-check-input" v-model="perfil" type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked>
                  <label class="form-check-label" for="exampleRadios1">
                    Mercado
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" v-model="perfil" type="radio" name="exampleRadios" id="exampleRadios2" value="2">
                  <label class="form-check-label" for="exampleRadios2">
                    Entregador
                  </label>
                </div>
                <small class="text-danger">{{msg}}</small>
                <div class="row justify-content-md-center">
                  <div class="col">
                    <button type="submit" class="btn btn-dark btn-block mt-4  mb-2">Cadastrar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import {Usuario, cadastrar} from '@/services/usuario.service.js'
export default {
  name: 'Cadastro',
  data(){
    return {
      nome: "",
      email: "",
      password: "",
      perfil: "",
      msg: ""
    }
  },
  methods : {
    cadastro(){
      if (this.password.length > 0) {
        const data  = {
          name: this.nome,
          email : this.email,
          password : this.password
        }
        cadastrar(this.perfil, data).then(response => {
          console.log(response.data)
          this.$router.push('lista-solicitacoes-mercado');
        })
        .catch(error =>{
          this.msg = error.response.data.message;
        });
      }
    }
  }
}

</script>
<style lang="scss" scope>
.form{
  header{
    background: #55be5a;
    padding: 1rem 3rem;
    margin-bottom: 4rem;
    a {
      color: white;
      h1{
        font-size: 1.75rem;
        margin-bottom: 0;
      }
    }
  }
  .card{
    margin-bottom: 4rem;
  }
  h4{
    font-weight: bold;
  }
}
</style>