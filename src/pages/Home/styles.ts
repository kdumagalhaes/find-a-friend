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
`
