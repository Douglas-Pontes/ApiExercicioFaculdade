const Cidade = require('./controllers/Cidade')

const router = require("express").Router()

router.get('/cidades', Cidade.getCidades);
router.post('/cidades/byEstadoIcms', Cidade.getCidadesByEstadoIcms);

module.exports = router;