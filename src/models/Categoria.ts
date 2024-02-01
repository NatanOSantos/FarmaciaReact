import Produto from "./Produto";

 export default interface Categoria {
    nome: string | number | readonly string[] | undefined;
    id: number;
    descricao: string;
    produto?:Produto|null
 }