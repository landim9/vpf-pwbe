const express = require('express');
const router = express.Router(); 

const Funcionario = require('./controllers/funcionario');
const Telefone = require('./controllers/telefone');
const Veiculo = require('./controllers/veiculo');
const Manutencao = require('./controllers/manutencao');

router.get('/', (req, res) => {
    res.json("API Manutenção 1.0");
});

router.post('/funcionarios', Funcionario.addFuncionario);
router.get('/funcionarios', Funcionario.getFuncionarios);
router.get('/funcionarios/:matricula', Funcionario.getFuncionario);
router.put('/funcionarios/:matricula', Funcionario.updateFuncionario);
router.delete('/funcionarios/:matricula', Funcionario.deleteFuncionario);

router.post('/telefones', Telefone.addTelefone);
router.get('/telefones', Telefone.getTelefones);
router.get('/telefones/:matricula', Telefone.getTelefone);
router.put('/telefones/:matricula', Telefone.updateTelefone);
router.delete('/telefones/:matricula', Telefone.deleteTelefone);

router.post('/veiculos', Veiculo.addVeiculo);
router.get('/veiculos', Veiculo.getVeiculos);
router.get('/veiculos/:placa', Veiculo.getVeiculo);
router.put('/veiculos/:placa', Veiculo.updateVeiculo);
router.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

router.post('/manutencoes', Manutencao.addManutencao);
router.get('/manutencoes', Manutencao.getManutencoes);
router.get('/manutencoes/:id', Manutencao.getManutencao);
router.put('/manutencoes/:id', Manutencao.updateManutencao);
router.delete('/manutencoes/:id', Manutencao.deleteManutencao);

module.exports = router;