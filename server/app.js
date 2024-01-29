import mongoose from 'mongoose';
import espress from 'express';

const app = espress();

//conexion a la base de BDD
try {
  await mongoose.connect('mongodb+srv://perezyenice:xVrnoKCVRND4yJTu@cluster47300ap.gehcely.mongodb.net/portafolio?retryWrites=true&w=majority&appName=AtlasApp');
  console.log('BDD conectado')
} catch(error) {
 console.log(error.message);
}

app.get('/', (req, res) => {

})

app.listen(8081, () => console.log('server run'))

export default app;