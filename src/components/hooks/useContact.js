

import axios from 'axios';
import { QueryClient ,useMutation } from 'react-query';


const queryClient = new QueryClient();

export const useContact = () => {
  const contact = async ({ email, firstName, message }) => {
    try {
      const response = await axios.post(
        'https://backend.getlinked.ai/hackathon/contact-form',

        {
          email: email,
          first_name: firstName,
          message: message
        },

        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );


      return response.data;
    } catch (error) {
      
      throw new Error(error.response)

      
    }
  };

  
  return useMutation(contact);
};
