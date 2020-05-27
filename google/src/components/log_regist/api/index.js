import axios from 'axios'

// 检查是否注册
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

// 发送验证码
async function sendCaptcha(phone_num) {
    try {
        let captcha_info = await axios.get(
            'http://182.92.170.161:8080/shop/user/authcode_get',
            {
                    params: {
                    u_phone: phone_num
                }
            }
        )
    
        return captcha_info;
    }
    catch(error) {
        return(error)
    }
    
}

// 验证码登录注册
async function captchaRegist(regist_state, log_info, regist_info) {
    try {
        if(!regist_state) {
            // 验证码注册
            let regist_result = await axios.get(
                'http://182.92.170.161:8080/shop/user/authcode_register',
                {
                    params: {
                        u_phone: regist_info.phone,
                        authcode: regist_info.captcha,
                        time: regist_info.time,
                        md5: regist_info.md5,
                        u_type: regist_info.type
                    }
                }
            )

            return regist_result;
            
        }
        else {
            // 验证码登录
            let log_result = await axios.get(
                'http://182.92.170.161:8080/shop/user/authcode_login',
                {
                    params: {
                        u_phone: log_info.phone,
                        authcode: log_info.captcha,
                        time: log_info.time,
                        md5: log_info.md5,
                    }
                }
            )

            return log_result;
        }
        

    }
    catch(error) {

    }
}

export {
    checkRegist,
    sendCaptcha,
    captchaRegist
}