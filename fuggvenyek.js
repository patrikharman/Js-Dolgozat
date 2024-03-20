export function konzolraIr(CICAK) {
    
    for (let index = 0; index < CICAK.length; index++) {
        console.log(`fajta: ${CICAK[index].fajta,CICAK[index].szarmazas}`);    
    }
    
    
}
export function listaOsszeallit(CICAK) {
    let txt="<ul>"
    for (let index = 0; index < CICAK.length; index++) {
        txt += `<li>fajta: ${CICAK[index].fajta}, szarmazas: ${CICAK[index].szarmazas},szorzet: ${CICAK[index].szorzet}</li>`;
        
    }
    txt+= "<ul>"
    console.log(txt)
    return txt
    
}