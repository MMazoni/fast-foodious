<template>
  <div id="form">
    <header>
      <a href=""><h1>Fast&Food'ious</h1></a>
    </header>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <h4 class="mb-4 mt-2">Agora precisamos que você se identifique...</h4>
              <form  @submit.prevent="logar">
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
                <small class="text-danger">{{msg}}</small>
                <div class="row justify-content-md-center">
                  <div class="col">
                    <button type="submit" class="btn btn-dark btn-block mt-4  mb-2">Entrar</button>
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
import {Usuario, login} from '@/services/usuario.service.js'
export default {
  name: 'Login',
  data(){
    return {
      email : "",
      password : "",
      msg: ""
    }
  },
  methods : {
    logar(){
      if (this.password.length > 0) {
        const data  = {
          email : this.email,
          password : this.password
        }
        login(data).then(response => {
          localStorage.setItem('user',response.data.accessToken);
          localStorage.setItem('role_id',response.data.role_id);
          localStorage.setItem('id',response.data.id);
          if(response.data.role_id == 1){
            this.$router.push('lista-solicitacoes-mercado');
          }else{
            this.$router.push('lista-solicitacoes-entregador');
          }
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
#form{
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