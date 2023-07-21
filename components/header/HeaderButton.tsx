import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Icon, useColorMode } from "@chakra-ui/react";

export const HeaderButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}
    </Button>
  );
};
