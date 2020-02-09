import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background: #4a90e2;

  img {
    margin-left: 42px;
  }

  div {
    display: flex;
    align-items: center;
    margin-right: 48px;
  }
  p {
    color: #fff;
    font-family: Helvetica;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    margin-right: 8px;
  }
`;
