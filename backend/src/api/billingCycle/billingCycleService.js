const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
/*Esta configuração determina que quando usado o put, irá retornar com o valor do objeto atualizado
o runValidators nos diz que irá passar pelas validações. */
BillingCycle.updateOptions({new: true, runValidators: true})
//Cria um método que será executado após a chamada dos métodos verbosos do HTTP
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }
        else{
            res.json({value})
        }
    })
})

    BillingCycle.route('summary', (req, res, next) => {
        //Definindo funções de agregações do banco de dados MongoDB
        BillingCycle.aggregate({
            //método de agregação utilizando projeção
            //após a agregação ele irá projetar uma nova variável - credit
            $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
        }, {
            //irá agrupar os valores projetados em um critério
            //_id: null deixa implicito que não uilizará nenhum critério, ou seja, vai agrupar todos os registros
            //a nova varíavel 'credit' não é a mesma no $project, aqui é gerada uma nova com a soma dos valores de credit do $project
            $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
        }, {
            //neste passo a projeção faz com que seja exibido credito e debito
            $project: {_id: 0, credit: 1, debt: 1 }
        }, (error, result) => {
            if(error){
                res.status(500).json({errors: [error]})
            }
            else{
                //como não utilizou critério para agregação, haverá apenas um resultado... result[0] primeiro indice
                //caso o resultado for nulo... retorne um novo objeto com os valores de 'credit' e 'debt' como 0
                res.json(result[0] || {credit:0, debt:0})
            }
        })
    })

module.exports = BillingCycle