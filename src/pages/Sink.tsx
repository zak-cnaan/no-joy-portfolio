import StyledContainer from "../components/container/StyledContainer"
import Typo from "../components/sink/Typo"
import RadixTheme from "../components/sink/radix/RadixTheme"

function Sink(){
    return(
        <>
        
        <RadixTheme />
        <StyledContainer>
            <Typo />
        </StyledContainer>
        </>
    )
}

export default Sink