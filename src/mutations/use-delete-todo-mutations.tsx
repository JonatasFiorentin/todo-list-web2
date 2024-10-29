import { deleteDoc, doc } from 'firebase/firestore'
import { LIST_TODOS_QUERY_KEY } from '../queries/list-todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { firestore } from '../services/firebase'

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deleteTodo'],
    mutationFn: async (id: string) => {
      const todoDocRef = doc(firestore, 'Todos', id)
      await deleteDoc(todoDocRef)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: LIST_TODOS_QUERY_KEY })
    },
  })
}
