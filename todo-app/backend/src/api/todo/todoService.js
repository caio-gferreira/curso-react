const Todo = require('./todo');

Todo.methods([
    'get', 
    'post',
    'put',
    'delete'
])

Todo.uptadeOptions({
    new: true,
    runValidators: true
})

module.exports = Todo