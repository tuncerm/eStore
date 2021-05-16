import React, { useState } from 'react';

import Table, {TableHeader, TableRow} from '../shared/UIElements/Table';
import Input from '../shared/UIElements/Input';

import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';

import './AdminCategories.css';
import Uploader from '../shared/component/uploader';
import Button from '../shared/UIElements/Button';

const AdminCategories = () => {
  const DUMMYDATA = [
    {name:"Cat0", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat1", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat2", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat3", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat4", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat5", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat6", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat7", details:"It is a cat.", image:"cat_image.png"}
  ];
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);
  const [categories, setCategories] = useState(DUMMYDATA);
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      details: {
        value: '',
        isValid: false
      },
      image: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const createCategory = async event => {
    event.preventDefault();
    try{
      const formData = new FormData();
      formData.append('name', formState.inputs.name.value);
      formData.append('details', formState.inputs.details.value);
      formData.append('image', formState.inputs.image.value);
      // await sendRequest(`${process.env.REACT_APP_API_URL}/admin/category`, 'POST', formData, {Authorization: 'Bearer ' + auth.token});
      // history.push('/');
    } catch {}
  };

  const editCategory = async event => {};

  const saveCategory = async event => {};

  const deleteCategory = async (categoryID) => {
    try {
      //
      setCategories(cats=>cats.filter((c, i)=>i !== categoryID));
    } catch {
      
    }
     console.log(categoryID);
  };

  const toggleNewCategory = () => {
    setShowNewCategoryForm(c => !c);
  }

  return (
    <div className="admin-categories">
      <p>The Categories</p>
      <Table
        isStriped
        isDark
        header={<TableHeader th={[
          "Title", 
          "Description", 
          "Image", 
          <>Action <Button size='sm' mode='info' onClick={toggleNewCategory}>New</Button></>
        ]}/>} 
        rows={categories.map((v, i)=><TableRow key={i} td={[
          v.name,
          v.details,
          v.image, 
          <>
            <Button size='sm' mode='warning' onClick={()=>{editCategory(i)}}>Edit</Button>
            <Button size='sm' mode='danger' onClick={()=>{deleteCategory(i)}}>Delete</Button>
          </>
        ]}/>)}
      />
    </div>
  )
};

export default AdminCategories;

{/* 
<form className="admin-categories-new" onSubmit={createCategory}>
<Input
    id="name"
    element="input"
    type="text"
    label="Category Name"
    validators={[]}
    errorText="Please enter a valid title."
    onInput={inputHandler}
  />
  <input name="details" onInput={inputHandler} type="text" placeholder="Description"/>
  <input name="image" type="text" placeholder="Upload an image" disabled/>
  <Uploader fileFilter=".jpg,.png,.jpeg" onUploadDone={(vals)=>{console.log(vals)}}  />
  <input type="submit" value="Save"/>
</form> */}