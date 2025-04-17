<template>
  <Navbar />
  <div class="container mt-4">
    <div class="row gx-4 gy-4">
      <div class="col-lg-3 col-md-4 col-12 pe-5">
        <DatePicker @dateChanged="updateDate" />
      </div>

      <div class="col-lg-9 col-md-8 col-12">
        <LeafletComp :selectedDate="selectedDate" />
      </div>
    </div>
  </div>

  <MainFooter />
</template>

<script setup>
import { ref } from "vue";
import LeafletComp from '@/components/LeafletComp.vue';
import Navbar from "@/components/MainNavbar.vue";
import DatePicker from './DatePicker.vue';
import MainFooter from './MainFooter.vue';

const roundDownToHour = (date) => {
  date.setMinutes(0, 0, 0);
  return date.toISOString().split(".")[0] + "Z";
};

const selectedDate = ref(roundDownToHour(new Date()));

const updateDate = (newDate) => {
  selectedDate.value = roundDownToHour(new Date(newDate));
};
</script>



<style scoped>
.container {
  max-width: 100%;
}
</style>