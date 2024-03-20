import { CICAK } from "./adatok.js";
import { konzolraIr, listaOsszeallit} from "./fuggvenyek.js";


const FELSELEM = document.querySelectorAll(".tartalom")[0]
console.log(FELSELEM)
FELSELEM.innerHTML+= listaOsszeallit(CICAK)