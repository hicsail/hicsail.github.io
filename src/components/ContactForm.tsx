import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  // add mailing

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="name" isRequired>
        <FormLabel>Your Name</FormLabel>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Your Email</FormLabel>
        <Input
          type="email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </FormControl>

      <FormControl id="subject" isRequired>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          {...register('Subject', { required: true, maxLength: 80 })}
        />
      </FormControl>

      <FormControl id="message" isRequired>
        <FormLabel>Your message</FormLabel>
        <Input type="text" {...register('Message', { required: true })} />
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};
