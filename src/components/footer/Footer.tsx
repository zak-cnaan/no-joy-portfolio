import Container from '../container/Container'
import css from './style.module.css'

function Footer(){
    return(
        <footer className={css.footer}>
            <Container className={css.container}>
                footer
            </Container>
        </footer>
    )
}

export default Footer