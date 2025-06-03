<script setup>
import Navbar from '../static_components/Navbar.vue'
import Card from '../components/Card.vue'

</script>

<template>
    <Navbar>
        <div class="m-5 text-4xl">
            <h1>Welcome, Joe Mama!</h1>
        </div>
        <div class="grid grid-cols-3 grid-rows-3">
            <div>
                <Card />
            </div>

            <div>
                <Card />
            </div>

            <div>
                <Card />
            </div>
            
            <div>
                <Card />
            </div>

            <div>
                <Card />
            </div>

            <div>
                <Card />
            </div>
        </div>

    </Navbar>
</template>