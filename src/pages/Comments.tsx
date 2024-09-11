import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CommentDto } from "../models/comments";
import CommentsBar from "../comments/CommentsBar";
import { BASE_URL } from "../constants/comments";

const Comments = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(BASE_URL).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  const [commentsArray, setCommentsArray] = useState<CommentDto[] | null>(null);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setCommentsArray(data.data.commentQueries.list.comments);
    }
  }, [isLoading, isError, data]);

  return (
    <CommentsBar
      commentsCount={commentsArray?.length}
      refetch={() => refetch()}
    />
  );
};

export default Comments;
