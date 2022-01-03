import { Box, Image } from "@chakra-ui/react";

export const TokenImage = (props: any) => {
  const { image } = props;
  return (
    <Box
      rounded={"lg"}
      pos={"relative"}
      height={"230px"}
      _after={{
        transition: "all .3s ease",
        content: '""',
        w: "full",
        h: "full",
        pos: "absolute",
        top: 1,
        left: 0,
        backgroundImage: `url(${image})`,
        filter: "blur(15px)",
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: "blur(20px)",
        },
      }}
    >
      <Image
        rounded={"lg"}
        height={230}
        width={282}
        objectFit={"cover"}
        src={image}
      />
    </Box>
  );
};
