import LinkIcon from "../common/atoms/LinkIcon";
import PictureIcon from "../common/atoms/PictureIcon";
import RubleIcon from "../common/atoms/RubleIcon";

interface CommentsToolbarProps {
  isFocused?: boolean;
}
const CommentsToolbar = ({ isFocused }: CommentsToolbarProps) => {
  const toolsArray = [
    { id: 1, icon: "RubleIcon" },
    { id: 2, icon: "LinkIcon" },
    { id: 3, icon: "PictureIcon" },
  ];
  return (
    <ul
      className={isFocused ? "comment-form__list--active" : "comment-form__list"}
    >
      {toolsArray.map((tool) => (
        <li key={tool.id} className="comment-form__item">
          <button className="pointer">
            {tool.icon === "RubleIcon" && <RubleIcon />}
            {tool.icon === "LinkIcon" && <LinkIcon />}
            {tool.icon === "PictureIcon" && <PictureIcon />}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CommentsToolbar;