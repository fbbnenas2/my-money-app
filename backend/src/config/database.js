const mongoose = require('mongoose')
//retira a mensagem de WARN pela API de Promise do mongoose estar depreciada
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o valor mínimo '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o valor máximo '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."