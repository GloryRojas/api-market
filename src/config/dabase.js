const mongoose = require('mongoose');

const user = 'aldair3000';
const pass = 'aldair3000';


mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-lpsd0.mongodb.net/apiMarket?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(db => console.log('Conexion exitosa a la bd'))
.catch(err => console.error(`no se conecto ${err}`))
