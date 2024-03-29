import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormControl id="name" isRequired>
        <FormLabel fontSize="1.5rem">Your Name</FormLabel>
        <Input
          width={{ base: '100%', md: '85%' }}
          borderRadius="0"
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel fontSize="1.5rem">Your Email</FormLabel>
        <Input
          borderRadius="0"
          type="email"
          width={{ base: '100%', md: '85%' }}
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </FormControl>
      <FormControl id="subject" isRequired>
        <FormLabel fontSize="1.5rem">Subject</FormLabel>
        <Input
          borderRadius="0"
          type="text"
          width={{ base: '100%', md: '85%' }}
          {...register('Subject', { required: true, maxLength: 80 })}
        />
      </FormControl>
      <FormControl id="message" isRequired>
        <FormLabel fontSize="1.5rem">Your message</FormLabel>
        <Input
          width={{ base: '100%', md: '85%' }}
          borderRadius="0"
          type="text"
          {...register('Message', { required: true })}
        />
      </FormControl>
      <Button mt={4} colorScheme="orange" type="submit" size="lg">
        Submit
      </Button>
    </form>
  );
};
