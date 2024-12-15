import Card from './Card'
import styles from '../scss/css_components/Lista.module.css'

function Lista({ data }){
    return(
        <>
       <div className={styles.lista}>
           {data.map((item, index)=>(
                <Card
                    id={item.id}
                    nome_site={item.id}
                    desc_site={item.body_text}
                    link_site={item.a_link}
                    link_img={item.url_img}
                />
           ))}
       </div>
        </>
    )
}

export default Lista

// nome_site, desc_site, link_site, link_img