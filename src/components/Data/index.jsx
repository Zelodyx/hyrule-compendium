import { useState } from "react"
import CategoriesList from "./List"
import Swal from "sweetalert2"
import InfoExpo from "../InfoExpo"



const Data = ({categories = [], setCategories}) =>{

    const [inputValue, setInputValue]= useState("")

        const handleInput = ({target})=>{
            setInputValue(target.value)
        }

        const handleAddCategoryButtom=()=>{
            if(!categories.includes(inputValue)){
                setCategories([inputValue, ...categories])
                setInputValue("")
            }
        }

        const clearList = async () =>{
            const result = await Swal.fire({
                title:"Clear the List?",
                text:"You won't be able to revert this!",
                icon:"warning",
                showCancelButton:true,
                confirmButtonText:"Yes, clear it!",
            });
    
            if(result.isConfirmed){
                localStorage.setItem("categories", JSON.stringify([]))
                setCategories([]);
            }
        }

        

    return(
        <>
        <input 
        className="fw-lighter"
        onChange={(e)=> handleInput(e)}
        placeholder="Write Category Name"
        type="text"
        value={inputValue}
        />
        <button
        className="btn btn-primary btn-sm ms-2 mb-1 fw-lighter"
        onClick={handleAddCategoryButtom}
        type="button"
        >
        Add
        </button>
        <button
        className="btn btn-danger btn-sm ms-2 mb-1 fw-lighter"
        onClick={clearList}
        type="button"
        >
        Delete All Categories
        </button>
        <br />
        <CategoriesList
        categories={categories}
        setCategories={setCategories}
        />
        <InfoExpo
        categories={categories} 
        />
        <hr />
        <br />

        </>
    )
}

export default Data