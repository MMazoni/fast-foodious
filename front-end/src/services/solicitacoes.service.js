import axios from 'axios';

const Solicitacoes = axios.create({
    baseURL: 'http://localhost:8080/'
});

export function getSolicitacoesMercado(id){
    return Solicitacoes.get('orders/user/' + id)
}

export  function getSolicitacoesEntregadores(){
    return Solicitacoes.get('orders/status/1')
}

export  function setSolicitacoesMercado(data){
    return Solicitacoes.post('orders', {
        market_id: data.mercado,
        product_name: data.produto,
        expiration_date: data.data,
        location: data.local
    })
}

export  function setColeta(data){
    return Solicitacoes.patch('orders/' + data.order, {
        user_id:  data.usuario
    });
}

export function getSolicitacoesColetadas(id) {
    return Solicitacoes.get('orders/courier/' + id);
}