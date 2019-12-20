import styled from 'styled-components/native';

import {colors, metrics} from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.purple};
  align-items: stretch;
  justify-content: center;
  padding: ${metrics.basePadding + 10}px;
`;

//É possível passar atributos usando o styledComponents -> No caso, passando o placeholdercolor;
//É possível passar 2 valores no padding, sendo o primeiro vertical e o segundo horizontal;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: 0 ${metrics.basePadding}px;
  height: 52px;
  font-size: 16px;
  color: ${colors.darker};
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.aquaBlue};
  border-radius: ${metrics.baseRadius}px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.baseMargin}px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;

export const Error = styled.Text`
  color: ${colors.danger};
  margin-bottom: ${metrics.baseMargin + 10}px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
