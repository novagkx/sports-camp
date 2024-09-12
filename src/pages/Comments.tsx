import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CommentDto } from "../models/comments";
import CommentsBar from "../comments/CommentsBar";
import { BASE_URL } from "../constants/comments";
import UserComment from "../comments/UserComment";
import "../styles/loader.css";
const Comments = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(BASE_URL).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  const [commentsArray, setCommentsArray] = useState<CommentDto[]>([]);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setCommentsArray(data.data.commentQueries.list.comments);
    }
  }, [isLoading, isError, data]);

  const addNewComment = (newComment: CommentDto) => {
    setCommentsArray((prev) => [...prev, newComment]);
  };

  return (
    <main>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      {!isLoading && isError && <div className="loader-wrapper">Возникла ошибка!<button onClick={() => refetch()} className="loader__reload-btn pointer">Попробуйте снова.</button></div>}
      {!isLoading && !isError && (
        <>
          <CommentsBar
            commentsCount={commentsArray?.length}
            refetch={() => refetch()}
            addNewComment={addNewComment}
          />
          {commentsArray.map((comment) => (
            <UserComment addNewComment={addNewComment} key={comment.id} data={comment}/>
          ))}
        </>
      )}
    </main>
  );
};

export default Comments;
