<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <nav class="filter">
      <button @click="handleUpdateFilter('all')">All tasks</button>
      <button @click="handleUpdateFilter('favs')">Favs tasks</button>
    </nav>

    <div class='task-list' v-if="filter === 'all'">
      <p>You have {{ taskStore.getTotalCount }} tasks left to do.</p>
      <div v-for='task in taskStore.tasks' key="task.id">
        <TaskDetails :task='task' />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.getFavoritesTasksCount }} favs tasks to do.</p>
      <div v-for='task in taskStore.getFavoritesTasks' key="task.id">
        <TaskDetails :task='task' />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import TaskDetails from './components/TaskDetails.vue';
  import { useTaskStore } from './stores/TaskStore';

  const taskStore = useTaskStore();

  const filter = ref<'all' | 'favs'>('all');

  const handleUpdateFilter = (newFilter: 'all' | 'favs') => {
    filter.value = newFilter;
  }
</script>
