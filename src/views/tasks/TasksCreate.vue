<template>
    <div>
        <h1>Create Task</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="task.title" type="text" class="form-control" id="title" name="title" placeholder="Title" />
            </div>
            <div class="form-group">
                <label for="body">Body</label>
                <textarea placeholder="Body" class="form-control" v-model="task.body" name="body" id="body" cols="30" rows="10"></textarea>
            </div>
            <div class="form-group">
                <label for="due-date">Due Date</label>
                <input name="due-date" v-model="task.dueDate" type="date" class="form-control" id="due-date" placeholder="Due Date" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    import * as taskService from '../../services/TaskService'

    export default {
        name: 'tasks-create',
        data: function() {
            return {
                task: {
                    title: '',
                    body: '',
                    dueDate: ''
                }
            }
        },
        methods: {
            onSubmit: async function() {
                const request = {
                    task: this.task
                }
                await taskService.createTask(request);
                this.$router.push({ name: 'tasks-all' });
            }
        }
    }
</script>