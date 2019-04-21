import axios from 'axios'
const host = 'https://www.easy-mock.com/mock/5c8f59eb7810717e99f69674/travel'

export function getSwiper() {
  const url = host + '/swiper'
  return axios.get(url)
}

export function getRecommend() {
  const url = host + '/swiper'
  return axios.get(url)
}

export function getRecord() {
  const url = host + '/index/record'
  return axios.get(url)
}

export function getPhotography() {
  const url = host + '/photography'
  return axios.get(url)
}

export function getBanner() {
  const url = host + '/scenic/banner'
  return axios.get(url)
}