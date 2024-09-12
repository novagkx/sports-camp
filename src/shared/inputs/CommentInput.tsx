import "../../styles/commentInput.css";
import "../../App.css";

import { useEffect, useState } from "react";
import CommentsToolbar from "../business/CommentsToolbar";
const CommentInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleFocus = (value: boolean) => {
    setIsFocused(value);
  };
  useEffect(() => {
    const textarea = document.getElementById(
      "comment-input"
    ) as HTMLTextAreaElement;

    const handleTextareaKeyup = () => {
      textarea.style.height = "104px";
      const scHeight = textarea.scrollHeight;
      textarea.style.height = `${scHeight}px`;
    };

    textarea?.addEventListener("keyup", handleTextareaKeyup);

    return () => {
      textarea?.removeEventListener("keyup", handleTextareaKeyup);
    };
  }, []);

  return (
    <form onSubmit={e => e.preventDefault()} className="comment-form">
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
        <CommentsToolbar isFocused={isFocused}/>
      </div>
      {isFocused && (
        <div className="comment-form__footer">
          <p className="comment-form__text grey-600">
            Пишите корректно и дружелюбно.{" "}
            <a className="comment-form__link pointer">Принципы нашей модерации</a>
          </p>
          <button
            onClick={() => {}}
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
