import styled from "styled-components";

const MagnetButton = () => {
  const text = "get start.get start.".split("");

  return (
    <StyledWrapper>
      <button className="button">
        <p className="button__text font-inter text-sm">
          {text.map((char, i) => (
            <span key={i} style={{ "--index": i }}>
              {char}
            </span>
          ))}
        </p>
        <div className="button__circle">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon"
            width={14}
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon button__icon--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background: #0081fb;
    color: #fff;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 500;

    /* Responsive width and height */
    width: 50px;
    height: 50px;

    @media (min-width: 640px) {
      width: 60px;
      height: 60px;
    }

    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
    }

    @media (min-width: 1024px) {
      width: 110px;
      height: 110px;
    }
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 9s linear infinite;
    font-size: 7px;

    /* Responsive font size */
    @media (min-width: 640px) {
      font-size: 8px;
    }

    @media (min-width: 768px) {
      font-size: 13px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }

    > span {
      position: absolute;
      transform: rotate(calc(18deg * var(--index)));
      inset: 0px;

      /* Adjust position for responsiveness */
      @media (min-width: 768px) {
        inset: 2px;
      }

      @media (min-width: 1024px) {
        inset: 9px;
      }
    }
  }

  .button__circle {
    position: relative;
    overflow: hidden;
    background: #fff;
    color: #0081fb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Responsive width and height */
    width: 20px;
    height: 20px;

    @media (min-width: 640px) {
      width: 22px;
      height: 22px;
    }

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }

    @media (min-width: 1024px) {
      width: 45px;
      height: 45px;
    }
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: #000;
    transform: scale(1.05);
  }

  .button:hover .button__icon {
    color: #000;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export default MagnetButton;
