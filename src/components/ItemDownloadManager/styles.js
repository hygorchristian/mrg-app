import styled from 'styled-components/native';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  background-color: ${colors.paper};
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Progress = styled.View`
  height: 4px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ error }) =>
    error ? 'rgba(238,0,43,0.2)' : 'rgba(238, 118, 0, 0.2)'};
`;

export const Percentage = styled.View`
  width: 34%;
  height: 4px;
  background-color: ${({ error }) => (error ? '#EE002B' : '#ee7600')};
`;

export const Info = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

export const Title = styled(OpenSans).attrs({
  weight: 'semibold',
  shadow: true,
})`
  font-size: 12px;
`;

export const Number = styled(OpenSans).attrs({
  weight: 'semibold',
  shadow: true,
})`
  font-size: 12px;
  color: ${colors.primary};
`;

export const Date = styled(OpenSans).attrs({
  weight: 'semibold',
})`
  font-size: 10px;
  color: ${colors.textSecondary};
`;

export const Divider = styled.View`
  height: 40px;
  width: 1px;
  background-color: #3b3b45;
  margin-horizontal: 12px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MDIcon).attrs({
  size: 24,
})`
  color: #565664;
`;

export const ProgressInfo = styled(OpenSans).attrs({
  weight: 'semibold',
  shadow: true,
})`
  width: 50px;
  font-size: 14px;
  color: ${({ error }) => (error ? '#EE002B' : colors.textPrimary)};
`;
