<template>
  <div class="lista-solicitacoes-entregador">
    <header-entregador></header-entregador>
        <div class="container">
            <p>Clique nos cards para selecionar os produtos e depois confirme a coleta</p>
            <div class="row">
                <div class="col-3" v-for="row in solicitacoes" :key="row.id">
                    <div class="card mb-3"  :id="'card-'+ row.id" v-on:click="selected(row.id)">
                        <div class="card-body">
                            <p><strong>Nome do produto : </strong> {{row.product_name}}</p>
                            <p><strong>Data de validade : </strong> {{ dateFormat(row.expiration_date)}}</p>
                            <p><strong>Local de coleta : </strong> {{row.location}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-auto">
                    <button type="button" v-on:click="coletarProdutos()" class="btn btn-dark btn-lg">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderEntregador from "@/components/HeaderEntregador.vue";
import {Solicitacoes, getSolicitacoesEntregadores,setColeta} from '@/services/solicitacoes.service.js';
import moment from 'moment';

export default {
  name: 'ListaSolicitacoesEntregador',
  components: {HeaderEntregador},
    data() {
        return   {
            solicitacoes: [],
            msg: false
        }
    },
    mounted() {
        getSolicitacoesEntregadores(localStorage.getItem('id')).then(response => {
            this.solicitacoes = response.data;
        });
    },
    watch: {
        deep: true,
        msg: function handler(msg){
            if(this.msg === true){
                window.scrollTo(0, 0);
                getSolicitacoesEntregadores(localStorage.getItem('id')).then(response => {
                    this.solicitacoes = response.data;
                });
                alert('Os produtos foram selecionados para coleta.');
            }
        }
    },
    methods: {
    selected(id) {
        let card = document.getElementById('card-'+id);
        if(card.classList.contains('selected')){
            document.getElementById('card-'+id).classList.remove("selected")
        }else{
            document.getElementById('card-'+id).classList.add("selected")
        }
    },
    dateFormat(data){
        return moment(data, 'YYYY-MM-DD').format('DD/MM/YYYY')
    },
    coletarProdutos(){
        let cards = document.getElementsByClassName('selected');
        if(cards){
            for (let index = 0; index < cards.length; index++) {
                let card =  (cards[index].id).split('-');
                card = card[1];
                var data = {
                    usuario: localStorage.getItem('id'),
                    order: card
                }

                setColeta(data).then(response => {
                    this.msg = true;
                }).catch(error =>{
                   console.log(error.response.data.message);
                })
            }
        }
    }
  }
}



</script>
<style lang="scss" scope>
    .lista-solicitacoes-entregador{
        margin-bottom: 4rem;
        .card{
            font-size: 0.75rem;
            cursor: pointer;
            p{
                margin-bottom: 0.5rem;
            }
        }
        .card.selected{
            border: solid 2px #28a745;
            background: rgba(40, 167, 69, 0.2);
        }

        button.btn{
            border: 0;
            margin-top: 3rem;
        }
    }
</style>