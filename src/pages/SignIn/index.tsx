import React, { useEffect, useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
  useDisclosure,
  Stack,
  Heading,
  useColorModeValue,
  useToast,
  Fade,
  ScaleFade,
  useBreakpointValue
} from '@chakra-ui/react'

import { ColorModeSwitcher } from 'src/components/ColorModeSwitcher'
import { LoadingTheme } from 'src/components/LoadingTheme'
import { Card } from 'src/components/Card'
import { useAuth } from 'src/hooks/useAuth'

export const SignIn: React.FC = () => {
  const mobile = useBreakpointValue({ base: true, sm: false })
  const [componentLoading, setComponentLoading] = useState(true)
  const { signIn, loginError } = useAuth()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()
  const { isOpen, onToggle } = useDisclosure()
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => setComponentLoading(false), 2000)
  }, [componentLoading])

  useEffect(() => {
    if (loginError) {
      toast({
        title: 'Login error!',
        description: 'Verify your email and password and try again!',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
  }, [loginError])

  async function handleSignIn({ email, password }: any) {
    setLoading(true)

    if (email && password)
      await signIn({
        email,
        password
      })

    setTimeout(() => setLoading(false), 2000)
    history.push('/dashboard')
  }

  return (
    <>
      <Fade unmountOnExit={true} in={componentLoading}>
        <LoadingTheme />
      </Fade>

      <ScaleFade initialScale={0.9} in={!componentLoading}>
        <Box
          bg={useColorModeValue('gray.50', 'inherit')}
          minH="100vh"
          py="12"
          px={{ base: '4', lg: '8' }}
        >
          <Box maxW="md" mx="auto">
            <Heading textAlign="center" size="xl" fontWeight="extrabold">
              Sign in to your account
            </Heading>
            <Card mt="6">
              <form onSubmit={handleSubmit(handleSignIn)}>
                <Stack spacing="6">
                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      placeholder="Email"
                      size="lg"
                      focusBorderColor="purple.500"
                      {...register('email', {
                        required: 'This is required!'
                      })}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.password}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup>
                      <Input
                        id="password"
                        type={isOpen ? 'text' : 'password'}
                        autoComplete="current-password"
                        focusBorderColor="purple.500"
                        size="lg"
                        placeholder="Password"
                        {...register('password', {
                          required: 'This is required!'
                        })}
                      />
                      <InputRightElement>
                        <IconButton
                          bg="transparent !important"
                          variant="ghost"
                          colorScheme="purple"
                          mt="2"
                          mr="2"
                          aria-label={
                            isOpen ? 'Mask password' : 'Reveal password'
                          }
                          icon={isOpen ? <HiEyeOff /> : <HiEye />}
                          onClick={onToggle}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                  </FormControl>

                  <Button
                    name="button-submit"
                    color="white"
                    fontSize="md"
                    size="lg"
                    colorScheme="purple"
                    type="submit"
                    isLoading={isSubmitting || loading}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Card>
          </Box>
        </Box>
      </ScaleFade>
      <ColorModeSwitcher
        position="fixed"
        bottom={0}
        right={0}
        mr={'2rem'}
        mb={mobile ? '5rem' : '2rem'}
      />
    </>
  )
}
