import { defineStore } from "pinia";

type Task = {
    id: number,
    title: string,
    isFav: boolean
};

export const useTaskStore = defineStore('taskStore', {
    state: (): { tasks: Task[] } => ({
        tasks: [
            { id: 1, title: 'buy some milk', isFav: false },
            { id: 2, title: 'play Gloomhaven', isFav: true }
        ]
    }),
    getters: {
        getFavoritesTasks(): Task[] {
            return this.tasks.filter(task => task.isFav);
        },
        getFavoritesTasksCount(): number {
            return this.tasks.reduce((acc: number, task: Task) => task.isFav ? acc + 1 : acc, 0);
        },
        getTotalCount(): number {
            return this.tasks.length;
        }
    },
    actions: {
        addTask(task: Task) {
            this.tasks.push(task);
        },
        deleteTask(id: number) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        },
        updateFavoriteTask(id: number) {
            const task = this.tasks.find(task => task.id === id);
            if (task) { task.isFav = !task.isFav; }
        }
    }
});

export type { Task };