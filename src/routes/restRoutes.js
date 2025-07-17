const routes = (app) => {
    app.route('/contact')
        .get((req, res) => {
            res.send('GET request successfully');
        })

        .post((req, res) => {
            res.send('POST request successfully');
        })

    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send('PUT request successfully');
        })

        .delete((req, res) => {
            res.send('DELETE request successfully');
        })
}

export default routes;