import React,{useState,useEffect} from "react";
import axios from "axios";

const STUDENT_MARKS_SERVICE_URL = "http://localhost:8181/student-api/getStudentMarks";
// const FAKE_URL = "https://jsonplaceholder.typicode.com/todos";

function FetchStudentMarks() {
    const [marks,setMarks] = useState([]);
    const [studentId,setStudentId] = useState(0);
    
    useEffect(()=>{

        displayMarks();
              
    },[]);

    async function displayMarks(){
        setStudentId(102)
        const result=  axios.get(STUDENT_MARKS_SERVICE_URL);
        console.log("data",(await products).data);
        let d1=(await products).data
        setProducts(d1);
    }

    // async function getAllProducts(url){
    //     try {
    //         // let data = await fetch(url);
    //         // console.log("data",data);
    //         // let d1 = await data.json();
    //         // console.log("d1 obj",d1);

    //         fetch(url)        
    //         .then(async response => await response.json())        
    //         .then(data => setProducts(data));
    //         // // setProducts(data.json()); 
            
    //     } catch (error) {
    //         console.log("error",error);
    //     }
        
    // }
    console.log("products",products);


    return (
        <div>
           Print this page. 
           {products.map(data => {
                let {
                    id,name,category,price 
                }=data;

                return <div key={id}>
                    <ul>
                        <li>id:{id}</li>
                        <li>name:{name}</li>
                        <li>category:{category}</li>
                        <li>price:{price}</li>
                    </ul>
                        
                     </div>
           })}
           
        </div>
    )
}

export default FetchProducts;