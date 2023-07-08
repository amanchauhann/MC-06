import { Button } from "@chakra-ui/react"
import { useData } from "../Contexts/DataContext"

const CuisineButton = ({ name, id }) => {
    const { restaurant_data: { restaurants, cuisines
    }, dispatch_restaurant } = useData()
    const cuisine_handler = (id) => {
        dispatch_restaurant({ type: "SELECT_CUISINE", payload: id })
    }
    return (
        <>
            <Button onClick={() => cuisine_handler(id)} m={2} colorScheme='red' variant='solid'>
                {name}
            </Button>
        </>
    )
}

export default CuisineButton