import "../../styles/commentInput/commentInput.css";
import "../../App.css";
import { useEffect, useState } from "react";
import CommentsToolbar from "../business/CommentsToolbar";
import { CommentDto } from "../../models/comments";

interface CommentInputProps {
  addNewComment: (newComment: CommentDto) => void;
  isAnswer?: boolean;
  commentData: CommentDto;
  setIsAnswer: (value: boolean) => void;
}
const CommentInput = ({
  addNewComment,
  isAnswer,
  commentData,
  setIsAnswer
}: CommentInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleFocus = (value: boolean) => {
    setIsFocused(value);
  };

  const onSubmitBtn = () => {
    addNewComment(
      isAnswer
        ? {
            parentComment: {
              author: commentData.author,
              text: commentData.text,
              id: commentData.id,
            },
            id: String(new Date()),
            text: commentValue,
          }
        : { id: String(new Date()), text: commentValue }
    );
    setIsFocused(false);
    setCommentValue("");
    setIsAnswer(false);
  };


  useEffect(() => {
    const textarea = document.getElementById(
      "comment-input"
    ) as HTMLTextAreaElement;

    const handleTextareaKeyup = () => {
      if (isFocused) {
        textarea.style.height = "104px";
        const scHeight = textarea.scrollHeight;
        textarea.style.height = `${scHeight}px`;
      } 
    };

    textarea?.addEventListener("keyup", handleTextareaKeyup);

    return () => {
      textarea?.removeEventListener("keyup", handleTextareaKeyup);
    };
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="comment-form">
      <div className="comment-form__wrapper">
        <textarea
          id="comment-input"
          value={commentValue}
          onClick={() => handleFocus(true)}
          onChange={(e) => setCommentValue(e.target.value)}
          className={
            isFocused ? "comment-form__input--active" : "comment-form__input"
          }
          placeholder="Написать комментарий..."
        />
        <CommentsToolbar isFocused={isFocused} />
      </div>
      {isFocused && (
        <div className="comment-form__footer">
          <p className="comment-form__text grey-600">
            Пишите корректно и дружелюбно.{" "}
            <a href="#" className="comment-form__link pointer">
              Принципы нашей модерации
            </a>
          </p>
          <button
            onClick={onSubmitBtn}
            disabled={!commentValue}
            className={
              commentValue
                ? "comment-form__send-btn--active"
                : "comment-form__send-btn"
            }
            type="submit"
          >
            Отправить
          </button>
        </div>
      )}
    </form>
  );
};

export default CommentInput;
