import axios from 'axios'

function checkRegist(phone){
    return new Promise((resolve, reject)=>{
        axios.get('http://182.92.170.161:8080/shop/user/register_look', {
            params: {
                u_phone: phone
            }
        }).then((res)=>{

            resolve(res.data);

        }).catch((err)=>{

            reject(err)

        })
    })
    
}

export {
    checkRegist,
}