import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export const List = () => {
  const [list, setlist] = useState([]);
  const URL = 'http://localhost:4000';

  const fetchlist = async () => {
    try {
      const response = await axios.get(`${URL}/api/food/list`);
      setlist(response.data);
    } catch (error) {
      toast.error("No data to show");
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  const deleteitem = async (id) => {
    try {
      const response = await axios.post(`${URL}/api/food/remove`, { id });
      await fetchlist();
      if (response.data.success) {
        toast.success("Item deleted");
      }
    } catch (error) {
      toast.error("Could not delete data");
    }
  };

  return (
    <div className='list-add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          const imageUrl = item.image ? `${URL}/images/${item.image}` : 'default-image-path.jpg';
          return (
            <div key={index} className="list-table-format">
              <img
                src={imageUrl}
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className='cursor' onClick={() => deleteitem(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};