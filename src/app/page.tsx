"use client";

import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import { GlobalContextProvider, useGlobalContext } from '@/context/store';
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  router.push('/framework/dashboard')
  const { username, setUsername } = useGlobalContext();
  useEffect(() => {
    setUsername('afauzan')
  })
  return (
    <>
      <text>{username}</text>
    </>
  )
}