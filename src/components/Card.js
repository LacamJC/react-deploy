import styles from '../scss/css_components/Card.module.css'

function Card({id, nome_site, desc_site, link_site, link_img}){
    return(
        <>
            <div className={`${styles.card} ${styles[id]}`} id={id}  key={id}>
                <div className={styles.card__header}>
                    <img className={styles.card__header_img} src={link_img}></img>
                </div>
                
                <div className={styles.card__body}>
                    <h1 className={styles.card__body_title}>{nome_site}</h1>
                    <p className={styles.card__body_text}>{desc_site}</p>
                </div>
                <div className={styles.card__footer}>
                    <a href={link_site} target="_blank" title="" className={styles.card__footer_a}><div className={styles.card__footer_btn}>
                    Visitar
                    <div className={styles.line}></div>
                    </div></a>
                </div>
            </div>
        </>
    )
}

export default Card