import React from "react";
import { View } from "react-native";

import * as S from "./styles";
import CardUser from "../../components/CardUser";
import Button from "../../components/Button";
import { Tabs } from "react-native-collapsible-tab-view";
import { dark } from "../../themes/dark";
import Thread from "../../components/Thread";

import posts from "../../assets/json/posts.json";
import { IPost } from "../../components/Thread/types";

const Profile = () => {
  const Header = () => (
    <S.Header>
      <S.ButtonIcon>
        <S.Icon source={require("../../assets/images/privacy.png")} />
      </S.ButtonIcon>
      <S.Row>
        <S.ButtonIcon mr="16">
          <S.Icon source={require("../../assets/images/instagram.png")} />
        </S.ButtonIcon>
        <S.ButtonIcon>
          <S.Icon source={require("../../assets/images/configuration.png")} />
        </S.ButtonIcon>
      </S.Row>
    </S.Header>
  );

  const Content = () => (
    <S.Container>
      <Header />
      <CardUser />
      <S.ContainerButtons>
        <Button inverted text="Editar perfil" />
        <S.Spacing />
        <Button inverted text="Compartilhar perfil" />
      </S.ContainerButtons>
    </S.Container>
  );

  return (
    <>
      <S.SafeArea />
      <Tabs.Container
        renderTabBar={(props) => <S.CustomTabBar {...props} />}
        renderHeader={Content}
        headerContainerStyle={{ backgroundColor: dark.colors.background }}
      >
        <Tabs.Tab name="threads" label={() => <S.TabLabel>Threads</S.TabLabel>}>
          <S.Container>
            <Tabs.FlatList
              data={posts}
              keyExtractor={(item: IPost) => `${item.id}`}
              renderItem={({ item }) => <Thread {...item} />}
            />
          </S.Container>
        </Tabs.Tab>
        <Tabs.Tab
          name="respostas"
          label={() => <S.TabLabel>Respostas</S.TabLabel>}
        >
          <></>
        </Tabs.Tab>
      </Tabs.Container>
    </>
  );
};

export default Profile;
