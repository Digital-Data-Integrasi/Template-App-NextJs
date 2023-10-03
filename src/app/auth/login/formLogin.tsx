"use client"
import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormHelperText,
    Input,
    InputGroup,
    InputLeftElement,
    chakra,
    Text,
    HStack,
    VStack
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLogin } from "@/model/userLogin";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaUserAlt, FaLock, FaGoogle } from "react-icons/fa"

const CFauserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const FormLogin = () => {
    const schema = yup.object().shape({
        email: yup.string().required('Please enter your valid email').label("Email"),
        password: yup.string().min(6).max(16).required("Please enter your Password").label('Password')
    })
    const defaultValueForm: userLogin = {
        email: "",
        password: ""
    };
    const {
        handleSubmit,
        register,
        control,
        formState: { errors, isSubmitting },
        setValue,
        getValues
    } = useForm({
        defaultValues: defaultValueForm,
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const submitLogin = (f: userLogin) => {
        console.log(f)
    };
    return (
        <>

            <Card>
                <CardBody>
                    <FormControl isInvalid={"email" in errors}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<CFauserAlt color="gray.300" />} />
                            <Input placeholder="Email" type="email" {...register("email")} />
                        </InputGroup>
                        <FormHelperText color={"red.400"}>{errors.email?.message}</FormHelperText>
                    </FormControl>
                    <FormControl isInvalid={"password" in errors}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<CFaLock color="gray.300" />} />
                            <Input placeholder="Password" type="password" {...register("password")} />
                        </InputGroup>
                        <FormHelperText color={"red.400"}>{errors.password?.message}</FormHelperText>
                        <FormHelperText textAlign="right">
                            <Link href={'/auth/login'} className="text-blue-500 hover:underline text-sm">Forgot Password?</Link>
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <VStack spacing={2}>
                        <Button bg={'green.400'} color={"white"} w={"100%"} h={10} onClick={handleSubmit(submitLogin)}>Login</Button>
                        <Text className="text-gray-400 font-semibold">OR</Text>
                        <Button colorScheme="facebook" w={"100%"} h={10} leftIcon={<FaGoogle />}>SignOn</Button>
                    </VStack>
                    <br />
                    <Text className="text-gray-500 text-xs">Doesn't Have an Account?<Link href={'/auth/registration'} className="text-blue-500 hover:underline right-10"> Sign Up</Link></Text>
                </CardBody>
            </Card>
        </>
    )
};

export default FormLogin;