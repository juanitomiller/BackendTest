const subscribe = (req, res) => {
    const { email } = req.body;
    // Lógica para suscribir el email al newsletter
    res.status(200).send({ message: 'Suscripción exitosa' });
};

module.exports = {
    subscribe,
};
