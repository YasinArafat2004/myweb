import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {
    const location = useLocation();
    const { shoe, image, price } = location.state || {};

    const [formData, setFormData] = useState({
        shoe: shoe || "",
        size: "",
        customerName: "",
        phone: "",
        quantity: 1,
        location: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your WhatsApp number (international format, no + or spaces)
        const whatsappNumber = "8801878339819";

        // Build message
        const message = `🛒 New Order!
        Product: ${formData.shoe}
        Price: ${price}
        Size: ${formData.size}
        Name: ${formData.customerName}
        Number: ${formData.phone}
        Quantity: ${formData.quantity}
        Location: ${formData.location}`;

        // Encode message for URL
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(url, "_blank");
    };

    return (
        <div className="card order">
            <img src={image} alt={shoe} />
            <h2>Price: {price}</h2>

            <form onSubmit={handleSubmit} >
                <input
                    className="input form-control"
                    type="text"
                    name="shoe"
                    value={formData.shoe}
                    readOnly
                />

                <select
                    className="form-select input"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                >
                    <option value="">Shoe Size 👟</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                </select>

                <input
                    className="input form-control"
                    type="text"
                    name="customerName"
                    placeholder="Your Name"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                />

                <input
                    className="input form-control"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    className="input form-control"
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />

                <input
                    className="input form-control"
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />

                <button className="btn mid" type="submit">
                    Order Now
                </button>
            </form>
        </div>
    );
};

export default Order;

