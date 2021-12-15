import Link from "next/link"
import { Box, Spacer, Center, IconButton, useColorMode } from "@chakra-ui/react"
import { GrUpdate } from "react-icons/gr"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center
      px="15vw"
      borderBottom="1px"
      borderColor="gray.500"
      backgroundColor="#162056"
      height="60px"
    >
      <IconButton
        icon={<GrUpdate />}
        bg="#fc8181"
        aria-label="Color mode switcher"
        onClick={toggleColorMode}
      >
        Switch Mode
      </IconButton>
      <Spacer />
      <Box fontSize="3xl" color="gray.100" fontWeight="bold" opacity="87%">
        <Link href="/">
          <a>{process.env.title}</a>
        </Link>
      </Box>
      <Spacer />
      <IconButton
        icon={colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
        bg="#fc8181"
        aria-label="Color mode switcher"
        onClick={toggleColorMode}
      >
        Switch Mode
      </IconButton>
    </Center>
  )
}

export default Navbar
