import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 50px auto 20px;

  h1 {
    font-size: 32px;
    color: var(--dark-smoke);
    margin-bottom: 16px;
  }
  h2 {
    font-size: 16px;
    color: var(--dark-smoke);
  }

  div {
    background-color: var(--white);
    width: 100%;
    max-width: 300px;
    border-radius: 4px;
    padding: 8px 16px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    input {
      flex: 1;
      background: transparent;
      border: 0;
      color: #f4ede8;
      &::placeholder {
        color: var(--smoke);
        font-style: italic;
      }
      :hover {
        color: var(--smoke);
      }
    }
  }
`;
export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-top: 50px;

  td:first-child:before {
    content: '';
    position: absolute;
    border-radius: 8px 0 0 8px;
    background-color: coral;
    width: 12px;
    height: 100%;
    left: -12px;
    top: 0px;
  }
  td:last-child {
    border-radius: 0 5px 5px 0;
  }
  thead {
    text-align: left;
    th {
      padding: 9px 24px;
    }
  }
  tbody {
    background-color: var(--white);
    tr {
      background-color: var(--white);
      td:nth-child(1) {
        display: flex;
        align-items: center;
        img {
          padding-right: 24px;
        }
      }
      td {
        padding: 20px 24px;
      }
    }
  }
`;
