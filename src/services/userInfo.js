import usersDetails from './usersDetails';

export const fetchUsersDetails = async () => {
    return await usersDetails.get('/members');
};

export const fetchUserDetail = async (id) => {
    return await usersDetails.get(`/members/${id}`);
};