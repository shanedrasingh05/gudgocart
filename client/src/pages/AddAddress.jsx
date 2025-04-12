import React, { useState } from 'react'
import { assets } from '../assets/assets'

// Input field  component
const InputField = ({type,placeholder,name, handleChange, address })=>(
    <input className='w-full px-3 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary'
    type ={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
     />
)



const AddAddress = () => {


    const [address, setAddress] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setAddress((prevAddress)=>({
            ...prevAddress, [name]: value}))
    }



    const onSubmitHandler= async (e)=>{
        e.preventDefault();
    }

  return (
    <div className='mt-24 pb-16 '>
        <p className='text-2xl md:text-3xl text-gray-500 '>Add Shipping <span 
        className='font-semibold text-primary'>Address</span> </p>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-3'>
            <div className='flex-1 max-w-md'>
                <form onSubmit={onSubmitHandler} className='space-y-3 mt-2 text-sm'>
                    <div className='grid grid-cols-2 gap-4'>

                        <InputField handleChange={handleChange} address={address} name="firstName" placeholder="First Name" type="text" />

                        <InputField handleChange={handleChange} address={address} name="lastName" placeholder="Last Name" type="text" />
                    </div>

                    <InputField handleChange={handleChange} address={address} name="email" placeholder="Email address" type="email" />

                    <InputField handleChange={handleChange} address={address} name="street" placeholder="Street address" type="text" />
                    
                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} address={address} name="city" placeholder="City" type="text" />

                        <InputField handleChange={handleChange} address={address} name="state" placeholder="State" type="text" />
                    </div>

                     <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} address={address} name="zipcode" placeholder="Zip-code" type="number" />

                        <InputField handleChange={handleChange} address={address} name="country" placeholder="Country" type="text" />
                    </div>

                        <InputField handleChange={handleChange} address={address} name="phone" placeholder="Phone " type="text" />

                        <button className='w-full mt-3 bg-primary text-white py-3 rounded-full hover:bg-primary-dull transition cursor-pointer uppercase'>
                            Save Address
                        </button>
                                            

                </form>

            </div>
            <img src={assets.add_address_iamge} alt="Add Address" 
            className='md:mr-16 mb-16 md:mt-0'/>

        </div>
      
    </div>
  )
}

export default AddAddress
