import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailPageUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId }, //router.query => {boardId:1}
  });

  return (
    <BoardDetailPageUI
      writerData={data?.fetchBoard?.writer}
      createdAtData={data?.fetchBoard?.createdAt}
      titleData={data?.fetchBoard?.title}
      contentsData={data?.fetchBoard?.contents}
    />
  );
}
