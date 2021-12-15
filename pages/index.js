import Link from "next/link"
import Image from "next/image"
import {
  Flex,
  Center,
  Text,
  Button,
  Spacer,
  Box,
  Stack,
  VStack,
  Grid,
} from "@chakra-ui/react"

import extendTheme from "../theme/index"
import { baseUrl, fetchApi } from "../utils/fetchApi"

import {
  ContactStatus,
  StatusColumns,
  Status,
} from "../components/ContactStatus"

import { SandInfo } from "../components/KeyInfo"

export default function Home({ contacts, channel, keyword }) {
  return (
    <Box paddingTop="4" paddingBottom="40">
      <Center>
        <Box>
          <Box>
            <StatusColumns />
          </Box>
          <Box>
            {contacts.map((id) => (
              <ContactStatus contact={id} key={id.id} />
            ))}
            <Box h="10px" bg="#f72717" borderBottomRadius="10px" />
          </Box>
        </Box>
      </Center>
      <Center paddingTop="4">
        <SandInfo variant="secondary" channel={channel} keyword={keyword} />
      </Center>
    </Box>
  )
}

export async function getStaticProps() {
  const zenStatus = await fetchApi(baseUrl).then((response) => {
    return response
  })
  return {
    props: {
      channel: zenStatus?.channel,
      keyword: zenStatus?.keyword,
      contacts: zenStatus?.contacts,
    },
  }
}
