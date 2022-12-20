import React, { useState } from "react";
import {
  Text,
  FormControl,
  Stack,
  Button,
  FormLabel,
  Input,
  useToast,
  Container,
} from "@chakra-ui/react";
import { NFT } from "../../algorand/nft";
import { useForm } from "react-hook-form";

const initLoader = {
  loading: false,
};

const Create = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      student_id: "",
      student_name: "",
      course: "",
      grade: "",
    },
  });

  const [loading, setLoading] = useState(initLoader.loading);
  const [createdId, setCreatedId] = useState(0);
  const [nft, setNFT] = useState();
  const toast = useToast();

  async function createNft(studentname, student_id) {
    const META_URL = process.env.META_URL;

    const cid = META_URL + student_id;
    toast({
      title: "Comfirm",
      position: "top",
      description: "Please Confirm The Transaction On Your Wallet",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
    console.log("NFT CREATING");
    const result = await NFT.create(
      props.sw.wallet,
      props.activeConfig,
      cid,
      studentname
    );

    setNFT(result);
    setCreatedId(result);
    return result;
  }

  const onSubmit = async (data) => {
    createNft(data.student_name, data.student_id);
  };

  return (
    <>
      <Container maxW="6xl">
        <Stack
          px={{ base: "1rem", md: "15rem" }}
          mt="8rem"
          alignContent="center"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <Text
                fontStyle="normal"
                fontWeight="700"
                fontSize="30px"
                lineHeight="36px"
              >
                Student Details
              </Text>

              <FormControl>
                <FormLabel>Student Id</FormLabel>
                <Input
                  type="text"
                  maxW="full"
                  h="3rem"
                  {...register("student_id", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.student_id && errors.student_id.type === "required" && (
                  <Text as={"span"} color="red" fontSize="15px">
                    student ID is required
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Student name</FormLabel>
                <Input
                  type="text"
                  w="full"
                  h="3rem"
                  {...register("student_name", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.student_name &&
                  errors.student_name.type === "required" && (
                    <Text as={"span"} color="red" fontSize="15px">
                      student name is required
                    </Text>
                  )}
              </FormControl>
              <FormControl>
                <FormLabel>Course</FormLabel>
                <Input
                  type="text"
                  w="full"
                  h="3rem"
                  {...register("course", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.course && errors.course.type === "required" && (
                  <Text as={"span"} color="red" fontSize="15px">
                    student course is required
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Grade</FormLabel>
                <Input
                  type="text"
                  w="full"
                  h="3rem"
                  {...register("grade", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.grade && errors.grade.type === "required" && (
                  <Text as={"span"} color="red" fontSize="15px">
                    student grade is required
                  </Text>
                )}
              </FormControl>
            </Stack>
            <Button
              mt="2rem"
              h="3.5rem"
              w="full"
              color="#ffffff"
              bg="#2C66B8"
              _hover={{ bg: "#2C66B8" }}
              type="submit"
              isLoading={loading}
              loadingText="creating student credentials"
              _loading={{ bg: "#2C66B8", color: "#ffffff" }}
            >
              Submit
            </Button>
          </form>
        </Stack>
      </Container>
    </>
  );
};

export default Create;
