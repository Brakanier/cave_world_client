import axios from '@/plugins/axios'

const setNickname = (nickname) => {
    return axios.get('/nickname', {params: {
        nickname: nickname
    }})
}

export {setNickname}