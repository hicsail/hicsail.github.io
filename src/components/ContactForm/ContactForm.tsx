import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import './ContactForm.css';

const styles = {
  formHelperStyle: {},
};

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
        <FormLabel fontWeight="900" fontSize="1.5rem">
          Name
        </FormLabel>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
        <FormHelperText sx={{ marginBottom: '10px', fontSize: '15px' }}>
          First Name
        </FormHelperText>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
        <FormHelperText sx={{ marginBottom: '10px', fontSize: '15px' }}>
          Last Name
        </FormHelperText>
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel fontSize="1.5rem">Title</FormLabel>
        <Input {...register('Title', { required: true })} />
      </FormControl>
      <FormControl id="dept" isRequired>
        <FormLabel fontSize="1.5rem">Department</FormLabel>
        <Input {...register('Department', { required: true })} />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel fontSize="1.5rem">Email</FormLabel>
        <Input
          borderRadius="0"
          type="email"
          width={{ base: '100%', md: '85%' }}
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </FormControl>
      <FormControl id="project" isRequired>
        <FormLabel fontSize="1.5rem">Project Title</FormLabel>
        <Input {...register('Project Title', { required: true })} />
      </FormControl>
      <FormControl id="description" isRequired>
        <FormLabel fontSize="1.5rem">Project Description</FormLabel>
        <Input
          width="100%"
          height={{ base: '200px', md: '150px' }}
          borderRadius="0"
          type="text"
          {...register('Message', { required: true })}
        />
      </FormControl>
      <FormControl id="pdf" isRequired>
        <FormLabel fontSize="1.5rem">Project Description</FormLabel>
        <Input type="text" {...register('Message', { required: true })} />
      </FormControl>
      <Button mt={4} colorScheme="orange" type="submit" size="lg">
        Submit
      </Button>
    </form>
  );
};
