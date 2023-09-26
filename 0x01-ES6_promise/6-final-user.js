import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then((userData) => uploadPhoto(fileName)
      .then((fileData) => [
        { status: 'fulfilled', value: userData },
        { status: 'fulfilled', value: fileData },
      ])
      .catch((error) => [{ status: 'rejected', value: error.toString() }]))
    .catch((error) => [{ status: 'rejected', value: error.toString() }]);
}
