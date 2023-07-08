import { useEffect, useState } from "react"
import { useData } from "../../Contexts/DataContext"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import CuisineButton from "../../Components/CuisineButton"
import DishCard from "../../Components/DishCard"
import { Link } from "react-router-dom"

const Home = () => {
    const { restaurant_data: { restaurants, cuisines, selected_cuisine
    } } = useData()
    const [selected_dishes, set_selected_dishes] = useState([])

    useEffect(() => {
        set_selected_dishes(
            restaurants.filter(({ cuisine_id }) => cuisine_id === selected_cuisine)
        )
    }, [selected_cuisine])

    return (
        <>
            <Heading>FOOD ORDERING APP</Heading>
            <Text>Select your cuisines:</Text>
            {cuisines.map((cuisine, i) => <CuisineButton key={i} {...cuisine} />)}
            <Flex direction={"column"} gap={10}>
                {selected_cuisine &&
                    selected_dishes.map(({ name, menu, id }) =>
                        <Flex gap={5} p={10} direction={"column"}>
                            <Link to={`/${id}`}>
                                <Text textDecoration={"underline"} fontSize={"xl"} fontWeight={700}>Dishes by {name}</Text>
                            </Link>

                            <Flex className="box" flexWrap={"wrap"} justify={"space-around"} >
                                {menu.map(each => <DishCard {...each} />)}
                            </Flex>
                        </Flex>)}
            </Flex>


        </>
    )
}

export default Home