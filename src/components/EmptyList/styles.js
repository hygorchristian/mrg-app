import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Lottie = styled(LottieView)`
  height: 200px;
  width: 200px;
`;

export const Text = styled(OpenSans)`
  font-size: 18px;
  width: 250px;
  text-align: center;
  margin-top: 8px;
  color: ${colors.textSecondary};
`;
