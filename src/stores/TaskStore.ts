import { defineStore } from "pinia";

type Task = {
    id: number,
    title: string,
    isFav: boolean
}

export const useTaskStore = defineStore('taskStore', {
    state: (): { tasks: Task[] } => ({
        tasks: [
            { id: 1, title: 'buy some milk', isFav: false },
            { id: 2, title: 'play Gloomhaven', isFav: true }
        ]
    })
});