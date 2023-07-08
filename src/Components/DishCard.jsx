import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const DishCard = ({ name, imgSrc, price, qty, id }) => {
    return (
        <>
            <Card maxW='xs'>
                <Link to={`/${id}`}>
                    <CardBody pb={20}>
                        <Image
                            src={imgSrc}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            height="200px" // Set a fixed height for the image
                            w={"15rem"}
                            objectFit="cover"
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{name}</Heading>
                            {/* <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text> */}
                            <Text color={"grey"} fontSize='md'>
                                Rs.{price} for {qty}
                            </Text>
                            <Text color={"grey"} fontSize='md'>
                                Pizza palace
                            </Text>
                        </Stack>


                    </CardBody>
                </Link>
            </Card>
        </>
    )
}

export default DishCard