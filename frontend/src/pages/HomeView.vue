<script setup>
import Navbar from '../static_components/Navbar.vue'
import Card from '../components/Card.vue'
import Table from '../components/Table.vue'

</script>

<template>
    <Navbar>
        <div class="m-5 text-4xl">
            <h1>Welcome, Joe Mama!</h1>
        </div>
        <div class="grid grid-cols-3 gap-3">
           <div class="row shadow-md rounded-md">
              <div class="m-5 lg:m-5  sm:m-2 text-left lg:text-left md:text-center sm:text-center text-xl font-bold">
                Last Monthly Summary
              </div>
              <div class="m-5">
                <div>
                    <Table/>
                </div>
              </div>
           </div>
           <div class="row">
               
           </div>
           <div class="row">
               
           </div>
           <div class="row">
              
           </div>
           <div class="row">
            

           </div>
           <div class="row">
            

           </div>
        
            
      
           
        </div>

    </Navbar>
</template>