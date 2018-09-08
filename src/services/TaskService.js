import { http } from './HttpService'

export function getAllTasks() {
    return http().get('/task');
}

export function getTaskById(id) {
    return http().get(`/task/${id}`);
}

export function createTask(task) {
    return http().post('/task', task);
}

export function deleteTask(id) {
    return http().delete(`/task/${id}`);
}

export function updateTask(task) {
    return http().put('/task', task);
}