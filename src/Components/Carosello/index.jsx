import { useRef} from "react"
import styles from "./Carosello.module.scss"

function Carosello() {

const moveRef = (element, dir) => {
  if (dir === "left") element.current.scrollLeft += 300;
  if (dir === "right") element.current.scrollLeft -= 300;

};

const carouselref = useRef();

  return (
    <div className={styles.body}>
        <h1 className={styles.title}>Esercizio Carosello</h1>
        <main className={styles.wrapper} ref={carouselref}>
            <section className={styles.wrapperImg}>
                <div className={styles.img}>
                    <img src="https://picsum.photos/id/106/250/300" alt="1"/>
                    <img src="https://picsum.photos/id/115/250/300" alt="2"/>
                    <img src="https://picsum.photos/id/108/250/300" alt="3"/>
                    <img src="https://picsum.photos/id/109/250/300" alt="4"/>
                    <img src="https://picsum.photos/id/110/250/300" alt="5"/>
                    <img src="https://picsum.photos/id/112/250/300" alt="6"/>
                </div>
            </section>
        </main>
      <div className={styles.carosel__btn}>
        <button className={styles.btn} onClick={() => moveRef(carouselref, "right")}>{"<"}</button>
        <button className={styles.btn} onClick={() => moveRef(carouselref, "left")}>{">"}</button>
      </div>
    </div>
  );
}

export default Carosello;