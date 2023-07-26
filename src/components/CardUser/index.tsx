import React from "react";

import * as S from "./styles";

const UserInfo = () => (
  <S.Column>
    <S.Name>Melies Kubrick</S.Name>
    <S.RowUsername>
      <S.Username>melieskubrick</S.Username>
      <S.TagContainer>
        <S.Tag>threads.net</S.Tag>
      </S.TagContainer>
    </S.RowUsername>
  </S.Column>
);

const CardUser = () => {
  return (
    <S.Container>
      <S.Row>
        <UserInfo />
        <S.Avatar
          source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
        />
      </S.Row>
      <S.Bio>UI Designer | Let's redesign the world</S.Bio>
      <S.AvatarGroupContainer>
        <S.AvatarGroup
          source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
        />
        <S.AvatarGroup
          ml="-8"
          source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
        />
        <S.AvatarGroup
          ml="-8"
          source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
        />

        <S.Followers>2957 seguidores</S.Followers>
      </S.AvatarGroupContainer>
    </S.Container>
  );
};

export default CardUser;
