import { Link, useParams } from "react-router-dom"
import { useData } from "../../Contexts/DataContext"
import { Avatar, Box, Button, Divider, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react"
import AddReviewModal from "../../Components/AddReviewModal"

const DishDetail = () => {
    const { restaurant_id } = useParams()
    const { restaurant_data: { restaurants, cuisines, selected_cuisine
    } } = useData()

    const detailed_dish = restaurants?.filter(({ id }) => id === +restaurant_id)[0]

    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log("aman", detailed_dish.ratings.reduce((sum, { rating }) => {
        return sum = sum + rating;
    }, 0))
    return (
        <Box maxW={"40rem"} m={"auto"}>
            <Link to="/">
                <Button mt={4} mb={5}>⬅️Go Back</Button>
            </Link>

            <Flex justify={"space-between"}>
                <Box>
                    <Heading>{detailed_dish.name}</Heading>
                    <Text>{detailed_dish.description}</Text>
                    <Text>{detailed_dish.menu.map(({ name }) => name).join(', ')}</Text>

                    <Text>{detailed_dish.address}</Text>
                    <Text> Average rating: {detailed_dish.ratings.reduce((sum, { rating }) => {
                        return sum = sum + rating;
                    }, 0) / detailed_dish.ratings.length}</Text>
                </Box>
                <Button onClick={onOpen}>Add</Button>
            </Flex>

            <Divider border={"1px solid black"} />
            <Text fontSize={"xl"} fontWeight={500} textDecoration={"underline"}>Reviews</Text>
            {detailed_dish.ratings.map(({ revName, rating, comment, pp }) => <Flex justify={"space-between"} borderBottom={"1px solid black"} p={"1rem"}>
                <Flex gap={3}>
                    <Avatar src={pp} />
                    <Box>
                        <Text>{revName}</Text>
                        <Text>{comment}</Text>
                    </Box>

                </Flex>
                <Box p={1} alignSelf={"center"} bg={"green"} color={"yellow"}>{rating} ⭐</Box>
            </Flex>)}



            <Divider border={"1px solid black"} />
            <AddReviewModal id={detailed_dish.id} isOpen={isOpen} onClose={onClose} />
        </Box>

    )
}

export default DishDetail