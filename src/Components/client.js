import * as contentful from 'contentful'

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export default client