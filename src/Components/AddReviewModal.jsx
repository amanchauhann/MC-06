import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useData } from "../Contexts/DataContext";

const AddReviewModal = ({ isOpen, onClose, id }) => {
    const { restaurant_data: { restaurants, cuisines, selected_cuisine
    }, dispatch_restaurant } = useData()
    const [add_review, set_add_review] = useState({
        id: id,
        review: {
            rating: null,
            comment: "",
            pp: "https://robohash.org/dark",
            revName: "Aman"
        }
    })
    const ratingOptions = [1, 2, 3, 4, 5];
    console.log(add_review)
    const add_review_handler = () => {
        console.log("a")
        dispatch_restaurant({ type: "ADD_REVIEW", payload: add_review })
        onClose()


    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex mb={5} justify={"space-between"}>
                            <Text>Ratings:</Text>
                            <select id="ratingsSelect" onChange={(e) => set_add_review(prev => ({
                                ...prev,
                                review: {
                                    ...prev.review,
                                    rating: e.target.value
                                }
                            }))}>
                                <option value="">Select a rating</option>
                                {ratingOptions.map((rating) => (
                                    <option key={rating} value={rating}>{rating}</option>
                                ))}
                            </select>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Text>Comment: </Text>
                            <Input w={"200px"} type={"text"} value={add_review.review.comment} onChange={(e) => set_add_review(prev => ({
                                ...prev,
                                review: {
                                    ...prev.review,
                                    comment: e.target.value
                                }

                            }))} />
                        </Flex>

                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} colorScheme='blue' onClick={add_review_handler}>Add review</Button>
                        <Button variant='ghost' onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddReviewModal