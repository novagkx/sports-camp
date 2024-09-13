import { useState } from "react";
import { CommentDto } from "../models/comments";
import "../styles/userComments/userComment.css";
import UserAvatar from "../shared/common/atoms/UserAvatar";
import UserStatus from "../shared/common/atoms/UserStatus";
import PlusIcon from "../shared/common/atoms/PlusIcon";
import MinusIcon from "../shared/common/atoms/MinusIcon";
import MoreDetailsIcon from "../shared/common/atoms/MoreDetailsIcon";
import VerticalLine from "../shared/common/atoms/VerticalLine";
import CommentInput from "../shared/molecules/inputs/CommentInput";;
interface UserCommentProps {
  data: CommentDto;
  addNewComment: (newComment: CommentDto) => void;
}

const UserComment = ({ data, addNewComment }: UserCommentProps) => {
  const [isAnswer, setIsAnswer] = useState(false);

  const startRating =
    Number(data.rating?.plus) - Number(data.rating?.minus) || 0;
  const [rating, setRating] = useState(0);
  const overallRating = startRating + rating;

  const handleIncreaseRating = () => {
    setRating((prevRating) => (prevRating < 1 ? prevRating + 1 : prevRating));
  };
  const handleDecreaseRating = () => {
    setRating((prevRating) => (prevRating > -1 ? prevRating - 1 : prevRating));
  };

  const updateAnswer = (value: boolean) => {
    setIsAnswer(value)
  }

  return (
    <section className="user-comment">
      <h1 className="visually-hidden">Пользовательский комментарий</h1>
      <header className="user-comment__username">
        <div className="user-comment__inner">
          <div className="user-comment__avatar">
            <UserAvatar />
          </div>
          <div className="user-comment__about-user">
            <div className="user-comment__info">
              <h2 className="user-comment__nick">
                {data.author?.nick || "--"}
              </h2>
              <span className="user-comment__status">
                <UserStatus />
              </span>
            </div>
            <span className="user-comment__time grey-600">
              {data.published?.bunin || "--"}
            </span>
          </div>
        </div>
        <div className="user-comment__more">
          <button className="pointer user-comment__more-btn">
            <MoreDetailsIcon />
          </button>
        </div>
      </header>

      {data.parentComment && (
        <div className="parent-comment flex flex-column">
          <div className="flex parent-comment__inner">
            <VerticalLine />
            <div className="parent-comment__about">
              <p className="parent-comment__author">
                <span className="parent-comment__answer">Ответ</span>
                <span className="parent-comment__nick">
                  {data.parentComment?.author?.nick || "--"}
                </span>
              </p>
              <p className="parent-comment__text">
                {data.parentComment?.text || "--"}
              </p>
            </div>
          </div>
          <p className="user-comment__text">{data.text}</p>
        </div>
      )}
      {!data.parentComment && <p className="user-comment__text">{data.text}</p>}

      <footer className="user-comment__footer">
        <button type="button" className="user-comment__send-btn pointer" onClick={() => updateAnswer(true)}>
          Ответить
        </button>
        <div className="user-comment__rating">
          <button
            type="button"
            onClick={handleIncreaseRating}
            className={
              overallRating > 0
                ? "plus-btn-greater pointer"
                : "plus-btn pointer"
            }
          >
            <PlusIcon rating={overallRating} />
          </button>
          <span
            className={
              overallRating > 0
                ? "user-comment__rating-value--greater"
                : overallRating < 0
                ? "user-comment__rating-value--less"
                : "user-comment__rating-value"
            }
          >
            {overallRating || 0}
          </span>
          <button
            onClick={handleDecreaseRating}
            type="button"
            className={
              overallRating < 0
                ? "minus-btn-greater pointer"
                : "minus-btn pointer"
            }
          >
            <MinusIcon rating={overallRating} />
          </button>
        </div>
      </footer>
      {isAnswer && <CommentInput setIsAnswer={updateAnswer} commentData={data} addNewComment={addNewComment} isAnswer={isAnswer}/>}
    </section>
  );
};

export default UserComment;
