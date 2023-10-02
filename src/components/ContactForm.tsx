import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
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
        <FormLabel fontSize="1.2rem" fontWeight="700">
          Name
        </FormLabel>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
          marginBottom="4px"
        />
        <FormHelperText>First Name</FormHelperText>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
        <FormHelperText>Last Name</FormHelperText>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel fontSize="1.2rem" fontWeight="700">
          Title
        </FormLabel>
        <Input
          {...register('Title', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel fontSize="1.2rem" fontWeight="700">
          Department
        </FormLabel>
        <Input
          {...register('Department', { required: true, pattern: /^\S+@\S+$/i })}
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
