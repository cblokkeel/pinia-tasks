<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class='task-list'>
      <div v-for='task in taskStore.tasks' key="task.id">
        <TaskDetails :task='task' />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useTaskStore } from './stores/TaskStore';
  import TaskDetails from './components/TaskDetails.vue';

  const taskStore = useTaskStore();
</script>
