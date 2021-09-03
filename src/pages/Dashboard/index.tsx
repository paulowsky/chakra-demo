import React from 'react'
import { Button } from '@chakra-ui/react'
import { useAuth } from 'src/hooks/useAuth'

export const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <>
      <h1>Dashboard</h1>
      <Button
        name="button-submit"
        color="white"
        fontSize="md"
        size="lg"
        colorScheme="purple"
        type="submit"
        onClick={() => signOut()}
      >
        Logout
      </Button>
    </>
  )
}
