import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width:100px){
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 50%;    
`;

export const Title = styled.h1``;
export const SubTitle = styled.h2``;
export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Container = styled.div``;
