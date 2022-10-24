// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const catalogoZucchine = [
    {
        varietà:`zucchinaNera`,
        peso:20,
        lunghezza: 20
    },
    {
        varietà:`zucchinaBianca`,
        peso:15,
        lunghezza: 10
    },
    {
        varietà:`zucchinaGialla`,
        peso:25,
        lunghezza: 12
    },
    {
        varietà:`zucchinaVerde`,
        peso:30,
        lunghezza: 18
    },
    {
        varietà:`zucchinaRossa`,
        peso:17,
        lunghezza: 11
    },
    {
        varietà:`zucchinaArancione`,
        peso:29,
        lunghezza: 8
    },
    {
        varietà:`zucchinaBlu`,
        peso:20,
        lunghezza: 5
    },
    {
        varietà:`zucchinaNera`,
        peso:22,
        lunghezza: 10
    },
    {
        varietà:`zucchinaViola`,
        peso:12,
        lunghezza: 4
    },
    {
        varietà:`zucchinaSmeraldo`,
        peso:33,
        lunghezza: 2
    },
]

const zucchinaCorta = catalogoZucchine.filter((zucchina)=>{
    if (zucchina.lunghezza <= 15 ) {
        return true
    }
});
console.log(zucchinaCorta);

const zucchinaLunga = catalogoZucchine.filter((zucchina)=>{
    if (zucchina.lunghezza >= 15) {
        return true
    }
});
console.log(zucchinaLunga);