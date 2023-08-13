import { Dimensions, StatusBar } from 'react-native';

export default {
    getScreenHeight() {
        return Dimensions.get('screen').height;
    },

    getScreenWidth() {
        return Dimensions.get('screen').width;
    },

    getWindowContentHeight() {
        return this.getScreenHeight() - 60 - StatusBar.currentHeight;
    }
};
