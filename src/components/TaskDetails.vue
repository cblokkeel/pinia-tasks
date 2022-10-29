<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons" :class="{ active: task.isFav }" @click="taskStore.updateFavoriteTask(task.id)">favorite</i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTaskStore, type Task } from '../stores/TaskStore';

interface Props {
    task: Task
}

const props = defineProps<Props>();

const taskStore = useTaskStore();
</script>
