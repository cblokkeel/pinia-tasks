<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="handleUpdateFilter('all')">All tasks</button>
      <button @click="handleUpdateFilter('favs')">Favs tasks</button>
    </nav>

    <div class="loading" v-if="isLoading">
      Loading tasks...
    </div>

    <div class='task-list' v-if="filter === 'all' && !isLoading">
      <p>You have {{ getTotalCount }} tasks left to do.</p>
      <div v-for='task in tasks' key="task.id">
        <TaskDetails :task='task' />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs' && !isLoading">
      <p>You have {{ getFavoritesTasksCount }} favs tasks to do.</p>
      <div v-for='task in getFavoritesTasks' key="task.id">
        <TaskDetails :task='task' />
      </div>
    </div>

    <button @click="handleResetTaskStore">reset</button>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();

const { tasks, isLoading, getFavoritesTasks, getFavoritesTasksCount, getTotalCount } = storeToRefs(taskStore);

taskStore.loadTasks();

const filter = ref<'all' | 'favs'>('all');

const handleUpdateFilter = (newFilter: 'all' | 'favs') => {
  filter.value = newFilter;
}

const handleResetTaskStore = () => { taskStore.$reset(); }
</script>
