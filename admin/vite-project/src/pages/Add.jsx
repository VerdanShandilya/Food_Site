import React, { useState } from 'react';
import './Add.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const Add = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const URL = "http://localhost:4000";

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("category", data.category);
      if (image) {
        formData.append("image", image);
      }

      await axios.post(`${URL}/api/food/add`, formData);

      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      });
      setImage(null);
      toast.success("Data added successfully");
    } catch (error) {
      toast.error("Could not add data");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandle}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <input type='file' id='image' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input type="text" name="name" placeholder='Type name here' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" rows="6" placeholder='Write content here' value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })}></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Noodles">Noodles</option>
              <option value="Pasta">Pasta</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input type="number" placeholder='$20' value={data.price} onChange={(e) => setData({ ...data, price: e.target.value })} />
          </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>
      </form>
    </div>
  );
};
