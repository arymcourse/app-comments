import './App.css'
import Comments from './components/comment/Comments'
import AddCommentForm from './components/forms/AddCommentForm'

function App() {

  return (
    <section
      className='w-full h-full max-w-3xl m-auto flex flex-col gap-10 my-24'
    >
      <Comments />
      <AddCommentForm />
    </section>
  )
}

export default App
