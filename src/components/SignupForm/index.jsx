import { useState } from "react";

const SignupForm = () => {
        const [name, setName] = useState('');
        const [age, setAge] = useState('');
        const [address, setAddress] = useState('');
        const [zipcode, setZipcode] = useState('');
        const [phone, setPhone] = useState('');
        const handleClearClick = () => {
           setName('');
           setAge('');
           setAddress('');
           setZipcode('');
           setPhone('');
        }
        const handleFormSubmit = (evt) => {
            evt.preventDefault();
            console.log('submit',{
                name,
                age,
                address,
                zipcode,
                phone
            });
        }

    return (
       <form onSubmit={handleFormSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={(evt) => setName(evt.target.value)}/>
            </label>
            <br />
            <label>
                Age:
                <input type="number" name="age"  value={age} onChange={(evt) => setAge(evt.target.value)} />
            </label>
            <br />
            <label>
                Address:
                <input type="address:" name="email" value={address} onChange={(evt) => setAddress(evt.target.value)}/>
            </label>
            <br />
            <label>
                Zipcode:
                <input type="number" name="zipcode" value={zipcode} onChange={(evt) => setZipcode(evt.target.value)} required/>
            </label>
            <br />
            <label>
                Phone:
                <input type="phone" name="password"  value={phone} onChange={(evt) => setPhone(evt.target.value)} required/>
            </label>
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>

       </form>
    );

}

export default SignupForm;