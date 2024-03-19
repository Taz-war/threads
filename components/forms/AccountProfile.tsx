"use client"
import React from 'react'
import { Form } from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from '@/lib/validations/user';

type Props={
  user:{
    id:string,
    objectId: string,
    username: string,
    name: string,
    bio: string,
    image: string
  };
  btnTitle: string
}

const AccountProfile = ({user,btnTitle}:Props) => {
  const form = useForm({
    resolver : zodResolver(UserValidation),
    defaultValues:{
      profile_photo:'',
      name:'',
      username:'',
      bio:''
    }
  })
  return (
    <Form>
      Account Profile
    </Form>
  )
}

export default AccountProfile
