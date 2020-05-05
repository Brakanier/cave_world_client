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

const find_enemies = () => {
    return axios.get('/find')
}

const attack = (id) => {
    return axios.get(`/attack/${id}`)
}

const battles = () => {
    return axios.get('/battles')
}

export {
    getData,
    extract,
    build,
    citizen,
    find_enemies,
    attack,
    battles
  };