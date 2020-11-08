const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
     await saveOrphanage(db, {
        lat: "-2.529707",
        lng: "-44.2843786",
        name: "Lar das Meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "981939112",
        images: [
            "https://images.unsplash.com/photo-1603138461809-50ff754bc5ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        hours: "Horarios de Visitas Das 18h até 8h",
        open_on_weekends: "0",
    }) 
     
    //inserir
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
     console.log(selectedOrphanages)

     consultar
     const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
     console.log(orphanage)
     
     //delete
     //await db.run("DELETE FROM orphanages WHERE id ='7'")
})