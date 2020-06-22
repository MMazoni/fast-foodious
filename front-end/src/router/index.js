import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    {
      path: '/',
      name: 'Welcome',
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Welcome.vue')
      },
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')
      },
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/lista-solicitacoes-mercado',
      name: 'ListaSolicitacoesMercado',
      component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ListaSolicitacoesMercado.vue')
      },
      meta: {
        requiresAuth: true,
        is_mercado: true
    }
    },
    
    {
      path: '/lista-solicitacoes-entregador',
      name: 'ListaSolicitacoesEntregador',
      component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ListaSolicitacoesEntregador.vue')
      },
      meta: {
        requiresAuth: true,
        is_entregador: true
      }
    },
    {
      path: '/lista-produtos-coletados',
      name: 'ListaProdutosColetados',
      component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ListaProdutosColetados.vue')
      },
      meta: {
        requiresAuth: true,
        is_entregador: true
      }
    },
    {
      path: '/solicitacao-coleta',
      name: 'SolicitacaoColeta',
      component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SolicitacaoColeta.vue')
      },
      meta: {
        requiresAuth: true,
        is_coleta: true
    }
    }
  
  ]
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('user') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let role_id = parseInt(localStorage.getItem('role_id'));
          if(role_id == 1 && to.name == 'SolicitacaoColeta'){
            next();
          }else{
          if(role_id == 1 && to.name == 'ListaSolicitacoesMercado'){
            next();
          }else{
           
          if(role_id == 2 && to.name == 'ListaSolicitacoesEntregador'){
            next();
          }else{

            if (role_id == 2 && to.name == 'ListaProdutosColetados') {
              next();
            }else {
              next('/login')
            }
          }
        }
          }
      }
  } else {
    next()
  }
})


export default router
