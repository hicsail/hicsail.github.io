import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Checkbox,
  RadioGroup,
  VStack,
  Select,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import './ContactForm.css';

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
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
        <FormHelperText>First Name</FormHelperText>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
        <FormHelperText>Last Name</FormHelperText>
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input {...register('Title', { required: true })} />
      </FormControl>
      <FormControl id="dept" isRequired>
        <FormLabel>Department</FormLabel>
        <Input {...register('Department', { required: true })} />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </FormControl>
      <FormControl id="project" isRequired>
        <FormLabel>Project Title</FormLabel>
        <Input {...register('Project Title', { required: true })} />
      </FormControl>
      <FormControl id="description" isRequired>
        <FormLabel>Project Description</FormLabel>
        <Input
          width="100%"
          type="text"
          {...register('Message', { required: true })}
        />
      </FormControl>
      <FormControl id="pdf">
        <FormLabel>
          Option: you may also choose to upload a PDF file for the project
          description.
        </FormLabel>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Input type="file" width="45%" />
          <FormHelperText
            lineHeight="30px"
            fontStyle="italic"
            fontSize="0.85rem"
          >
            Max. file size: 100 MB.
          </FormHelperText>
        </Box>
      </FormControl>
      <FormControl id="motivation" isRequired>
        <FormLabel>
          How will this project advance your research, and what outcomes and
          benefits do you expect from your project?
        </FormLabel>
        <Input
          width="100%"
          type="text"
          {...register('Message', { required: true })}
        />
      </FormControl>
      <FormControl id="type" isRequired>
        <FormLabel>Application Type (check all that apply):</FormLabel>
        <RadioGroup>
          <VStack>
            <Checkbox>Content Management System, Blog, or Forum</Checkbox>
            <Checkbox>Web Interface or Front End</Checkbox>
            <Checkbox>Database or Back End Service</Checkbox>
            <Checkbox>Data Aggregation and Analysis</Checkbox>
            <Checkbox>Mobile Application</Checkbox>
            <Checkbox>Other Custom Software Application</Checkbox>
            <Checkbox>I don't know</Checkbox>
          </VStack>
        </RadioGroup>
      </FormControl>
      <Box
        fontSize="15px"
        fontWeight="600"
        marginBottom="15px"
        fontFamily="Segoe UI, Helvetica Neue, sans-serif"
      >
        Content Management System, Blog, or Forum
        <blockquote>
          You would like to allow a group or community to assemble, present, or
          record information, and existing tools can be used for this purpose
          with minimal customization.{' '}
        </blockquote>
        Web Interface or Front End
        <blockquote>
          Local or third-party service(s), database(s), or platform(s) are
          already available, and you are looking to expose these to users via a
          web interface that works in a standard browser.
        </blockquote>
        Database or Back End Service
        <blockquote>
          You would like to set up a custom database or web service to store and
          deliver information.
        </blockquote>
        Data Aggregation and Analysis
        <blockquote>
          You would like to assemble data and perform scalable queries or
          analyses on that data.
        </blockquote>
        Mobile Application
      </Box>
      <FormControl id="platforms" isRequired>
        <FormLabel>Preferred Platforms or Tools</FormLabel>
        <Input width="100%" type="text" />
      </FormControl>
      <FormControl id="fundingSource" isRequired>
        <FormLabel>Funding Source</FormLabel>
        <Input {...register('Funding Source', { required: true })} />
      </FormControl>
      <FormControl id="fundingAmount" isRequired>
        <FormLabel>Funding Amount</FormLabel>
        <Input {...register('Funding Amount', { required: true })} />
      </FormControl>
      <FormControl id="budget" isRequired>
        <FormLabel>Budget:</FormLabel>
        <FormHelperText>
          Please use the following format: <br />* $____ per month for ____
          months between ____ and ____
          <br />* $____ per year for ____ years between ____ and ____ <br />* I
          don't know
        </FormHelperText>
        <Input width="100%" type="text" />
      </FormControl>
      <FormControl id="startDate" isRequired>
        <FormLabel>Preferred Start Date</FormLabel>
        <Input type="date" {...register('Start Date', { required: true })} />
      </FormControl>
      <FormControl id="staff" isRequired>
        <FormLabel>Proposed staff for the work:</FormLabel>
        <RadioGroup>
          <VStack>
            <Checkbox>Undergraduate Student</Checkbox>
            <Checkbox>Graduate Student</Checkbox>
            <Checkbox>Software Developer</Checkbox>
            <Checkbox>I dont know</Checkbox>
            <Checkbox>
              <Input size="sm" placeholder="Other" type="text" />
            </Checkbox>
          </VStack>
        </RadioGroup>
      </FormControl>
      <FormControl id="referral">
        <FormLabel>How were you referred to this resource?</FormLabel>
        <Select placeholder="Choose">
          <option value="option1">Faculty Member</option>
          <option value="option2">Student</option>
          <option value="option3">Event and/or Talk</option>
          <option value="option4">HIC Website</option>
          <option value="option5">SAIL Website</option>
          <option value="option6">Other</option>
        </Select>
      </FormControl>
      <FormControl id="comments">
        <FormLabel>Questions or Comments</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button mt={4} colorScheme="orange" type="submit" size="lg">
        Submit
      </Button>
    </form>
  );
};
