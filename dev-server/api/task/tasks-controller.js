export function index(req, res) {
    // FIND ALL TASKS
    return res.status(200).json();
}

export function create(req, res) {
    // CREATE TASK
    return res.status(201).json();
}

export function update(req, res) {
    // UPDATE TASK
    return res.status(204).json();
}

export function remove(req, res) {
    // DELETE A TASK
    return res.status(204).json();
}

export function show(req, res) {
    // GET TASK BY ID
    return res.status(200).json();
}