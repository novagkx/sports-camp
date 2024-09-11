interface ArrowUpProps {
  color?: string;
}
const ArrowUp = ({ color }: ArrowUpProps) => {
  return (
    <svg
      className="arrow-up"
      width="12px"
      height="12px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color || "#222222"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 4V20M12 4L8 8M12 4L16 8"
          stroke={color || "#222222"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default ArrowUp;