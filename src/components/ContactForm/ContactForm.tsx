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
  Textarea,
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import './ContactForm.css';

export const ContactForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  type CreateResponse = {
    name: string;
    description: string;
    id: string;
    createdAt: string;
  };

  const handleClick = async () => {
    const listId = 'YOUR_list_id';

    const response = await fetch(
      `https://api.clickup.com/api/v2/list/${listId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'YOUR_API_KEY_HERE',
        },
        body: JSON.stringify({
          name: 'name',
          description: 'description',
          custom_fields: [
            {
              id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b99a',
              name: 'REFERRED BY',
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as CreateResponse;
    console.log('result is: ', JSON.stringify(result, null, 4));

    return result;
  };

  //title ? maybe a different name
  //application type maybe add more, fine for now
  //potential funding amount checkbox
  //preferred start date put a pin in it

  return (
    <form ref={form} onSubmit={handleClick}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          {...register('Name', { required: true, maxLength: 80 })}
        />
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input {...register('Title', { required: true })} />
      </FormControl>
      <FormControl id="dept" isRequired>
        <FormLabel>College / Department</FormLabel>
        <Select placeholder="Select option">
          <option value="busm">Chobanian & Advesian School of Medicine</option>
          <option value="khc">Kilachand Honors College</option>
          <option value="cas">College of Arts & Sciences</option>
          <option value="com">College of Communication</option>
          <option value="eng">College of Engineering</option>
          <option value="cfa">College of Fine Arts</option>
          <option value="cgs">College of General Studies</option>
          <option value="cds">Faculty of Computing & Data Sciences</option>
          <option value="pardee">
            Frederick S. Pardee School of Global Studies
          </option>
          <option value="gms">Graduate Medical Sciences</option>
          <option value="grs">Graduate School of Arts & Sciences</option>
          <option value="sdm">
            Henry M. Goldman School of Dental Medicine
          </option>
          <option value="met">Metropolitan College & Extended Education</option>
          <option value="qst">Questrom School of Business</option>
          <option value="sar">
            Sargent College of Health & Rehabilitation Sciences
          </option>
          <option value="sha">School of Hospitality Administration</option>
          <option value="sph">School of Public Health</option>
          <option value="ssw">School of Social Work</option>
          <option value="sth">School of Theology</option>
          <option value="law">School of Law</option>
          <option value="sed">
            Wheelock College of Education & Human Development
          </option>
          <option value="military">Division of Military Education</option>
          <option value="other">Other</option>
        </Select>
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
        <Textarea
          size="sm"
          placeholder="Include your goals, your current tech stack, your motivations, as well as any questions or comments"
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
      <FormControl id="fundingSource" isRequired>
        <FormLabel>Funding Source</FormLabel>
        <RadioGroup>
          <VStack>
            <Checkbox>Internally funded</Checkbox>
            <Checkbox>Partially funded, needs some assistance</Checkbox>
            <Checkbox>Fully needs assistance for funding</Checkbox>
            <Checkbox>Other</Checkbox>
          </VStack>
        </RadioGroup>
      </FormControl>
      <FormControl id="fundingAmount" isRequired>
        <FormLabel>Funding Amount</FormLabel>
        <Input {...register('Funding Amount', { required: true })} />
      </FormControl>
      <FormControl id="startDate" isRequired>
        <FormLabel>Preferred Delivery Date</FormLabel>
        <Input type="date" {...register('Delivery Date', { required: true })} />
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
      <Button mt={4} colorScheme="orange" type="submit" size="lg">
        Submit
      </Button>
    </form>
  );
};
