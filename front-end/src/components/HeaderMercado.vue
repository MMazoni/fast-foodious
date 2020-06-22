<template>
  <div class="header-mercado">
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a href="" class="logo"><h1>Fast&Food'ious</h1></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/lista-solicitacoes-mercado">Lista de produtos</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/solicitacao-coleta">Solicitar coleta</a>
                    </li>
                </ul>
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a v-on:click="logout" href="#" class="nav-link">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  </div>
</template>

<script>
import {Usuario, logout} from '@/services/usuario.service.js'

export default {
  name: 'HeaderMercado',
  methods: {
    logout: function () {
      logout('user');
    }
  }
}
</script>

<style lang="scss">
    .header-mercado{
        header{
            background: #55be5a;
            margin-bottom: 3rem;
            a.logo {
                margin-right: 2rem;
                color: white;
                h1{
                    font-size: 1.75rem;
                    margin-bottom: 0;
                }
            }
        }
    }
  
</style>