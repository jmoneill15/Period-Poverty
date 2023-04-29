import React from "react";
import { Accordion, AccordionButton,AccordionIcon,AccordionPanel, AccordionItem } from "@chakra-ui/accordion";
import { Box, Heading, Spacer } from "@chakra-ui/layout";
import { Location } from "./Location";
import { locationList } from "./locationList";

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
    
            <div>locations</div>  
        </Box>
    );
}
