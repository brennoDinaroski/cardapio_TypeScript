import cardapio from './itens.json';
import Item from "./Item"
import styles from "./Itens.module.scss"

interface Props {
    busca: string,
    filtro: number |null,
    ordenador: string,
}

export default function Itens(props : Props) {
    
    return (
        <div className={styles.itens}>
            {cardapio.map( (item) => (
                <Item 
                    key={item.id}
                    {...item}    
                />
            ))}
        </div>
    );
}