<template>
    <div>
      <h1>Staffs</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="staff in staffs" :key="staff.id">
            <td>{{ staff.id }}</td>
            <td>{{ staff.full_name }}</td>
            <td>{{ staff.email }}</td>
            <td>{{ staff.position }}</td>
            <td>{{ staff.department }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const staffs = ref([]);
const loading = ref(true); // Set to true if you want to show "Loading..." initially

onMounted(async () => {
  try {
    const response = await axios.get('staff.json'); // Replace with the actual path
    staffs.value = response.data.staffs;
  } catch (error) {
    console.error('Error fetching staffs:', error);
  } finally {
    loading.value = false; // Hide loading state after data is fetched
  }
});
</script>

<style scoped>
h1{
  color: black;
  text-align: center;
}
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  td{
    color: gold;
    background-color: rgba(0, 0, 0, 0.5);
  }

  th {
    color: gold;
    background-color: rgba(0, 0, 0, 1);
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  /* Optional: Add some additional styling for responsiveness */
  @media (max-width: 768px) {
    table {
      overflow-x: auto;
      display: block;
    }

    thead, tbody, th, td, tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin-bottom: 15px;
    }

    td {
      border: none;
      border-bottom: 1px solid #ddd;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }
</style>
