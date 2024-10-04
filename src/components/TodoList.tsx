import TodoItem from './TodoItem'
import { Todo } from '../types/todos'

interface TodoLisProps {
  todos: Todo[]
  onCompletedChange: (id: number, completed: boolean) => void
  onDelete: (id: number) => void
}

export default function TodoList({
  todos,
  onCompletedChange,
  onDelete,
}: TodoLisProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id
    }
    return a.completed ? 1 : -1
  })

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          There isn't Todo, Please add a new Todo
        </p>
      )}
    </>
  )
}
