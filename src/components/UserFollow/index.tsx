import React from "react";

import * as S from "./styles";
import Button from "../Button";
import { IUser } from "./types";

const UserFollow = ({ ...props }: IUser) => {
  return (
    <S.Container>
      <S.Row>
        <S.Avatar
          source={{
            uri: props.avatar_uri,
          }}
        />
        <S.Column>
          <S.Username>{props.username}</S.Username>
          <S.Name>{props.name}</S.Name>
          <S.Followers>{props.followers} seguidores</S.Followers>
        </S.Column>
      </S.Row>
      <S.ContainerButton>
        <Button inverted text="Seguir" />
      </S.ContainerButton>
    </S.Container>
  );
};

export default UserFollow;
