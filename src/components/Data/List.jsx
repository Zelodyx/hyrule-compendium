const CategoriesList = ({categories = [], setCategories}) =>{
    const deleteCategory = (category) => {
      const newList = categories.filter((cat)=>cat !== category)
      setCategories(newList)
    }  
    return(
          <ol>
          {
              categories.map((category)=>(
            <li className="fw-lighter" onClick={()=>deleteCategory(category)} key={category}>
              {category}
            </li>
          ))
          }
          </ol>
      )
  }
  
  export default CategoriesList