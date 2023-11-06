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
        fields: [
          {
            id: '3fc4c175-b322-4863-a0f8-f398c79a062f',
            value: data.college,
          },
          {
            id: '8db8f1f3-1f3d-4cc8-8fe9-eb644d1025bc',
            value: data.title,
          },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b99c',
            name: 'email',
            type: 'email',
            value: data.email,
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
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b99b',
            name: 'college',
            value: data.college,
          },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b99e',
            name: 'applicationType',
            value: data.applicationType,
          },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b99f',
            name: 'fundingSource',
            value: data.fundingSource,
          },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b9a1',
            name: 'fundingAmount',
            value: data.fundingAmount,
          },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b9a2',
            type: 'date',
            name: 'deliveryDate',
            value: data.deliveryDate,
          },
          {
            id: '5d4542ff-84e4-49ac-9e03-1c96fdf9b9a3',
            name: 'referral',
            value: data.referral,
          },
        ],
      }),
    },
  );

  const hehe = await response.json();
  console.log(hehe);
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  if (!collaborator.ok) {
    throw new Error(`Error! status: ${collaborator.status}`);
  }

  const result = (await response.json()) as CreateResponse;
  console.log('result is: ', JSON.stringify(result, null, 4));

  return result;
};

export const ContactForm: React.FC = () => {
  const { control, register, handleSubmit } = useForm<Input>();
  //const onSubmit: SubmitHandler<Input> = (data) => console.log(data.email)
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  const departments = [
    {
      value: '759cc24e-9e5c-4e13-af97-1e9f267a8651',
      label: 'Faculty of Computing & Data Sciences',
    },
    {
      value: 'f0908240-67c8-40a0-9f77-3963fab67805',
      label: 'College of Arts & Sciences - Earth and Environment',
    },
    {
      value: '67a7e8ac-7974-478f-b31f-4ca48971758a',
      label: 'College of Arts & Sciences - Economics',
    },
    {
      value: 'c8fc55eb-d44a-4151-adf4-1ef0d27b80f7',
      label: 'College of Arts & Sciences - Physics',
    },
    {
      value: 'aab039e2-5750-498a-b343-648c4ec57860',
      label: 'College of Arts & Sciences - Mathematics & Statistics',
    },
    {
      value: 'c624a980-8a62-469a-936c-fc0159c16b79',
      label: 'College of Arts & Sciences - Computer Science',
    },
    {
      value: '9ad1096a-9727-4d34-b07b-8f082fc5a37b',
      label: 'College of Engineering - ECE',
    },
    {
      value: '50b243ef-48de-46f9-8688-5c91e6227150',
      label: 'College of Engineering - Mechanical Engineering',
    },
    {
      value: '916d6edc-2362-453c-8abf-24296840a910',
      label: 'College of Engineering - Biomedical Engineering',
    },
    {
      value: '3f53cac7-500b-4ce6-9bb8-86be8a51a3db',
      label: 'Chobanian & Advesian School of Medicine',
    },
    {
      value: 'b1d6f634-c586-4402-95d4-992b85742256',
      label: 'School of Medicine - CNTR-Slone Epidemiology Center',
    },
    {
      value: '0c08d77f-4749-4ef3-9ea2-63c089bcbf19',
      label: 'School of Medicine - Computational Biomedicine',
    },
    {
      value: 'd4152741-2115-40a1-87f8-1e9b94c27931',
      label: 'School of Medicine - Behavioral Science',
    },
    {
      value: '67168d8f-c228-49c2-8764-397678fff180',
      label: 'School of Medicine - Neuroscience',
    },
    {
      value: '1088fd6a-1a78-4fca-91e6-f0bbf5333e82',
      label: 'School of Medicine - Mental Health Counseling',
    },
    {
      value: '75c70402-5ed5-40ad-abeb-b95a5b006906',
      label: 'School of Medicine - Psychiatry and Psychological Brain Sciences',
    },
    {
      value: '45c1a0a3-ab8a-4728-8b49-860d43e4aa77',
      label: 'School of Medicine - Psychiatry',
    },
    {
      value: '0fbf948c-8929-46bf-b002-39b5cbad421c',
      label: 'School of Medicine - Nephrology',
    },
    {
      value: '94c186b7-8b9b-4a8a-aea0-73691367edac',
      label: 'Henry M. Goldman School of Dental Medicine',
    },
    {
      value: 'cf1c41ed-175c-4bca-bd51-6af769a1a2fc',
      label: 'School of Dental Medicine - Prosthodontic Treatment Center',
    },
    {
      value: 'c9c04aca-b6a6-4335-81de-afd60be4bbc3',
      label: 'School of Dental Medicine - Orthodontics & Dental Orthopedics',
    },
    {
      value: '2fbcee1d-4a2b-48a5-87fb-1ca5016b50a4',
      label: 'School of Dental Medicine - General Dentistry',
    },
    {
      value: '3e1cc3f1-7a19-49d2-b485-ae1985b54553',
      label: 'School of Public Health',
    },
    {
      value: '7e0f909b-392c-4fbd-a294-083c760a082b',
      label: 'Sargent - Physical Therapy and Athletic Training',
    },
    {
      value: '3f9a1c74-9876-474b-b69e-1262292c6ba7',
      label: 'Occupational Therapy Department',
    },
    {
      value: '2e0c4f8b-cc35-42e1-8086-9e8994bab288',
      label: 'College of Communication',
    },
    {
      value: 'ac39cd6b-6890-4ad5-b396-887d8e1393af',
      label: 'Frederick S. Pardee School of Global Studies',
    },
    {
      value: 'f3e680c8-4679-48a9-b175-365f2c915e5d',
      label: 'Graduate School of Arts & Sciences',
    },
    {
      value: '3f3faa9e-44b5-4d5b-b552-0b31ada50013',
      label: 'Metropolitan College & Extended Education',
    },
    {
      value: 'f525bfcd-2497-45bf-bffa-757ad1756bf8',
      label: 'Questrom School of Business',
    },
    {
      value: 'ccfc1351-c959-44eb-8025-56f0f81ae4d9',
      label: 'School of Theology',
    },
    {
      value: '7a0b7b96-45d3-4a47-bd71-975eab2334cb',
      label: 'Wheelock College of Education & Human Development',
    },
    {
      value: '162de623-bafa-429f-8b8e-6d2441b9af4b',
      label: 'BMO: Office of Black Male Advancement',
    },
    {
      value: '6317962c-6fe7-4096-878f-4e125564973f',
      label: 'Boston Womens Workforce Council',
    },
    {
      value: 'c7569646-a804-4ff3-b66d-69b03e1c7ce0',
      label: 'Center for Antiracist Research',
    },
    {
      value: '4973508b-e495-473a-b635-2efca1470eee',
      label: 'Counseling Psychology and Applied Human Development',
    },
    {
      value: '53fa6f8a-3d85-4d71-80e4-33f47459ac7e',
      label: 'Digital Learning & Innovation',
    },
    {
      value: '4477d278-3fe7-45bc-a31d-978a992b9072',
      label: 'Global Development Policy Center',
    },
    {
      value: '65d2fe9f-2c97-4407-b0e6-2ca3dbb28cba',
      label: 'Hariri Institute',
    },
    {
      value: 'b6e705a8-39e7-47d7-b591-5d087b3ed4cd',
      label: 'Information Services & Technology',
    },
    {
      value: '445d3d5c-e02d-4b71-b14b-1a2f5305c438',
      label: 'Institute for Global Sustainability',
    },
    { value: '8d759ebe-49a8-4db6-97cf-3e82e31b5d19', label: 'Mass Open Cloud' },
    {
      value: 'f0ba285b-e128-4c96-a660-0e9947e34b44',
      label: 'Office of the Dean - ASL',
    },
    { value: '559a8d3a-6d60-450e-bb3a-45376d55fac4', label: 'Provost Office' },
    { value: 'b8fed1c7-2bb9-488a-9ada-465d1b2cfeab', label: 'External' },
  ];

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
          {departments.map((dept: any) => (
            <>
              <option key={dept.value} value={dept.value}>
                {dept.label}
              </option>
            </>
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
          <option value="Faculty Member">Faculty Member</option>
          <option value="Student">Student</option>
          <option value="Event and/or Talk">Event and/or Talk</option>
          <option value="HIC Website">HIC Website</option>
          <option value="SAIL Website">SAIL Website</option>
          <option value="Other">Other</option>
        </Select>
      </FormControl>
      <Button id="submitButton" type="submit" size="lg" colorScheme="blue">
        Submit
      </Button>
    </form>
  );
};
