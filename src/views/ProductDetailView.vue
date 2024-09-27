<script setup>
import {useProductStore} from '@/stores/product'
defineprops (['id'])
</script>
<template>
    <h1>detalhes do produto {{ id }}</h1>

</template>