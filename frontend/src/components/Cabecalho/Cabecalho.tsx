import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src="/assets/myteacher.png"/>
            </div>
            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
};

export default Cabecalho;