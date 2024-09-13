import { useNavigate } from "react-router-dom";

interface ErrorSpaceProps {
  isRenderError?: boolean;
}
const ErrorSpace = ({isRenderError}: ErrorSpaceProps) => {
  const navigate = useNavigate();

  return (
    <div className="loader-wrapper">
      Произошла ошибка! Обратитесь к администратору.
      <button onClick={isRenderError ? () => location.reload() : () => navigate(-1)} className="loader__reload-btn pointer"> 
        Повторить попытку
      </button>
    </div>
  );
};

export default ErrorSpace;
