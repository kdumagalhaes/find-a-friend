import styled from 'styled-components'

export const Container = styled.div`
  padding: 7.75rem 7rem 0 7rem;
  height: 100vh;
  background-color: #f15156;

  .hero,
  .bottom {
    display: flex;
    justify-content: space-between;
  }

  .hero {
    align-items: flex-end;

    .cta {
      font-size: 4.5rem;
      max-width: 487px;
      line-height: 64.8px;
    }
  }

  .bottom {
    align-items: center;
    padding-top: 7.6rem;

    .description {
      font-size: 1.5rem;
      max-width: 407px;
    }
  }

  .search-form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    width: 100%;
    max-width: 55rem;

    .label-select {
      margin-right: 1.4rem;
    }

    .uf-select,
    .cidade-select {
      height: 4.5rem;
      font-size: 1.25rem;
    }

    .uf-select {
      outline: 1px solid #fff;
      width: 4.5rem;
      padding: 0.9rem;
      margin-right: 0.4rem;
    }

    .cidade-select {
      width: 17.5rem;
      background-color: #e44449;
    }
  }
`
