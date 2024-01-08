const mongoose=require("mongoose")

main().then(console.log("connect to the data base")).catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb+srv://97jamali:12345Product@cluster0.2caenax.mongodb.net/')
}