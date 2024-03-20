<template>
    <Line v-if="telephones.length" :options="{}"/>
   </template>
   
   <style>
   body {
       padding: 50px;
   }
   
   
   </style>
   
   <script setup lang="ts">
   import type { ChartData } from "chart.js"
   import { Line } from "vue-chartjs"
   
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
                   data: telephones.value.map((telephone) => telephone.selling)
               },
               {
                   label: "Selling in EU",
                   backgroundColor: ["#244771"],
                   data: telephones.value.map((telephone) => telephone.selling + 1)
               },
           ],
       }
   })
   </script>