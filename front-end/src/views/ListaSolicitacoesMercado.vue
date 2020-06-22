<template>
  <div class="lista-solicitacoes-mercado">
    <header-mercado></header-mercado>
    <div class="container">
        <p>Para cadastrar novo produto para coleta, <a href="/solicitacao-coleta" >clique aqui</a> </p>
        <table class="table">
            <caption>Lista de solicitações de coleta</caption>
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Produto</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Local de coleta</th>
                <th scope="col">Coletor</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in solicitacoes" :key="row.id">
                <th scope="row">{{row.id}}</th>
                <td>{{row.product_name}}</td>
                <td>{{row.quantity}}</td>
                <td>{{row.location}}</td>
                <td>{{row.courier ? row.courier.user.name : '-'}}</td>
                <td><p v-bind:class="setStatus(row.status.id)"><small>{{row.status.name}}</small></p></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderMercado from "@/components/HeaderMercado.vue";
import {Solicitacoes, getSolicitacoesMercado} from '@/services/solicitacoes.service.js'

export default {
    name: 'ListaSolicitacoesMercado',
    components: {HeaderMercado},
    data: function() {
        return   {
            solicitacoes: []
        }
    },
    mounted() {
        getSolicitacoesMercado(localStorage.getItem('id')).then(response => {
            this.solicitacoes = response.data;
        });
    },
    methods:{
      setStatus(status){
          if(status == 1){
              return 'bg-secondary p-2 text-white text-center';
          }else{
              if(status == 2){
                return 'bg-info p-2 text-white text-center';
              }else{
                return 'bg-success p-2 text-white text-center';
              }
          }
      }
    }
}


</script>
<style lang="scss" scope>
    .lista-solicitacoes-mercado{
        margin-bottom: 4rem;
    }
</style>