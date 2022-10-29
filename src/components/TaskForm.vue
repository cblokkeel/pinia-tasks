<template>
    <form @submit.prevent="handleSubmit">
        <input
            type="text"
            placeholder="I need to..."
            v-model="newTask"
        >
        <button>Add</button>
    </form>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';

const taskStore = useTaskStore();

const handleSubmit = () => {
    if (newTask.value.trim().length > 0) {
        // not a best practice to use math.random for id here. in a real world project, i would have used uuid for ids
        taskStore.addTask({ id: Math.floor(Math.random() * 10000), title: newTask.value, isFav: false });
    }
    newTask.value = '';
}

const newTask = ref<string>('');
</script>
