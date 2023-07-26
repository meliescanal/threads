import React from "react";

import * as S from "./styles";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { dark } from "../../themes/dark";

import Feather from "@expo/vector-icons/Feather";

const NewPost = () => {
  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ["92%"], []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const NewPostIcon = () => (
    <S.Button onPress={handlePresentModalPress}>
      <S.Icon source={require("../../assets/images/tab/post.png")} />
    </S.Button>
  );

  return (
    <S.Container>
      <NewPostIcon />
      <S.BottomModal
        enablePanDownToClose={false}
        index={0}
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
      >
        <S.CancelButton onPress={handleCloseModalPress}>
          <S.Cancel>Cancelar</S.Cancel>
        </S.CancelButton>
        <S.Heading>Nova thread</S.Heading>
        <S.Divider />
        <S.Content>
          <S.Row>
            <S.ColumnAvatar>
              <S.Avatar
                source={{
                  uri: "https://randomuser.me/api/portraits/men/44.jpg",
                }}
              />
              <S.Line />
              <S.AvatarSmall
                source={{
                  uri: "https://randomuser.me/api/portraits/men/44.jpg",
                }}
              />
            </S.ColumnAvatar>
            <S.Column>
              <S.Username>melieskubrick</S.Username>
              <S.Input
                placeholder="Inicie uma nova thread"
                placeholderTextColor={dark.colors.gray}
              />

              <S.ButtonAttach>
                <Feather name="paperclip" size={24} color={dark.colors.gray} />
              </S.ButtonAttach>
            </S.Column>
          </S.Row>
        </S.Content>
      </S.BottomModal>
    </S.Container>
  );
};

export default NewPost;
