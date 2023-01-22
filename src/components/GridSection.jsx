import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  SimpleGrid,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";
import { BiUserPin } from "react-icons/bi";

const GridSection = ({ data }) => {
  return (
    <>
      <Tabs w="70%" m="auto" mt="30px">
        <TabList>
          <Flex m="auto" justify={"center"}>
            <Tab>
              <Flex justify="center" gap="5px" alignItems="center">
                <BsFillGrid3X3GapFill fontSize="16px" />
                <Text>POSTS</Text>
              </Flex>
            </Tab>
            <Tab>
              <Flex justify="center" gap="5px" alignItems="center">
                <RxVideo fontSize="18px" />
                <Text>REELS</Text>
              </Flex>
            </Tab>
            <Tab>
              <Flex justify="center" gap="5px" alignItems="center">
                <BiUserPin fontSize="18px" />
                <Text>TAGGED</Text>
              </Flex>
            </Tab>
          </Flex>
        </TabList>

        <TabPanels>
          <TabPanel w="100%" margin="auto">
            <SimpleGrid columns={3} spacing="15px" margin="auto">
              {data.map((el) => (
                <Box key={el.id}>
                  <Image src={el.url} alt="post-img" />
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={3} spacing="15px">
              {data.map((el) => (
                <Box key={el.id}>
                  <Image src={el.url} alt="post-img" />
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={3} spacing="15px">
              {data.map((el) => (
                <Box key={el.id}>
                  <Image src={el.url} alt="post-img" />
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default GridSection;
