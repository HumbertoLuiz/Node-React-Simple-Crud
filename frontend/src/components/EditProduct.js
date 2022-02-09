/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            title: title,
            price: price
        });
        history.push("/");
    }

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

    return (
			<div className="container">
            <form onSubmit={ updateProduct }>
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
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
