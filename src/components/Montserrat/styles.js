import styled from 'styled-components/native';
import colors from '~/assets/colors';
import {
  REGULAR,
  LIGHT,
  EXTRABOLD,
  SEMIBOLD,
  BOLD,
  BLACK,
  EXTRALIGHT,
} from './fonts';

const fontFamily = weight => {
  let retorno = REGULAR;

  switch (weight) {
    case 'regular':
      retorno = REGULAR;
      break;
    case 'extrabold':
      retorno = EXTRABOLD;
      break;
    case 'black':
      retorno = BLACK;
      break;
    case 'extralight':
      retorno = EXTRALIGHT;
      break;
    case 'light':
      retorno = LIGHT;
      break;
    case 'bold':
      retorno = BOLD;
      break;
    case 'semibold':
      retorno = SEMIBOLD;
      break;
  }

  return retorno;
};

const fontWeight = weight => {
  let retorno = 400;

  switch (weight) {
    case 'regular':
      retorno = 400;
      break;
    case 'light':
      retorno = 200;
      break;
    case 'bold':
      retorno = 800;
      break;
    case 'extrabold':
      retorno = 900;
      break;
    case 'extralight':
      retorno = 100;
      break;
    case 'semibold':
      retorno = 600;
      break;
  }

  return retorno;
};

export const Container = styled.Text`
  font-family: ${({ weight = 'regular' }) => fontFamily(weight)};
  font-weight: ${({ weight = 'regular' }) => fontWeight(weight)};
  color: ${colors.textPrimary};
  flex-wrap: wrap;
  text-shadow-color: ${({ shadow }) =>
    shadow ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
  text-shadow-offset: ${({ shadow }) => (shadow ? '-1px 1px' : '0 0')};
  text-shadow-radius: ${({ shadow }) => (shadow ? 1 : 0)};
`;
