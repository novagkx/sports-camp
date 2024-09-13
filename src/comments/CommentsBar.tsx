import { useState } from "react";
import "../styles/commentBar.css";
import CommentInput from "../shared/molecules/inputs/CommentInput";
import ReloadButton from "../shared/common/atoms/ReloadButton";
import ArrowUp from "../shared/common/atoms/ArrowUp";
import ArrowDown from "../shared/common/atoms/ArrowDown";
import BurgerIcon from "../shared/common/atoms/BurgerIcon";
import { CommentDto } from "../models/comments";

interface CommentsProps {
  commentsCount?: number;
  refetch: () => void;
  addNewComment: (newComment: CommentDto) => void;
}
const CommentsBar = ({
  commentsCount,
  refetch,
  addNewComment,
}: CommentsProps) => {
  const [isFilteredByUpDate, setIsFilteredByUpDate] = useState(false);
  const [withDialogues, setWithDialogues] = useState(false);
  
  const filterByDate = () => {
    setIsFilteredByUpDate((prev) => !prev);
  };
  const filterByDialogues = () => {
    setWithDialogues((prev) => !prev);
  };

  return (
    <section className="comments-section">
      <h1 className="visually-hidden">Фильтрация комментариев</h1>
      <div className="comments-container">
        <div className="comments-bar">
          <h2 className="comments-bar__title">
            {commentsCount || "--"} комментариев
          </h2>
          <button
            onClick={refetch}
            className="comments-bar__btn reload-btn pointer"
          >
            <ReloadButton />
          </button>
        </div>
        <div className="comments-filter-bar">
          <div className="comments-filter-bar__sorting">
            <button
              className="comments-filter-bar__sorting"
              onClick={filterByDate}
            >
              <div className="flex">
                <span className="grey-600 uppercase text-sm bold sorting-date pointer">
                  По дате
                </span>
                {isFilteredByUpDate ? (
                  <div className="comments-filter-bar__arrows">
                    <ArrowUp />
                    <ArrowDown />
                  </div>
                ) : (
                  <div className="comments-filter-bar__arrows">
                    <ArrowUp color={"#7F7F7F"} />
                    <ArrowDown color={"#7F7F7F"} />
                  </div>
                )}
              </div>
            </button>
            <button className="white bg-mint-500 classic-btn uppercase text-sm bold pointer">
              Лучшие
            </button>
            <button className="uppercase grey-600 text-sm bold pointer">
              Актуальные
            </button>
          </div>
          <div className="dialog-filter">
            {withDialogues ? (
              <span className="text-sm font-roboto">С диалогами</span>
            ) : (
              <span className="text-sm font-roboto">Без диалогов</span>
            )}
            <button
              onClick={filterByDialogues}
              className="dialog-filter__btn pointer"
            >
              <BurgerIcon />
            </button>
          </div>
        </div>
        <CommentInput addNewComment={addNewComment} />
      </div>
    </section>
  );
};

export default CommentsBar;
