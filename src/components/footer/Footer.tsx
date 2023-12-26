import Container from '../container/Container'
import StyledContainer from '../container/StyledContainer'
import css from './style.module.css'

function Footer(){
    return(
        <footer className={css.footer}>
            <Container>
                footer
            </Container>
            <StyledContainer>Footer1</StyledContainer>
        </footer>
    )
}

export default Footer