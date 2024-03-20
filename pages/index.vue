<template>
 <Bar v-if="telephones.length" :data="chartData"/>
</template>

<style>
body {
    padding: 50px;
}


</style>

<script setup lang="ts">
import type { ChartData } from "chart.js"
import { Bar } from "vue-chartjs"

type telephone ={title: string, selling: number}
const telephones = ref<telephone[]>([]);
fetch("/api.json").then( async (res) => 
telephones.value = await res.json()).catch((error) => alert(error.message));
const chartData = computed((): ChartData<"bar"> =>{
    return {
        labels: telephones.value.map(telephone => telephone.title),
        datasets: [
            {
                label: "Selling in USA",
                backgroundColor: ["#c82834"],
                borderColor: "green",
                borderWidth: {right: 3, left: 1},
                borderRadius: {topRight: 10, topLeft: 3},
                data: telephones.value.map((telephone) => telephone.selling)
            },
            {
                label: "Selling in EU",
                backgroundColor: ["#244771"],
                borderColor: "green",
                borderWidth: {right: 3, left: 1},
                borderRadius: {topRight: 10, topLeft: 3},
                data: telephones.value.map((telephone) => telephone.selling + 1)
            },
        ],
    }
})
</script>