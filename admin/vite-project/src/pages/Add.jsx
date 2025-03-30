import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'

export const Add = () => {

  const [image, setimage] = useState(false);
  const [data,setdata] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const URL = "http://localhost:4000";
  const onSubmithandle =  async (e) =>{
    try{
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description); 
      formData.append("price", data.price);
      formData.append("category", data.category); 
      if (image) {
        formData.append("image", image);
      }
      const response= await axios.post(`${URL}/api/food/add`,formData);
      setdata({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setimage(false);
      console.log("Data Added")
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmithandle}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label>
            {/* <img src={image ?  URL.createObjectURL(image) :assests.upload_area} alt="" /> */}
          </label>
          <input type='file' id='image'  onChange={(e) =>setimage(e.target.files[0])}/>
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input type="text" name="name" placeholder='type name here'  onChange={(e) =>setdata({...data, name:e.target.value})}/>
        </div>
        <div className="add-product-description flex-col">
          <p> Product Description</p>
          <textarea name="description" rows="6" placeholder='Write content here' required onChange={(e) =>setdata({...data, description:e.target.value})}></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category"
            onChange={(e)=>setdata({ ...data, category:e.target.value})}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Noodles">Noodles</option>
              <option value="Cake">Cake</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input type="number" placeholder='$20' onChange={(e) =>setdata({...data, price:e.target.value})} />
          </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>
      </form>
    </div>
  )
}
