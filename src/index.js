function toLetter (number) {
    const letters = {
        "units" : [
            "zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"
        ],
        
        "dizaines_simples" : [
            "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingts dix"
        ],

        "dizaines_complexes" : [
            "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"
        ],

        "centaines" : ["cent", "cents"]
    }
    //UNITES SEULEMENT
    if(/^[0-9]{1}$/.test(number)) return letters.units[number];
    //DIZAINES SIMPLES
    if(/^[1-9]{1}0$/.test(number)) return letters.dizaines_simples[(number/10)-1];
    //DIZAINES COMPLEXES
    if(/^1[1-9]{1}$/.test(number)) return letters.dizaines_complexes[parseInt((number+'').split('')[1])-1];
    //NOMBRES A DEUX CHIFFRES SIMPLES AVEC 1 A LA FIN
    if(/^[2-68]{1}1$/.test(number)) return letters.dizaines_simples[parseInt((number/10)-1)]+'-et-'+letters.units[1];
    //NOMBRES A DEUX CHIFFRES SIMPLES AVEC AUTRE CHIFFRES QUE 1 A LA FIN
    if(/^[2-68]{1}[2-9]{1}$/.test(number)) return letters.dizaines_simples[parseInt((number/10)-1)]+' '+letters.units[parseInt((number+'').split('')[1])];
    //CAS DE 70 ET 90 AVEC DES UNITES AUTRES QUE 0
    if(/^[79]{1}[1-9]{1}$/.test(number)) return letters.dizaines_simples[parseInt((number/10)-2)]+' '+letters.dizaines_complexes[parseInt((number+'').split('')[1])-1];
    //CENTAINES SIMPLES
    if(/^[1-9]{1}00$/.test(number)) return (parseInt(number/100) === 1) ? letters.centaines[0] : letters.units[parseInt(number/100)]+' '+letters.centaines[1];
    //CENTAINES ET UNITES
    if(/^[1-9]{1}0[1-9]{1}$/.test(number)) return ((parseInt(number/100) === 1) ? letters.centaines[0] : letters.units[parseInt(number/100)]+' '+letters.centaines[1])+' '+letters.units[parseInt((number+'').split('')[2])];
    //CENTAINES ET DIZAINES COMPLEXES
    if(/^[1-9]{1}1[1-9]{1}$/.test(number)) return ((parseInt(number/100) === 1) ? letters.centaines[0] : letters.units[parseInt(number/100)]+' '+letters.centaines[1])+' '+letters.dizaines_complexes[parseInt((number+'').split('')[2])-1];
    //CENTAINES ET DIZAINES SIMPLES
    if(/^[1-9]{1}[1-9]{1}0$/.test(number)) return ((parseInt(number/100) === 1) ? letters.centaines[0] : letters.units[parseInt(number/100)]+' '+letters.centaines[1])+' '+letters.dizaines_simples[parseInt((number+'').split('')[1])-1];
    //CENTAINES AVEC DIZAINES SIMPLES ET 1
    if(/^[1-9]{1}[2-68]{1}1$/.test(number)) return ((parseInt(number/100) === 1) ? letters.centaines[0] : letters.units[parseInt(number/100)]+' '+letters.centaines[1])+' '+letters.dizaines_simples[parseInt((number+'').split('')[1])-1]+'-et-'+letters.units[1];
    //CENTAINES AVEC DIZAINES SIMPLES ET UNITES AUTRE QUE 1
    if(/^[1-9]{1}[2-68]{1}[2-9]{1}$/.test(number)) return ((parseInt(number/100) === 1) ? letters.centaines[0] : letters.units[parseInt(number/100)]+' '+letters.centaines[1])+' '+letters.dizaines_simples[parseInt((number+'').split('')[1])-1]+' '+letters.units[parseInt((number+'').split('')[2])];
    //CAS DE 170 et 190 AVEC DES UNITES AUTRES QUE 0
    if(/^[1-9]{1}[79]{1}[1-9]{1}$/.test(number)) return ((parseInt(number/100) === 1) ? letters.centaines[0] : letters.units[parseInt(number/100)]+' '+letters.centaines[1])+' '+letters.dizaines_simples[parseInt((number+'').split('')[1])-2]+' '+letters.dizaines_complexes[parseInt((number+'').split('')[2])-1];
    return number+ ' n\'a pas pu être converti faites le moi savoir' ;
}