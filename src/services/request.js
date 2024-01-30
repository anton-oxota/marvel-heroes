async function request(url, method = "GET", body = null, headers = { "Content-type": "application/json" }) {
    const response = await fetch(url, { method, body, headers })

    try {
        if (!response.ok) {
            throw new Error('Fetch fail')
        }

        const data = response.json();
        return data
    } catch (error) {
        throw error
    }
}

export default request