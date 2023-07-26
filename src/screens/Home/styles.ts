import styled from "styled-components/native";
import { dark } from "../../themes/dark";

export const Container = styled.View`
  flex: 1;
  background-color: ${dark.colors.background};
`;

export const List = styled.FlatList``;

export const SafeArea = styled.SafeAreaView``;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${dark.colors.gray_light};
`;
