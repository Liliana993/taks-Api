const mongoose = require("mongoose");

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión exitosa a la base de datos!");
    }catch(error){
        console.error("Error en la conexión a la base de datos", error)
        process.exit(1);
    }
};

module.exports = dbConnect;