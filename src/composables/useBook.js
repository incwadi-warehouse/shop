import { onMounted, reactive } from '@vue/composition-api'
import { request } from '@/api'

export default function useBook(book_id) {
  const state = reactive({
    book: false,
  })

  const fetchBook = () => {
    return request('get', '/api/public/book/' + book_id).then((response) => {
      state.book = response.data
    })
  }

  onMounted(fetchBook)

  return {
    state,
  }
}
