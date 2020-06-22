<template>
    <div class="coleta">
        <header-mercado></header-mercado>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-8">
                <div class="card">
                    <div class="card-body">
                    <h4 class="mb-4 mt-2">Solicite uma coleta</h4>
                    <form  @submit.prevent="solicitacao">
                        <h5>Produto</h5>
                        <div class="form-group">
                            <label for="nomeProduto">Nome do produto</label>
                            <input type="text" class="form-control" id="nomeProduto" 
                            v-model="produto" required placeholder="Digite o nome do produto">
                        </div>
                        <div class="form-group">
                            <label for="dataValidade">Data de validade</label>
                            <input type="date" class="form-control" id="dataValidade" 
                            v-model="data" required placeholder="Digite a data de validade">
                        </div>
                        <hr>
                        <h5>Local de coleta</h5>
                        <div class="row">
                            <div class="col-10">
                                <div class="form-group">
                                    <label for="rua">Rua</label>
                                    <input type="text" class="form-control" id="rua" 
                                    v-model="rua" required placeholder="Digite a rua">
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group">
                                    <label for="numero">Número</label>
                                    <input type="text" class="form-control" id="numero" 
                                    v-model="numero" required placeholder="N°">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="bairro">Bairro</label>
                                    <input type="text" class="form-control" id="bairro" 
                                    v-model="bairro" required placeholder="Digite o bairro">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="cidade">Cidade</label>
                                    <input type="text" class="form-control" id="cidade" 
                                    v-model="cidade" required placeholder="Digite a cidade">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="estado">Estado</label>
                                    <input type="text" class="form-control" id="estado" 
                                    v-model="estado" required placeholder="Digite o estado">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="cep">CEP</label>
                                    <input type="text" class="form-control" id="cep" 
                                    v-model="cep" required placeholder="Digite o CEP">
                                </div>
                            </div>
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
import HeaderMercado from "@/components/HeaderMercado.vue";
import {Solicitacoes, setSolicitacoesMercado} from '@/services/solicitacoes.service.js'

export default {
  name: 'SolicitacaoColeta',
  components: {HeaderMercado},
  data(){
    return {
      produto : "",
      mercado : "",
      msg: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      data: "",
    }
  },methods : {
      solicitacao(){
      const data  = {
        mercado: 1,
        produto: this.produto,
        data: this.data,
        local: this.rua + ', '+
        this.numero + ' - ' + this.bairro + ', ' +
        this.cidade + ' - ' + this.estado + ', ' +
        this.cep
        }
      setSolicitacoesMercado(data).then(response => {
        this.$router.push('lista-solicitacoes-mercado');
      }).catch(error =>{
           this.msg = error.response.data.message;
      })
      }
  }
}


</script>
<style lang="scss" scope>
    .coleta{
        margin-bottom: 4rem;
    }
</style>