// import axios from 'axios'
import { datanews } from './news.urls'

const createDataNewsQuery = (name) => {
    return 'senator%20' + name.first + '%20' + name.last
}

export const getDataNews = (name) => {
    const queryUrl = datanews + createDataNewsQuery(name)
    console.log(queryUrl)
    // return axios.get(queryUrl, { headers: { "x-api-key": "0ia81uffvokg8t5di8x9pw20x"}})
    //     .then(response => {
    //         return response.hits
    //     })

    const myHeaders = new Headers({ "x-api-key": "0ia81uffvokg8t5di8x9pw20x" })

    const myRequest = new Request(queryUrl, {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    })

    fetch(myRequest)
        .then(response => { return response.hits })
}


