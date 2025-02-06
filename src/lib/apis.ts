import axios from '@/lib/axios'

export const testApi = () => {
    return axios.get(`/test`).then(res => res.data)
}
