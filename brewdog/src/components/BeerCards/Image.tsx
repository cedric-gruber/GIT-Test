/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ImageProps {
  src: string;
}

const Image = ({ src }: ImageProps): JSX.Element => (
  <div
    css={css`
      height: 200px;
      min-width: 100px;
      text-align: center;
    `}
  >
    <img alt="logo" src={src} className="h-100" />
  </div>
);

export default Image;
