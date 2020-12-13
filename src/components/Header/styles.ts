import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  padding: 15px 30px;
  img {
    width: 100%;
    max-width: 150px;
  }
`;

export const Profile = styled.div`
  display: flex;
  p {
    font-weight: 'PT Sans Caption';
    font-weight: 700;
    color: var(--dark-smoke);
    padding-left: 5px;
  }

  p + p {
    font-weight: 500;
  }

  div {
    padding-left: 20px;
  }
`;
