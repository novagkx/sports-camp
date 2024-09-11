interface ArrowDownProps {
  color?: string;
}
const ArrowDown = ({ color }: ArrowDownProps) => {
  return (
    <svg
      className="arrow-down"
      width="12px"
      height="12px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color || "#7F7F7F"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 4V20M12 20L8 16M12 20L16 16"
          stroke={color || "#7F7F7F"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default ArrowDown;