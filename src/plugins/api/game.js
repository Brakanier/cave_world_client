import axios from '@/plugins/axios'

const getData = () => {
    return axios.get('/data')
}

const extract = (target) => {
    return axios.get(`/extract/${target}`)
}

const build = (target) => {
    return axios.get(`/build/${target}`)
}

const citizen = (target, amount) => {
    return axios.get(`/citizen/${target}/${amount}`)
}

export {
    getData,
    extract,
    build,
    citizen
  };