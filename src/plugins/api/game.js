import axios from '@/plugins/axios'

const getData = () => {
    return axios.get('/data')
}

const extract = (target) => {
    return axios.get(`/extract/${target}`)
}

export {
    getData,
    extract
  };