import React from "react";

import * as S from "./styles";

import posts from "../../assets/json/posts.json";
import Thread from "../../components/Thread";
import { ListRenderItemInfo } from "react-native";
import { IPost } from "../../components/Thread/types";

const Home = () => {
  return (
    <S.Container>
      <S.SafeArea />
      <S.List
        data={posts}
        ItemSeparatorComponent={S.Divider}
        renderItem={({ item }: ListRenderItemInfo<IPost>) => (
          <Thread {...item} />
        )}
      />
    </S.Container>
  );
};

export default Home;
