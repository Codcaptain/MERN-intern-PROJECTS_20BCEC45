import React ,{useState} from "react";

import './product-form.css';
const ProductForm=(props)=>{
    // const[productName,setProductName]=useState('');
    // const[productPrice,setProductPrice]=useState('');
    // const[productImage,setProductImage]=useState('');
    // const[productCond,setProductCond]=useState('');
    const [formInput,setFormInput]=useState({
       
        productName:'',
        productPrice:'',
        productImage:'',
        productConductedBy:''
    })
    const productNameHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productName:event.target.value
            }
            
        });
    }
    const productPriceHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productPrice:event.target.value
            }
        });
    }
    const productImageHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productImage:event.target.value
            }
        });
    }
    const productConductedByHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productConductedBy:event.target.value
            }
        });
        
    }
    const formSubmitHandler=(event)=>{
        let error=''
        if(formInput.productName==''&&error==''){
            error='Please enter Product Name';
            console.log(error);
        }
        console.log(formInput);
        props.onProductAdded(formInput);
        event.preventDefault();
    }
    return(
        <div className="form-container">
        <h1>Add Products</h1>
        <form onSubmit={formSubmitHandler}>
            <div className="form-input">
                <input type="text" placeholder="Product Name" onChange={productNameHandler}/>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Product Price" onChange={productPriceHandler}/>
            </div>
            <div className="clearfix"></div>
            <div className="form-input">
                <input type="text" placeholder="Product Image" onChange={productImageHandler}/>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Product conducted by" onChange={productConductedByHandler}/>
            </div>
            <div className="clearfix"></div>
            <div className="form-input">
                <button className="add_to_cart">Add to cart</button>
            </div>
            
            <div className="clearfix"></div>
        </form>
        </div>
    )
}
export default ProductForm;