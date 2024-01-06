import { Image } from "@chakra-ui/react";

export default function DyImage({ src, ...props }) {
  const styleConfig = {
    baseStyle: {
      w: "100%",
      minH: "350px",
      objectFit: "cover",
      borderRadius: "2rem",
      src: src,
    },
  };
  return <Image {...styleConfig.baseStyle} {...props} />;
}
