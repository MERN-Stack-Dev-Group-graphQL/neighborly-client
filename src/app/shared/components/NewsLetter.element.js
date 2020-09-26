import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const NewsLetterWrapper = styled.section`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding: 120px 0 0 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #232f3e;
    opacity: 0.85;
  }

  .newsletter_wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    z-index: 3;

    .newsletter__signup-form {
      margin-top: -40px;
      text-align: left;
      color: var(--color-light);
    }
  }

  .newsletter_form {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 4px;
      background-color: var(--color-primary);
      left: -8px;
      z-index: 4;
    }
  }

  .lumberjack__wrapper {
    .lumberjack {
      margin-top: -160px;
    }
  }
`;

export const NewsLetterContainer = styled(Container)`
  ${Container}
`;
