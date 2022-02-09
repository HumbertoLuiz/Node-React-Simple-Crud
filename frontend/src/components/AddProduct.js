import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';


const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title: title,
            price: price
        });
        history.push("/");
    }

    return (
			<div className="container">
            <form onSubmit={ saveProduct }>

                <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />


                <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
								</div>
                </div>

								<br></br>
                <div className="field">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
