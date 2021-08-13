import Layout from '../../components/layout'
import {useState} from 'react'

export default function UserTasks()
{
    const [userInput, setUserInput] = useState("")

    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setTodoList([
            userInput,
            ...todoList
        ])

        setUserInput("")
    }

    const handleDelete = (todo) => {
        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        setTodoList(updatedArr)
    }

    return(
        <div>
            
            <h3>FocusTask Next</h3>
            <form>
                <input value={userInput} className="transform hover:bg-blue-400" type="text" onChange={handleChange}/>
                    <button onClick={handleSubmit}>Submit</button>
            </form>

            <ul>
                {
                    todoList.length >= 1 ? todoList.map((todo, index) => {
                        return <li key={index}>{todo}<button onClick={(e) => {
                            e.preventDefault()
                            handleDelete(todo)
                        }}>Delete</button></li>
                    })
                    : "Enter a todo item"
                }
            </ul>
        </div>
    )
}