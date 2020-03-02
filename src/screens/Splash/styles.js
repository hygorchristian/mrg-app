import styled from 'styled-components/native';
import colors from '~/assets/colors';
import Montserrat from '~/components/Montserrat';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  flex: 1;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Text = styled(Montserrat).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 48px;
  color: ${colors.primary};
  text-shadow-color: #ffffff;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 1px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.primary,
  size: 'large',
})`
  margin-bottom: 80px;
`;
