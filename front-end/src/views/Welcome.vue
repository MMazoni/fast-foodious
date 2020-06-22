<template>
  <div class="login h-100">
    <header>
        <a href=""><h1>Fast&Food'ious</h1></a>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Plataforma
                    para empresas de alimentação<br>
                    e entregadores
                </h2>
                <div class="row justify-content-md-center">
                    <div class="col-auto">
                        <div class="card" @click="redirect()">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <h6>Sou uma empresa</h6>
                                        <p><small>Pra quem quer cadastrar produtos e o local de coleta.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="card"  @click="redirect()">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <h6>Sou um entregador</h6>
                                        <p><small>Para quem quer escolher produtos e fazer entregas.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Welcome',
  methods: {
    redirect() {
        this.$router.push('login');
    }
}
}


</script>
<style lang="scss" scope>
  
  img{
        width: 80%;
        margin-top: 1rem;
  }

  .login{
    background: #55be5a;
    .container{
        background: #55be5a;
    }
    h2{   
        margin-bottom: 10vh;
        margin-top: 20vh;
        font-weight: bold;
        color: white;
        font-size: 2.5rem;
    }
    h6{
        font-weight: bold;
        color: #55be5a;
        
    }
    header{
        a {
            color: #55be5a;
            h1{
                font-size: 1.75rem;
                margin-bottom: 0;
            }
        }
        background: white;
        padding: 1rem 3rem;
    }
    p{
        margin-bottom: 0;
    }
    .card{
        cursor: pointer;
        margin-bottom: 4rem;
    }
  }
</style>
