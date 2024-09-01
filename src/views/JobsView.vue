<template>
  <div class='h-full'>
    <h1 class="text-slate-200 text-5xl">Job<span class="text-emerald-300">.</span></h1>
    <div class="jobs flex flex-col md:flex-row md:h-screen items-center justify-around gap-8 p-3">
      <JobPost v-for="job in jobs" :key="job.id" v-bind="job" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import JobPost from '@/components/JobPost.vue';

const jobs = ref(null);

onMounted(() => {

  try {
    (async () => {
      const res = await fetch("./src/assets/jobs.json", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.ok) {
        const data = await res.json();
        jobs.value = data;
        return;
      }

      throw Error('Server error!');
    })();
  } catch (e) {
    console.error(e.Message);
  }

})
</script>