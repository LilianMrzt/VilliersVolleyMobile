import { Dimensions } from 'react-native';

export default {
    getScreenHeight() {
        return Dimensions.get('screen').height;
    },

    getScreenWidth() {
        return Dimensions.get('screen').width;
    }
};
