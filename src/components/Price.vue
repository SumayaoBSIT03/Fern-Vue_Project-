<template>
  <div>
    <h1>Book Prices</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Book ID</th>
          <th>Price</th>
          <th>Purchase Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="price in prices" :key="price.id">
          <td>{{ price.id }}</td>
          <td>{{ price.book_id }}</td>
          <td>{{ price.price }}</td>
          <td>{{ price.purchase_date }}</td>
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
    const prices = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('price.json'); // Replace with the actual path
        prices.value = response.data.prices;
      } catch (error) {
        console.error('Error fetching book prices:', error);
      }
    });

    return {
      prices,
    };
  },
};
</script>

<style scoped>
h1 {
  color: black;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

td {
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

  thead,
  tbody,
  th,
  td,
  tr {
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
