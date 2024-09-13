import "../../../styles/commentInput/commentInput.css";
import "../../../App.css";
import { useEffect, useState } from "react";
import CommentsToolbar from "../../business/CommentsToolbar";
import { CommentDto } from "../../../models/comments";
import { createCommentDto } from "../../utils/createCommentDto";
import { strIsEmpty } from "../../utils/strIsEmpty";

interface CommentInputProps {
  addNewComment: (newComment: CommentDto) => void;
  isAnswer?: boolean;
  commentData?: CommentDto;
  setIsAnswer?: (value: boolean) => void;
}
const CommentInput = ({
  addNewComment,
  isAnswer,
  commentData,
  setIsAnswer,
}: CommentInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const onSubmitBtn = () => {
    addNewComment(
      isAnswer && commentData
        ? createCommentDto(commentValue, commentData)
        : createCommentDto(commentValue)
    );

    setIsFocused(false);
    setCommentValue("");
    if (isAnswer && setIsAnswer) setIsAnswer(false); // после ответа на комментарий убираем инпут поле
  };

  useEffect(() => {
    const textareas = document.querySelectorAll(
      ".comment-input-template"
    ) as NodeListOf<HTMLTextAreaElement>;

    const handleTextareaKeyup = (textarea: HTMLTextAreaElement) => {
      if (isFocused) {
        textarea.style.height = "104px"; // Сбрасываем высоту
        const scHeight = textarea.scrollHeight;
        textarea.style.height = `${scHeight}px`; // Устанавливаем новую высоту
      }
    };

    textareas.forEach((textarea) => {
      const keyupHandler = () => handleTextareaKeyup(textarea);
      textarea.addEventListener("keyup", keyupHandler);

      return () => {
        textarea.removeEventListener("keyup", keyupHandler);
        textarea.style.height = "initial";
      };
    });

    return () => {
      textareas.forEach((textarea) => {
        textarea.style.height = "initial";
      });
    };
  }, [isFocused]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="comment-form">
      <div className="comment-form__wrapper">
        <textarea
          value={commentValue}
          onClick={() => setIsFocused(true)}
          onChange={(e) => setCommentValue(e.target.value)}
          className={
            isFocused
              ? "comment-input-template comment-form__input--active"
              : "comment-input-template comment-form__input"
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
            disabled={strIsEmpty(commentValue)}
            className={
              !strIsEmpty(commentValue)
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
