import { Box, Flex, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';

export const DeleteAccount: React.FC = () => (
  <Layout title="Account Deletion Request">
    <Flex direction="column" borderBottom="2px solid black" p="16px" gap="24px">
      <Text>
        We understand that there are various reasons why you might decide to
        delete your account. If you wish to proceed with the deletion of your
        account, please follow the steps below to ensure that your request is
        processed smoothly and securely.
      </Text>
      <Text>
        <strong>Step 1: Prepare Your Email</strong>
        <br />
        Compose an email to our support team at{' '}
        <Link href="mailto:sail@bu.edu">sail@bu.edu</Link> with the subject
        line: "Account Deletion Request - [App Name]".
      </Text>
      <Text>
        <strong>Step 2: Include Required Information</strong>
        <br />
        In the body of your email, please provide us with the following
        information to help us identify and delete your account:
        <br />- <strong>App Name:</strong> The name of the app from which you
        want to delete your account.
        <br />- <strong>Username:</strong> The exact username associated with
        the account you wish to delete.
        <br />
        This information is crucial for us to locate your account and process
        your deletion request accurately.
      </Text>
      <Text>
        <strong>Step 3: Send Your Email</strong>
        <br />
        After double-checking the information, send your email to us. Our
        support team will review your request and may contact you to verify your
        identity or to confirm the deletion. This is a necessary step to protect
        your account and ensure that the request is genuine.
      </Text>
      <Text>
        <strong>Final Steps</strong>
        <br />
        Once your request has been verified and processed, we will delete your
        account and all associated data permanently. Please note that this
        action is irreversible, and you will not be able to recover any data
        once your account is deleted.
        <br />
        We're here to assist you through every step of this process. If you have
        any questions or need further assistance, please do not hesitate to
        contact us at <Link href="mailto:sail@bu.edu">sail@bu.edu</Link>.<br />
        Thank you for using our applications. We're sorry to see you go, but we
        respect your decision and are committed to making this process as smooth
        as possible for you.
      </Text>
    </Flex>
  </Layout>
);
