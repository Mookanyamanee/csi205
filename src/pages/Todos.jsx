import { useEffect, useRef, useState } from "react";
import { fetchTodo } from "../data/tododata";
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import {Badge, Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { Prev } from "react-bootstrap/esm/PageItem";
const Todos = () => {
    const [todoRaw, setTodoRaw] = useState([])
    const [filteredTodo, setFilteredTodo] = useState([])
    const [onlyWaiting,setOnlyWaiting] = useState(false)
    const [itemPerPage, setItemPerPage] = useState(5)
    const [currentNumpage, setCurrentNumpage] = useState(1)
    const [numpage, setNumpage] = useState(3)
    
    useEffect(()=>{
        setTodoRaw(fetchTodo())
    }, [])
    useEffect(()=>{
        setFilteredTodo(todoRaw)
    },[todoRaw])
    useEffect(() => {
        const totalPage = Math.ceil(filteredTodo.length / itemPerPage)
        setNumpage(totalPage)
        }, [filteredTodo, itemPerPage])

    useEffect(()=>{
        setCurrentNumpage(1)
        if (onlyWaiting == true) {
            const waiting = todoRaw.filter((todo)=>{
            return todo.completed == false
             })
            setFilteredTodo([...waiting])
        }
        else {
            setFilteredTodo([...todoRaw])
        }
        
    },[onlyWaiting])
    
    function waitingClicked(id){
        const selectedTodo = todoRaw.find((todo)=>{
            return todo.id === id
        })
        selectedTodo.completed = true
        setTodoRaw([...todoRaw])
    }
    function deletedClicked(id){
        const remainTodo = todoRaw.filter((todo)=>{
            return todo.id !== id
        })
        setTodoRaw([...remainTodo])
    }
    function saveClicked(id,title){
        console.log(id)
        if (title.trim() !== ""){
            const newTodo = {
                "userId": 1,
                "id": id,
                "title": title,
                "completed": false
            }
            setTodoRaw([...todoRaw, newTodo])
            
        }
        newIdRef.current.value = ""
        newTodoTitleRef.current.value = ""
        handleClose()
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const newTodoTitleRef = useRef()
    const newIdRef = useRef()

    return ( 
        <div className="mx-3">
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add todo</Modal.Title>
            </Modal.Header>



            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ID:&nbsp;</Form.Label>
                <Badge bg="secondary" ref={newIdRef}>{todoRaw.reduce((prev,todo)=>{
                        return (todo.id > prev ? todo.id : prev) +1
                    },-1)}
                </Badge>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    placeholder="New todo, here!!!"
                    autoFocus
                    ref={newTodoTitleRef}
                />
                </Form.Group>
            </Form>
            </Modal.Body>


            <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleClose()}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>saveClicked(Number(newIdRef.current.textContent), newTodoTitleRef.current.value)}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
        <Form>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={(e)=> setOnlyWaiting(e.target.checked)}
                    />
                    Show only &nbsp;<Button variant="warning">waiting <i class="bi bi-clock"></i></Button>
                </div>
                <Form.Select aria-label="Default select example" className="w-25" onChange={ (e) => setItemPerPage(e.target.value)}>

                <option value={5} >5 items per page</option>
                <option value={10}>10 items per page</option>
                <option value={50}>50 items per page</option>
                <option value={100}>100 items per page</option>
                </Form.Select>
            </div>
                
        </Form>
        
        
        <div>
            <Table striped bordered hover className="mt-3">
                <thead className="table-dark">
                    <tr>
                        <th className="text-center" style={{width : "3rem"}}>ID</th>
                        <th className="text-center">Title</th>
                        <th className="text-end" style={{width : "12rem"}}>Completed <Button variant="primary" onClick={()=>handleShow()}><i class="bi bi-plus-lg"></i></Button></th>
                    </tr>
                </thead>
                <tbody>
                    

                    {filteredTodo.filter((todo, index) => {
                        const min = (currentNumpage - 1) * itemPerPage
                        const max = (currentNumpage * itemPerPage) - 1
                        return index >= min && index <= max
                    }).map((eachfilteredTodo)=>{
                        return (
                            <tr>
                                <td className="text-center"><Badge className="bg-secondary">{eachfilteredTodo.id}</Badge></td>
                                <td>{eachfilteredTodo.title}</td>
                                <td className="text-end">
                                          {eachfilteredTodo.completed ? 
                                          (<Badge className="bg-success">done</Badge>)
                                          :( 
                                          <Button variant="warning" onClick={() => waitingClicked(eachfilteredTodo.id)}>waiting <i class="bi bi-clock"></i></Button>)}
                                          &nbsp;
                                        <Button variant="danger" onClick={()=>deletedClicked(eachfilteredTodo.id)}>
                                                    <i class="bi bi-trash"></i>
                                        </Button>
                                </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
        </div>



        <div className="text-center">
            <Button variant="outline-primary" onClick={()=>setCurrentNumpage(1)} disabled={currentNumpage == 1 ? true : false}>First</Button>&nbsp;
            <Button variant="outline-primary" onClick={()=>currentNumpage > 1 && setCurrentNumpage((Prev) => Prev - 1) } disabled={currentNumpage == 1}>Previous</Button>&nbsp;
            {currentNumpage}&nbsp;/&nbsp;{numpage}&nbsp;
            <Button variant="outline-primary" onClick={() =>currentNumpage < numpage &&  setCurrentNumpage((p)=> p+1)} disabled={currentNumpage == numpage ? true : false}>Next</Button>&nbsp;
            <Button variant="outline-primary" onClick={()=>setCurrentNumpage(numpage)} disabled={currentNumpage == numpage}>Last</Button>
        </div>


        </div>
     );
}
 
export default Todos;