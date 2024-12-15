import styles from '../scss/css_components/Header.module.css'

function Header(props){
    
    return(
        <div>
            <header className={styles.cabecalho}>
                <h1 className={styles.logo}>Cards Info - {props.atual}</h1>
            </header>
        </div>
    )
    
}

export default Header