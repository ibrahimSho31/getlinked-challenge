

import axios from 'axios';
import { QueryClient ,useMutation } from 'react-query';


const queryClient = new QueryClient();

export const useApplication = () => {
  const application = async ({ email, phoneNumber, category, teamName, groupSize, checked, projectTopic  }) => {
    try {
      const response = await axios.post(
        'https://backend.getlinked.ai/hackathon/registration',

        {
          email: email,
          phone_number: phoneNumber,
          team_name: teamName,
          group_size: groupSize,
          project_topic: projectTopic,
          privacy_poclicy_accepted: checked,
          category: category
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

  return useMutation(application);
};
