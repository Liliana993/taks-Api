const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        completed:{
            type: Boolean,
        }

},
{
    timestamps: true,
}
);

const ModelTodo = mongoose.model('todos', todoSchema);
module.exports = ModelTodo;