import { useEffect, useState } from "react";
import './index.css'

const InfoExpo = ({categories}) =>{
    const [imageList, setImageList] = useState([])

    
useEffect(
    ()=>{
        console.log("Me renderizo")
        const getImageList = async () => {
            
            const entries = await Promise.all(categories.map(async(category) => {
    
            const query = encodeURIComponent(category)
            const response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${query}`)

            const imageList = await response.json()
            return imageList


            
        }))
        let urlList = []
        entries.forEach((image)=>{
            const data = image.data.map((item)=>{
                return item
            })
            urlList = [...urlList, ...data] 
        })
        setImageList([...urlList])
        
        }
        getImageList()
    },
    [categories]

    )


    return(
        <>
            <h4 className="fw-lighter">Database</h4>
                {
                imageList.map((item)=>(
                    <div>
                    <table className="table border border-dark text-start">
                    <tr>
                        <th className="col-1 bg-light text-center fw-lighter">#</th>
                        <th className="col-1 bg-light fw-lighter">Image</th>
                        <th className="col-1 bg-light fw-lighter">Name</th>
                        <th className="col-1 bg-light fw-lighter">Category</th>
                        <th className="col-8 bg-light fw-lighter">Description</th>
                    </tr>
                    <tr>
                        <td className="col-1 text-light bg-dark text-center fw-lighter">{item.id}</td>
                        <td className="col-1 text-light bg-dark"><img 
                        key={item.image} 
                        src={item.image} 
                        id="circle"
                        /></td>
                        <td className="col-1 text-light bg-dark fw-lighter"><p>{item.name}</p></td>
                        <td className="col-1 text-light bg-dark fw-lighter"><p>{item.category}</p></td>
                        <td className="col-8 text-light bg-dark fw-lighter"><p>{item.description}</p></td>
                    </tr>
                    </table>
                    </div>
                    
                ))
                }   



        </>
        
    )

}

export default InfoExpo
