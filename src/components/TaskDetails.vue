<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Task } from '../stores/TaskStore';

    interface Props {
        task: Task
    }

    const props = defineProps<Props>();

</script>
