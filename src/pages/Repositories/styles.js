import styled from 'styled-components/native';

import {colors} from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const NomeRepo = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;
