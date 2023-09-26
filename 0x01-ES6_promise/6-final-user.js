import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let signUpResponse;
  let uploadPhotoResponse;

  try {
    signUpResponse = await signUpUser(firstName, lastName);
  } catch (error) {
    signUpResponse = { status: 'rejected', value: error.toString() };
  }

  try {
    uploadPhotoResponse = await uploadPhoto(fileName);
  } catch (error) {
    uploadPhotoResponse = { status: 'rejected', value: error.toString() };
  }

  return [signUpResponse, uploadPhotoResponse];
}
