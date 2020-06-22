<template>
  <div class="lista-solicitacoes">
    <header-entregador></header-entregador>
    <div class="container">
        <table class="table">
            <caption>Lista de solicitações coletadas</caption>
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Produto</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Data de validade</th>
                <th scope="col">Local de coleta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in solicitacoes" :key="row.id">
                <th scope="row">{{row.id}}</th>
                <td>{{row.product_name}}</td>
                <td>{{row.quantity}}</td>
                <td>{{dateFormat(row.expiration_date)}}</td>
                <td>{{row.location}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>
import HeaderEntregador from "@/components/HeaderEntregador.vue";
import {Solicitacoes, getSolicitacoesColetadas} from '@/services/solicitacoes.service.js';
import moment from 'moment';

export default {
    name: 'ListaProdutosColetados',
    components: {HeaderEntregador},
    data() {
        return   {
            solicitacoes: []
        }
    },
    methods: {
        dateFormat(data){
            return moment(data, 'YYYY-MM-DD').format('DD/MM/YYYY');
        }
    },
    mounted() {
        getSolicitacoesColetadas(localStorage.getItem('id')).then(response => {
            this.solicitacoes = response.data;
        });
    },
    
}


</script>
<style lang="scss" scope>
    .lista-solicitacoes{
        margin-bottom: 4rem;
    }
</style>