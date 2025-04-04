<template>
    <div> 
        <h2>Banana</h2>
        <button @click="addToCart({nome: 'banana', preco: 12, por: 'kg'})">Adicionar ao carrinho</button>
        <h2>Itens no carrinho: {{ cartItemCount }}</h2>
        <br>
        <div v-for="(item, index) in cart" :key="index">
            <h2>{{ item.nome }} - R${{ item.preco }} por {{ item.por }}</h2>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapState(['cart']),
            ...mapGetters(['cartItemCount']),
        },
        methods: {
            ...mapActions(['addToCart']),
        },
    };
</script>