<template>
  <div id="app">
    <div class="header">
    <h1>Library of Congress Staff of Information System</h1>
    <div class="nav-links">
      <router-link class="nav-link" to="/staffs">Staffs</router-link>
      <router-link class="nav-link" to="/appointments">Appointments</router-link>
      <router-link class="nav-link" to="/prices">Book Prices</router-link>
    </div>
    </div>
   
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url('https://www.tripsavvy.com/thmb/V8G6PLyI3mbufSUrP2aLgJewaCQ=/2139x1403/filters:fill(auto,1)/GettyImages-10173742-56d8b6395f9b5854a9c50d08.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.header {
  margin-bottom: 20px;
  text-align: center;
  color: whitesmoke;
  background-color: rgba(255, 217, 0, 0.485);
  width: 100%;
  padding: 20px;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.nav-link {
  width: 90px;
  padding: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: gold;
  background-color: black;
  border: 1px solid #97a1a8;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  display: flex;
  justify-content: center;
  font-weight: bolder;
}

.nav-link:hover {
  background-color: #97a1a8;
  color: #fff;
  transform: scale(1.05);
}

.content {
  width: 100%;
  margin-top: 0px;
  padding: 0px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
