import type { NextApiRequest, NextApiResponse } from 'next';

export default function GetUsers(req: NextApiRequest, res: NextApiResponse) {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
        console.log('succesfully got a response');
      } else {
        console.log('not succesful in getting a response');
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error, 'error getting the users'));
}
