import { Center, Text, Grid, Box } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"

const tablewidth = "80vw",
  firstColumn = "120px",
  secondColumn = "30px",
  thirdColumn = "30px",
  fourthColumn = "5vw"

const StatusColumns = ({
  phoneNumber = "Telefone",
  messagesLeft = "Mensagens\nRestantes",
  expiresAt = "Renova às",
}) => (
  <Center>
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      bg="#f72717"
      borderTopRadius="20px"
      fontWeight="semibold"
      color="white"
    >
      <Center minHeight="50px" minWidth={firstColumn}>
        {phoneNumber}
      </Center>
      <Center whiteSpace="pre-wrap" minWidth={secondColumn} textAlign="center">
        {messagesLeft}
      </Center>
      <Center minWidth={thirdColumn}>{expiresAt}</Center>
    </Grid>
  </Center>
)

const ContactStatus = ({
  contact: {
    id,
    credit: { remaining, expiresAt },
  },
}) => (
  <Center py="10px" color="black" bg="gray.300" borderTop="solid 1px">
    <Grid templateColumns="repeat(3, 1fr)" gap={6} minH="20px">
      <Center minWidth={firstColumn}>{id.replace(/\d(?=\d{4})/g, "*")}</Center>
      <Center minWidth={secondColumn} textAlign="center">
        {remaining == 0 ? (
          <Text color="red" fontWeight="bold">
            Aguardar
            <br />
            Renovação
          </Text>
        ) : (
          remaining
        )}
      </Center>
      <Center minWidth={thirdColumn} textAlign="center">
        <Text>
          {expiresAt.match(/\d\d:\d\d/)}
          <br /> {expiresAt.split("T")[0]}
        </Text>
      </Center>
    </Grid>
  </Center>
)

const Status = () => (
  <Box>
    <StatusColumns />
  </Box>
)
export { ContactStatus, StatusColumns, Status }
