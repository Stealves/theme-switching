import styled from "styled-components";

export const CardsContainer = styled.section`
  margin: 50px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: ${({ theme }) => theme.colors.quotePadding};
  border-radius: ${({ theme }) => theme.colors.quoteRadius};
  max-width: 450px;
`;

export const CardReference = styled.div`
  color: ${({ theme }) => theme.colors.quoteTitle};
  text-align: right;
  font-style: italic;
  margin-top: 20px;
  &::before {
    content: '— ';
  }
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.quoteBody};
  font-weight: bold;
`;