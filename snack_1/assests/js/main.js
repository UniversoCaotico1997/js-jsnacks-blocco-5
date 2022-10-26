// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const catalogoZucchine = [
    {
        varietà:`zucchinaNera`,
        peso:20,
        lunghezza: 30
    },
    {
        varietà:`zucchinaBianca`,
        peso:15,
        lunghezza: 30
    },
    {
        varietà:`zucchinaGialla`,
        peso:25,
        lunghezza: 30
    },
    {
        varietà:`zucchinaVerde`,
        peso:30,
        lunghezza: 30
    },
    {
        varietà:`zucchinaRossa`,
        peso:17,
        lunghezza: 30
    },
    {
        varietà:`zucchinaArancione`,
        peso:29,
        lunghezza: 30
    },
    {
        varietà:`zucchinaBlu`,
        peso:20,
        lunghezza: 30
    },
    {
        varietà:`zucchinaNera`,
        peso:22,
        lunghezza: 30
    },
    {
        varietà:`zucchinaViola`,
        peso:12,
        lunghezza: 30
    },
    {
        varietà:`zucchinaSmeraldo`,
        peso:33,
        lunghezza: 30
    },
]
// let somma = 0 

// catalogoZucchine.forEach((zucchina)=>{
//     console.log(zucchina.peso);
//     somma += zucchina.peso
// })

function sommaPeso(catalogoZucchine) {
    let somma = 0 
 catalogoZucchine.forEach((zucchina)=>{
    console.log(zucchina.peso);
    somma += zucchina.peso
})   
}

