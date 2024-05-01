import {
  Avatar,
  AvatarWrapper,
  Body,
  BottomWrapper,
  Button,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
} from "./BoardDetail.styles";

export default function BoardDetailPageUI(props) {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              <Writer>{props.writerData}</Writer>
              <CreatedAt>{props.createdAtData}</CreatedAt>
            </Info>
          </AvatarWrapper>
        </Header>
        <Body>
          <Title>{props.titleData}</Title>
          <Contents>{props.contentsData}</Contents>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
