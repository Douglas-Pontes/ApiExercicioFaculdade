const sql = require("mssql")

class Cidade {
  getCidades(req, res){
    try {
      const rq = new sql.Request()
      rq.query('SELECT * FROM Cidades', (error, result) => {
        if(!error)
          res.status(200).send(result.recordsets[0]);
        else
          res.status(404).send(error);
      });
    } catch (error) {
      res.status(404).send(error);
    }
  }
  getCidadesByEstadoIcms(req, res){
    try {
      const { estado = null, perDesIcms = null } = req.body;

      const rq = new sql.Request()
      rq.input('estado', sql.VarChar, estado);
      rq.input('perDesIcms', sql.VarChar, perDesIcms);

      rq.query("SELECT * FROM Cidades WHERE EstCid LIKE '%'+@estado+'%' AND PerDesIcms >= @perDesIcms ", (error, result) => {
        if(!error)
          res.status(200).send(result.recordsets[0]);
        else
          res.status(404).send(error);
      });
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

module.exports = new Cidade();