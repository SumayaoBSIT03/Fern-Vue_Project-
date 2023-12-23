<template>
  <div>
    <h1>Library Appointments</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Appointment Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in appointments" :key="appointment.id">
          <td>{{ appointment.id }}</td>
          <td>{{ appointment.title }}</td>
          <td>{{ appointment.description }}</td>
          <td>{{ appointment.appointment_date }}</td>
          <td>{{ appointment.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const appointments = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('appointment.json'); // Replace with the actual path
        appointments.value = response.data.appointments;
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    });

    return {
      appointments,
    };
  },
};
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
