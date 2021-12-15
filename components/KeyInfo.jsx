import {
  Center,
  Spacer,
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"
import { MdContentCopy } from "react-icons/md"

const SandInfo = ({ keyword }) => (
  <Popover colorScheme="red">
    <PopoverTrigger>
      <Button colorScheme="red">?</Button>
    </PopoverTrigger>
    <Portal>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody bg="#fc8181" color="white">
          <Center px="10">
            {keyword}
            <Spacer />
            <Button
              bg="#fc8181"
              onClick={() => {
                navigator.clipboard.writeText(keyword)
              }}
            >
              <MdContentCopy />
            </Button>
          </Center>
        </PopoverBody>
        <PopoverCloseButton />
      </PopoverContent>
    </Portal>
  </Popover>
)

export { SandInfo }
