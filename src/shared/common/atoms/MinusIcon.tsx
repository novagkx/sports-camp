interface MinusIconProps {
    rating?: number;
}
const MinusIcon = ({rating = 0}: MinusIconProps) => {
    return (
        <svg
              className="minus-icon"
              fill={rating < 0 ? "#ff003c" : "#d8d8d8"}
              width="12px"
              height="12px"
              viewBox="-4 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>minus</title>{" "}
                <path d="M0 13.531h23.688v4.938h-23.688v-4.938z"></path>{" "}
              </g>
            </svg>
    )
}

export default MinusIcon;