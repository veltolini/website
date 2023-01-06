import { Flex, FormControl, FormHelperText, FormLabel, Image, Input, InputGroup, InputLeftElement, Show, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { EmailIcon, PhoneIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";


const Products: React.FC = () => {
    return (
        <Layout>
            <Show above='md'>
                <Flex flexDirection="column" width='100%' gap={5}>
                    <Flex>
                        <Image src="./productgraphic.jpg"/>
                    </Flex>
                    <Flex>
                        <Tabs isFitted>
                            <TabList bgColor="green10" height='7rem'>
                                <Tab>
                                    <Image src='./freshchat.svg'/>
                                </Tab>
                                <Tab>
                                    <Image src='./freshdesk.svg'/>
                                </Tab>
                                <Tab>
                                    <Image src='./freshsales.svg'/>
                                </Tab>
                                <Tab>
                                    <Image src='./freshservice.svg'/>
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Flex flexDirection="row" gap={3}>
                                        <Flex flexDirection="column" width='50%' gap={2}>
                                            <Text fontSize="5xl" lineHeight='3.5rem' fontWeight="bold">
                                                Hank dem inn og behold dem.
                                            </Text>
                                            <Text fontSize="xl">
                                            Freshchat er en moderne chatprogramvare som er laget for team som ønsker å gjøre mer for kundene. Med Freshchat gjør du besøkende om til leads og brukere til å bli fornøyde kunder.
                                            </Text>
                                        </Flex>
                                        <Flex flexDirection="column" width="50%" gap={2}>
                                            <Text textAlign="center" fontSize='3xl' fontWeight="bold">
                                                Start din 30-dagers gratis prøveperiode.
                                            </Text>
                                            <FormControl>
                                                <Stack direction="row" spacing={2}>
                                                    <InputGroup alignItems="center">
                                                        <InputLeftElement children={<SearchIcon/>}/>
                                                        <Input type='name' placeholder="Fornavn" isRequired/>
                                                    </InputGroup>
                                                    <InputGroup alignItems="center">
                                                        <Input type='name' placeholder="Etternavn" isRequired/>
                                                    </InputGroup>
                                                </Stack>
                                                <Stack direction="column" spacing={0} alignItems="center">
                                                <InputGroup >
                                                    <InputLeftElement children={<EmailIcon/>} />
                                                    <Input type='email' placeholder="E-post" isRequired/>
                                                </InputGroup>
                                                <InputGroup >
                                                    <InputLeftElement children={<SettingsIcon/>} />
                                                    <Input type='name' placeholder="Bedrift" isRequired/>
                                                </InputGroup>
                                                <InputGroup >
                                                    <InputLeftElement children={<PhoneIcon/>} />
                                                    <Input type='tel' placeholder="Telefonnummer" isRequired/>
                                                </InputGroup>
                                                </Stack>
                                            </FormControl>
                                        </Flex>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    
                                </TabPanel>
                                <TabPanel>
                                
                                </TabPanel>
                                <TabPanel>
                                
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Flex>
            </Show>
            <Show below='md'>

            </Show>
        </Layout>
    );
};

export default Products;