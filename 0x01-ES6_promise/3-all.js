import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([
    createUser(),
    uploadPhoto(),
  ]).then((messages) => {
    let name; let body;
    messages.forEach((message) => {
      if ('firstName' in message && 'lastName' in message) {
        name = `${message.firstName} ${message.lastName}`;
      } else {
        body = `${message.body}`;
      }
    });
    console.log(`${body} ${name}`);
  }).catch(() => {
    console.log('Signup system offline');
    return new Error();
  });
}
