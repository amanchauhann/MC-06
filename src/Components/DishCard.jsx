import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"

const DishCard = ({ name, imgSrc, price, qty, id }) => {
    return (
        <>
            <Card maxW='xs'>
                <CardBody pb={0}>
                    <Image
                        src={imgSrc}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
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
            </Card>
        </>
    )
}

export default DishCard