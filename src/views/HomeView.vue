<script setup>
import {useProductStore} from '@/stores/product'
import {useRouter} from 'vue-router'
const productStore = useProductStore()
const router = useRouter()
function vizualizar(id) {
  router.push(`/products/${id}`)
}
</script>

<template>
  <h1>Listagem de produtos</h1>
  <p>{{ productStore.products }}</p>
  <table>
    <thead>
      <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Preço</th>
      <th>Ações</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td> {{ product.name }}</td>
        <td> {{ product.price }}</td>
        <td><button @click="vizualizar(peoduct.id)">ver</button></td>
      </tr>
    </tbody>
  </table>
</template>
