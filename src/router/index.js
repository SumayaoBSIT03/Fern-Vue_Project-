import { createRouter, createWebHistory } from 'vue-router';
import Staff from '../components/Staff.vue';
import Appointment from '../components/Appointment.vue';
import Price from '../components/Price.vue';

const routes = [
  {
    path: '/staffs',
    name: 'Staff',
    component: Staff,
  },
  {
    path: '/appointments',
    name: 'Appointment',
    component: Appointment,
  },
  {
    path: '/prices',
    name: 'Price',
    component: Price,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
