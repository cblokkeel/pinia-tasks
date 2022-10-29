import { defineStore } from "pinia";

type Task = {
    id: number,
    title: string,
    isFav: boolean
};

const API_URL: string = 'http://localhost:3000/tasks';

export const useTaskStore = defineStore('taskStore', {
    state: (): { tasks: Task[], isLoading: boolean } => ({
        tasks: [],
        isLoading: false
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
        async loadTasks() {
            this.isLoading = true;
            const response = await fetch(API_URL);
            const data: Task[] = await response.json();
            this.tasks = data;
            this.isLoading = false;
        },
        async addTask(task: Task) {
            this.tasks.push(task);

            const response: Response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(task),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) { console.error('error happened'); }
        },
        async deleteTask(id: number) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            const response: Response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) { console.error('error happened'); }
        },
        async updateFavoriteTask(id: number) {
            const task = this.tasks.find(task => task.id === id);
            if (task) { task.isFav = !task.isFav; }

            const response: Response = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ isFav: task?.isFav }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) { console.error('error happened'); }
        }
    }
});

export type { Task };