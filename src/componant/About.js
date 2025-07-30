import React, { useState } from 'react';

export default function BkashPaymentForm() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        amount: '',
        trxid: '',
        notes: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/submit-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success) {
                setStatus('✅ Payment info submitted successfully!');
                setForm({ name: '', phone: '', amount: '', trxid: '', notes: '' });
            } else {
                setStatus('❌ Failed to submit payment info.');
            }
        } catch (error) {
            setStatus('❌ Error submitting form.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
            <h2>Pay with bKash</h2>
            <p>Send money to: <strong>01878339819</strong></p>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} />
                <input type="number" name="amount" placeholder="Amount (৳)" required value={form.amount} onChange={handleChange} />
                <input type="text" name="trxid" placeholder="bKash Transaction ID" required value={form.trxid} onChange={handleChange} /><br/>
                <select name="cars" id="cars">
                    <option name="bkash" required value={form.bkash} onChange={handleChange} >Bkash</option>
                    <option name="nagad" required value={form.nagad} onChange={handleChange}>Nagad</option>
                </select><br/>
                <textarea name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange}></textarea>
                <button type="submit" style={{ backgroundColor: '#E2136E', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px' }}>
                    Submit
                </button>
            </form>
            {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
        </div>
    );
}

