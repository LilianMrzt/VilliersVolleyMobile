import { url } from '@api/Api';

export const getMediaUrl = (mediaUrl) => {
    return `${url}${mediaUrl}`;
};
