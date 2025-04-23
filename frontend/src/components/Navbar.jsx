import React from 'react'
import { Button, Container, Flex, Text, Group} from '@mantine/core'
import { Link } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <Container maw={"1140px"} p={15}>
      <Flex h={"16px"} align={"center"} justify={'space-between'}
        direction={{
          base: "column",
          sm: "row"
        }}>

        <Text
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
          <Link to={"/"}>Home</Link>
        </Text>

        <Group>
        <Link to={"/create"}>
          <Button><FaCirclePlus /></Button>
        </Link>
          <Button>Light/Dark</Button>
        </Group>

      </Flex>
    </Container>
  )
}

export default Navbar