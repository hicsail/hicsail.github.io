import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  RadioGroup,
  VStack,
  Select,
  Textarea,
  Radio,
  InputLeftAddon,
  InputGroup,
} from '@chakra-ui/react';
import * as React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useRef } from 'react';
import './ContactForm.css';
import data from '../../utils/data/data.json';

type Input = {
  name: string;
  title: string;
  college: string;
  email: string;
  phone: string;
  projectTitle: string;
  projectDescription: string;
  applicationType: string;
  fundingSource: string;
  fundingAmount: string;
  deliveryDate: Date;
  referral: string;
};

type CreateResponse = {
  name: string;
  description: string;
  id: string;
  createdAt: string;
};

const onSubmit: SubmitHandler<Input> = async (data) => {
  const apiKey = 'pk_48193489_A5GVMEA22YKXE7PJ8Z98KT1CNZ8GR86H';
  const collaboratorsId = '901100186724';
  const projectsId = '901100186744';
  const collaborator = await fetch(
    `https://api.clickup.com/api/v2/list/${collaboratorsId}/task`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      body: JSON.stringify({
        name: data.projectTitle,
        description: data.projectDescription,
        custom_fields: [
          {
            id: '3fc4c175-b322-4863-a0f8-f398c79a062f',
            value: data.college,
          },
          {
            id: '8db8f1f3-1f3d-4cc8-8fe9-eb644d1025bc',
            value: data.title,
          },
          {
            id: '9d420afa-4355-4eb6-840a-e3a8add43825',
            value: data.phone,
          },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b99a',
            value: data.referral,
          },
        ],
      }),
    },
  );

  const response = await fetch(
    `https://api.clickup.com/api/v2/list/${projectsId}/task`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      body: JSON.stringify({
        name: data.projectTitle,
        description: data.projectDescription,
        custom_fields: [
          {
            id: '3fc4c175-b322-4863-a0f8-f398c79a062f',
            value: data.college,
          },
          { id: '5aefb3dc-97ea-4587-948d-302ba8b62fa2', value: data.phone },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b99a',
            value: data.referral,
          },
          { id: '616425f7-8385-4c54-8288-fd1074c02a35', value: data.email },
        ],
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  if (!collaborator.ok) {
    throw new Error(`Error! status: ${collaborator.status}`);
  }

  const result1 = (await response.json()) as CreateResponse;
  console.log('result is: ', JSON.stringify(result1, null, 4));
  const result2 = (await collaborator.json()) as CreateResponse;
  console.log('result is: ', JSON.stringify(result2, null, 4));

  return result2;
};

export const ContactForm: React.FC = () => {
  const { control, register, handleSubmit } = useForm<Input>();
  const form = useRef<any>();
  const departments = data['departments'];

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          {...register('name', { required: true, maxLength: 80 })}
        />
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input {...register('title', { required: true })} />
      </FormControl>
      <FormControl id="dept" isRequired>
        <FormLabel>College / Department</FormLabel>
        <Select {...register('college')} placeholder="Select option">
          {departments.map((dept: { value: string; label: string }) => (
            <option key={dept.label} value={dept.value}>
              {dept.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </FormControl>
      <FormControl id="phone" isRequired>
        <FormLabel>Phone Number</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+1" />
          <Input
            type="tel"
            placeholder="Phone Number"
            {...register('phone', {
              required: true,
              pattern: /^[0-9]{3}[-\s\.]?[0-9]{4,6}/,
            })}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="project" isRequired>
        <FormLabel>Project Title</FormLabel>
        <Input {...register('projectTitle', { required: true })} />
      </FormControl>
      <FormControl id="description" isRequired>
        <FormLabel>Project Description</FormLabel>
        <Textarea
          {...register('projectDescription')}
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
      <FormControl id="applicationType">
        <FormLabel>Application Type (check one):</FormLabel>
        <Controller
          control={control}
          name="applicationType"
          render={({ field }) => (
            <RadioGroup
              onChange={field.onChange}
              value={field.value}
              colorScheme="yellow"
            >
              <VStack>
                <Radio value="Content Management System, Blog, or Forum">
                  Content Management System, Blog, or Forum
                </Radio>
                <Radio value="Web Interface or Front End">
                  Web Interface or Front End
                </Radio>
                <Radio value="Database or Back End Service">
                  Database or Back End Service
                </Radio>
                <Radio value="Data Aggregation and Analysis">
                  Data Aggregation and Analysis
                </Radio>
                <Radio value="Mobile Application">Mobile Application</Radio>
                <Radio value="Other Custom Software Application">
                  Other Custom Software Application
                </Radio>
                <Radio value="I don't know">I don't know</Radio>
              </VStack>
            </RadioGroup>
          )}
        />
      </FormControl>
      <Box id="boxApplicationType">
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
        <Controller
          control={control}
          name="fundingSource"
          render={({ field }) => (
            <RadioGroup
              onChange={field.onChange}
              value={field.value}
              colorScheme="green"
            >
              <VStack>
                <Radio value="fully">Internally funded</Radio>
                <Radio value="partially">
                  Partially funded, needs some assistance
                </Radio>
                <Radio value="zero">Fully needs assistance for funding</Radio>
                <Radio value="other">Other</Radio>
              </VStack>
            </RadioGroup>
          )}
        />
      </FormControl>
      <FormControl id="fundingAmount" isRequired>
        <FormLabel>Funding Amount</FormLabel>
        <Input {...register('fundingAmount', { required: true })} />
      </FormControl>
      <FormControl id="startDate" isRequired>
        <FormLabel>Preferred Delivery Date</FormLabel>
        <Input type="date" {...register('deliveryDate', { required: true })} />
      </FormControl>
      <FormControl id="referral">
        <FormLabel>How were you referred to this resource?</FormLabel>
        <Select placeholder="Choose" {...register('referral')}>
          <option value="">Faculty Member</option>
          <option value="">Student</option>
          <option value="">Event and/or Talk</option>
          <option value="65947498-c700-4c29-92a6-fe52e55af229">
            SAIL/HIC Website
          </option>
          <option value="2bd82477-62ca-43b7-81b1-41b7615c5761">
            SAIL/Hariri Presentation
          </option>
          <option value="770ebc6f-ae48-4500-b016-77b48dbd51c8">
            SAIL Staff Network Connection
          </option>
          <option value="f64cf7bb-9962-4df3-aa84-0b44d9d5e573">
            SAIL Direct Outreach
          </option>
          <option value="41c83167-e51c-4852-97d0-78e3f3017f1e">
            SAIL Collaborator
          </option>
          <option value="1bcb2eb2-1ed3-4690-b2de-c31619186176">
            Hariri Director
          </option>
          <option value="fb27b74f-ccdd-428d-bba3-24ba9526a25b">
            Hariri Staff
          </option>
          <option value="">Other</option>
        </Select>
      </FormControl>
      <Button id="submitButton" type="submit" size="lg" colorScheme="blue">
        Submit
      </Button>
    </form>
  );
};
