import React from "react";

import * as S from "./styles";
import { IPost } from "./types";

const Thread = ({ ...props }: IPost) => {
  const Post = () => (
    <S.ContainerPost>
      <S.Username>{props.username}</S.Username>
      <S.Post>{props.post}</S.Post>
      {props.postImage && (
        <S.PostImage
          source={{
            uri: props.postImage,
          }}
        />
      )}
    </S.ContainerPost>
  );

  const ActionButtons = () => (
    <S.ContainerActions>
      <S.Action>
        <S.Icon source={require("../../assets/images/actions/like.png")} />
      </S.Action>
      <S.Action>
        <S.Icon source={require("../../assets/images/actions/comment.png")} />
      </S.Action>
      <S.Action>
        <S.Icon source={require("../../assets/images/actions/reply.png")} />
      </S.Action>
      <S.Action>
        <S.Icon source={require("../../assets/images/actions/share.png")} />
      </S.Action>
    </S.ContainerActions>
  );

  const Interactions = () => (
    <S.ContainerInteractions>
      <S.AvatarGroupContent>
        <S.Row>
          <S.AvatarGroup
            h="16"
            w="16"
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <S.AvatarGroup
            top="-8"
            source={{ uri: "https://randomuser.me/api/portraits/women/20.jpg" }}
          />
        </S.Row>
        <S.AvatarGroup
          h="12"
          w="12"
          top="-4"
          source={{ uri: "https://randomuser.me/api/portraits/men/14.jpg" }}
        />
      </S.AvatarGroupContent>
      <S.Likes>7 respostas - 59 Curtidas</S.Likes>
    </S.ContainerInteractions>
  );

  return (
    <S.Container>
      <S.Row>
        <S.Column style={{ alignItems: "center" }}>
          <S.Avatar source={{ uri: props.avatar_uri }} />
          <S.Line />
        </S.Column>
        <S.Column>
          <Post />
          <ActionButtons />
        </S.Column>
      </S.Row>
      <Interactions />
    </S.Container>
  );
};

export default Thread;
