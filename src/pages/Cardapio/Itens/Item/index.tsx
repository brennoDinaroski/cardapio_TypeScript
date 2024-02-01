import styles from './Item.module.scss'
import logo from 'assets/logo.svg'

export default function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt='Imagem' ></img>
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Macarrão</h2>
                    <p>Descrição do macarrão</p>
                </div>
            </div>
            <div className={styles.item__tags}>
                <div className={styles.item__tipo}>
                    Tipo: Massa
                </div>
                <div className={styles.item__porcao}>
                    Porcao: 400 g
                </div>
                <div className={styles.item__qtdpessoas}>
                    Serve 2 pessoas
                </div>
                <div className={styles.item__valor}>
                    Valor R$ 50
                </div>
            </div>
        </div>
    )
}