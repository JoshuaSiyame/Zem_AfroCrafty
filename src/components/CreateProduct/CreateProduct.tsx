import React, { useEffect } from "react";
import "./CreateProduct.css";

// import image sample for preview
// import II from "./hand_bag_1.png";

const CreateProduct = () => {

  // prevent default form behavior
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  // handle file upload click event
  const handleFileUploadBtn = () => {
    // get element by id
    const uploadBtn: any = document.getElementById("item-img-field");
    uploadBtn.click();

    handleFileUploaded();
  };

  // collect the file uploaded
  const handleFileUploaded = () => {
    const fileInput: any = document.getElementById("item-img-field");
    const previewElement: any = document.getElementById("img-preview");

    // add event listener to file input element
    fileInput.addEventListener("change", async () => {
      previewElement.src = await URL.createObjectURL(fileInput.files[0]);
    });
  }

  // remove the nav element
  const removeMainNav2: any = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");
    if (mainNav2) {
      mainNav2.style.display = "none";
    }
  };

  useEffect(()=>{
    removeMainNav2()
  },[]);

  return (
    <div id="add-item">
      <div id="add-item-container">
        <div id="add-item-form-container">
          <h3 id="add-item-header">Add New Item</h3>
          <form id="add-item-form" onSubmit={handleFormSubmit}>
            <div className="form-group-1">
              <label className="label-control">Item Name:</label>
              <input type="text" name="item-name" placeholder="New item full name" className="form-control" />
            </div>
            <div className="form-group-1">
              <label className="label-control">Slug Name:</label>
              <input type="text" name="item-slug-name" placeholder="New item slug full name" className="form-control" />
            </div>
            <div className="form-group-2">
              <div className="form-group-1">
                <label className="label-control">Categories</label>
                <select name="item-category" className="form-control">
                  <option value="accessories">Accessories</option>
                  <option value="bags">Bags</option>
                  <option value="miniBags">Mini-Bags</option>
                  <option value="Jewelries">Jewelries</option>
                  <option value="sandals">Sandals</option>
                  <option value="saloon">Saloon</option>
                </select>
              </div>
              <div className="form-group-1">
                <label className="label-control">Sex</label>
                <select name="item-sex-category" className="form-control">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
            </div>
            <div className="form-group-2">
              <div className="form-group-1">
                <label className="label-control" id="image-preview-header"><small>Item Image Preview</small></label>
                <img src="" alt="" className="img-preview" id="img-preview" />
              </div>
              <div className="form-group-1">
                <button className="form-control" id="item-img-button" onClick={handleFileUploadBtn}>Select Item Image</button>
                <input type="file" className="form-control" id="item-img-field" hidden />
              </div>
            </div>
            <div className="form-group-1">
              <textarea name="itemDescription" className="form-control" rows={5} placeholder="New item description ..." />
            </div>
            <div className="form-group-1">
              <input type="submit" className="primary-btn" value="Save & Add Item" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;