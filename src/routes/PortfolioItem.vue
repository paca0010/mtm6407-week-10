<script setup>

import { useRoute } from 'vue-router';
import { portfolioData } from '../data';

const route = useRoute();

const portfolioId = parseInt(route.params.id);
const portfolioItem = portfolioData.find((item) => item.id === portfolioId)


</script>

<template>

    <div class="portfolio-item-section">
        <div>
            <img :src="portfolioItem.image" :alt="portfolioItem.title" width="800" height="600" />
        </div>
        <div>
            <h2>{{ portfolioItem.title }}</h2>
            <p>{{ portfolioItem.description }}</p>
            <ul class="categories">
                <li :class="category.split(' ').join('-').toLowerCase()" v-for="category in portfolioItem.category">{{ category }}</li>
            </ul>
        </div>
    </div>

</template>

<style scoped>

.portfolio-item-section{
    display: flex;
    gap: 20px;
    max-width: 1400px;
    margin: 20px;
}

.portfolio-item-section h2 {
    margin: 0;
    padding: 0;
}

.categories {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.categories li {
    background-color: green;
    border-radius: 25px;
    padding: 4px 8px;
    color: #FFF;
}

.categories li.web-design {
    background-color: blueviolet;
}

.categories li.nft {
    background-color: red;
}

</style>