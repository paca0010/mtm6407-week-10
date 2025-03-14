<script setup>

import { portfolioData } from '../data';
import { RouterLink } from 'vue-router';

const portfolioItems = portfolioData;


</script>


<template>

    <ul>
        <li v-for="portfolioItem in portfolioItems">
            <RouterLink :to="`/portfolio/${portfolioItem.id}`">
                <img :src="portfolioItem.image" :alt="portfolioItem.title" width="400" height="300" />
                <h3>{{ portfolioItem.title }}</h3>
            </RouterLink>
        </li>
    </ul>


</template>


<style>

 ul {
    margin: 20px;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 20px;
 }

 ul li img {
    border-radius: 6px;
 }

 li h3 {
    margin: 0;
    padding: 0;
    font-size: 16px;
 }

 li a {
    text-decoration: none;
    color: #000;
 }


</style>