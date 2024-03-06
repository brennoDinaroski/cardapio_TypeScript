import styles from './PratosRecomendados.module.scss';
import { useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import { Prato } from 'types/Prato';

export default function PratosRecomendados() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { ...prato }, replace: true });
  }

  return (
    <div className={styles.recomendados}>
      {pratosRecomendados.map((item) => (
        <div key={item.id} className={styles.recomendado}>
          <div className={styles.recomendado__imagem}>
            <img src={item.photo} alt={item.title} />
          </div>
          <button
            className={styles.recomendado__botao}
            onClick={() => redirecionarParaDetalhes(item)}
          >
            Ver mais
          </button>
        </div>
      ))}
    </div>
  );
}