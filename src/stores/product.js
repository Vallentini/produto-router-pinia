import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('counter', () => {
  const products = ref([
    {id:1, name:'Liquidificador', price:'R$79,90', qty: '100'},
    {id:2, name:'Batededeira', price:'R$455,99', qty: '100'},
    {id:3, name:'Ventilador', price:'R$155,45', qty: '100'},
    {id:4, name:'Aquecedor', price:'R$259,99', qty: '100'},
    {id:5, name:'Monitor', price:'R$800,00', qty: '100'},

  ])
  
  

  return { products }
})
