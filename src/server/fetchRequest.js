const getData = (resource, data) => {
    return fetch(resource)
        .then(res => res.json())
        .then(res => {
            data(res)
        })
}

module.exports = getData;