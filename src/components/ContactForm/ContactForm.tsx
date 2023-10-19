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
              type: 'drop_down',
              type_config: {
                default: 0,
                placeholder: null,
                new_drop_down: true,
                options: [
                  {
                    type: 'text',
                    value: 'Hariri Director',
                    id: '1bcb2eb2-1ed3-4690-b2de-c31619186176',
                    name: 'Hariri Director',
                    color: '#3397dd',
                    orderindex: 0,
                    workspace_id: '14225407',
                  },
                  {
                    type: 'text',
                    value: 'Hariri Staff',
                    id: 'fb27b74f-ccdd-428d-bba3-24ba9526a25b',
                    name: 'Hariri Staff',
                    color: '#04A9F4',
                    orderindex: 1,
                    workspace_id: '14225407',
                  },
                  {
                    type: 'text',
                    value: 'SAIL Collaborator',
                    id: '41c83167-e51c-4852-97d0-78e3f3017f1e',
                    name: 'SAIL Collaborator',
                    color: '#0231E8',
                    orderindex: 2,
                    workspace_id: '14225407',
                  },
                  {
                    type: 'text',
                    value: 'SAIL Website',
                    id: '65947498-c700-4c29-92a6-fe52e55af229',
                    name: 'SAIL Website',
                    color: '#f9d900',
                    orderindex: 3,
                    workspace_id: '14225407',
                  },
                  {
                    type: 'text',
                    value: 'SAIL/Hariri Presentation',
                    id: '2bd82477-62ca-43b7-81b1-41b7615c5761',
                    name: 'SAIL/Hariri Presentation',
                    color: '#ff7800',
                    orderindex: 4,
                    workspace_id: '14225407',
                  },
                  {
                    type: 'text',
                    value: 'SAIL Staff Network Connection',
                    id: '770ebc6f-ae48-4500-b016-77b48dbd51c8',
                    name: 'SAIL Staff Network Connection',
                    color: '#1bbc9c',
                    orderindex: 5,
                    workspace_id: '14225407',
                  },
                  {
                    type: 'text',
                    value: 'SAIL Direct Outreach',
                    id: 'f64cf7bb-9962-4df3-aa84-0b44d9d5e573',
                    name: 'SAIL Direct Outreach',
                    color: '#800000',
                    orderindex: 6,
                    workspace_id: '14225407',
                  },
                  {
                    type: 'text',
                    value: 'IS&T',
                    id: 'daf22744-5f28-4a1d-a9a6-df6bca6d743f',
                    name: 'IS&T',
                    color: null,
                    orderindex: 7,
                    workspace_id: '14225407',
                  },
                ],
              },
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

  return (
    <form ref={form} onSubmit={handleClick}>
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
