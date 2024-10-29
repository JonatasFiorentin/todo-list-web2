import { addDoc, collection } from 'firebase/firestore'
import { LIST_TODOS_QUERY_KEY } from '../queries/list-todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Todo } from '../models/todo-schema'
import { firestore } from '../services/firebase'

export function useCreateTodoMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['createTodo'],
    mutationFn: (values: Todo) =>
      addDoc(collection(firestore, 'Todos'), values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: LIST_TODOS_QUERY_KEY })
    },
  })
}
