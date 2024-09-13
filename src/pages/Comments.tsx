import "../styles/loader.css";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CommentDto } from "../models/comments";
import CommentsBar from "../comments/CommentsBar";
import { BASE_URL } from "../constants/comments";
import UserComment from "../comments/UserComment";
import Loader from "../shared/common/atoms/Loader";
import { useNavigate } from "react-router-dom";

const Comments = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(BASE_URL).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  const [commentsArray, setCommentsArray] = useState<CommentDto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) navigate("/error");
    else if (!isLoading && !isError && data) {
      setCommentsArray(data.data.commentQueries.list.comments);
    }
  }, [isLoading, isError, data, navigate]);

  const addNewComment = (newComment: CommentDto) => {
    setCommentsArray((prev) => [...prev, newComment]);
  };

  return (
    <main>
      {isLoading && <Loader />}
      {!isLoading && !isError && (
        <>
          <CommentsBar
            commentsCount={commentsArray?.length}
            refetch={() => refetch()}
            addNewComment={addNewComment}
          />
          {commentsArray.map((comment) => (
            <UserComment
              addNewComment={addNewComment}
              key={comment.id}
              data={comment}
            />
          ))}
        </>
      )}
    </main>
  );
};

export default Comments;
