import styled from 'styled-components';

const Container = styled.div`
    border: 10px solid black;
    background-color: ${({ theme }) => theme.colors.bgColor};
    width: 100vw;
    height: 100vh;
`;
const Main = styled.h4`
    color: ${({ theme }) => theme.colors.fontColor};
`;

const Home = () => {
    return (
        <>
            <Container>
                <Main>Home이올시다</Main>
            </Container>
        </>
    );
};

export default Home;
