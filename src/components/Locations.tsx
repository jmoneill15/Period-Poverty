import React from "react";
import { Accordion, AccordionButton,AccordionIcon,AccordionPanel, AccordionItem } from "@chakra-ui/accordion";
import { Box, Heading, Spacer } from "@chakra-ui/layout";
import { Location } from "./Location";
import { locationList } from "./locationList";
import { Input, InputGroup,InputLeftAddon } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";

//add imports to add another location

interface LocationProps {
    location: Location[];
}

export function getLocations(locations: Location[]): Location[] {
    const locationCopy = locations.map((locationData: Location): Location => ({...locationData}));
    return locationCopy;
}

const productArray = getLocations(locationList);

export function locationProperty(props: LocationProps){
    const locationList = props;
}

export function Locations(): JSX.Element {
    //embed a map dumbfuck
    return(
        <Box>
            <Heading size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>Locations Providing Free Products</Heading>
            <Accordion p="8vh">
                {locationList.map((location)=>(
                    <AccordionItem key={location.building}>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box>
                                <text>{location.building}</text>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel>
                            Address: {location.address}
                            <Spacer></Spacer>
                            Operating Hours: {location.hours}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion> 
            <Spacer></Spacer>
            <Stack spacing={1}>
                <InputGroup p="7vh">
                    <InputLeftAddon>Building</InputLeftAddon>
                    <Input variant="filled" placeholder=" "></Input>
                </InputGroup>
                <InputGroup p="7vh">
                    <InputLeftAddon>Address</InputLeftAddon>
                    <Input variant="filled" placeholder=" "></Input>
                </InputGroup>
                <InputGroup p="7vh">
                    <InputLeftAddon>Operating Hours</InputLeftAddon>
                    <Input variant="filled" placeholder=" "></Input>
                </InputGroup>
            </Stack>
        </Box>
    );
}
