import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
  const[title, setTitle]  = useState("");
  const[desc, setDesc]  = useState("");

  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title and description cannot be empty")
    }
      else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
    }
    }
  

    return (
        <div className="container my-5">
            <h3 className="my-4"> Add a Todo</h3>
            <form onSubmit={submit}>
  <div class="mb-3">
  <label htmlFor="title" className="form-label text-primary">Todo Title:</label>
    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
  <label htmlFor="desc" className="form-label text-primary">Todo Description:</label>
    <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)}class="form-control" id="exampleInputPassword1"/>
  </div>

  
  <button type="submit" class="btn btn-sm btn-primary text-white border">Add Todo</button>
</form>

        </div>
    )
}
