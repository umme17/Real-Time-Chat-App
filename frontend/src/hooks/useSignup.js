import React from 'react'

const useSignup = () => {
const [loading,setLoading ] =   useState(false);

const success = handleInputError({fullName,username,password,confirmpassword,gender})
if(!success)return;
}

export default useSignup

function handleInputError({fullName,username,password,confirmpassword,gender}){
    if(!fullName || !username || !password ||  !confirmpassword || !gender){
        
    }
}