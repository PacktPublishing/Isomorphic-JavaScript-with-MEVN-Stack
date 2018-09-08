import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    body: String,
    dueDate: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
taskSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('task', taskSchema);