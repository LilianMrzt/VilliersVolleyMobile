import { useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RenderHtml from 'react-native-render-html';

const CustomHtml = ({ html = undefined }) => {
    const { colors } = useTheme();

    /**
     * Styles custom appliqués au html reçu
     */
    const htmlStyle: any = {
        p: {
            fontSize: 16,
            margin: 0,
            lineHeight: 24,
            color: colors.onBackground
        },
        img: {
            width: Size.getScreenWidth()
        },
        table: {
            borderColor: colors.onBackground,
            borderTopWidth: 0.5,
            borderLeftWidth: 0.5
        },
        td: {
            borderColor: colors.onBackground,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            color: colors.onBackground,
            justifyContent: 'center',
            alignItems: 'center'
        },
        ul: {
            color: colors.onBackground
        }
    };

    return (
        <SafeAreaView style={styles.html_container}>
            {html && (
                <RenderHtml
                    source={{ html: html }}
                    classesStyles={htmlStyle}
                    tagsStyles={htmlStyle}
                    contentWidth={Size.getScreenWidth()}
                    computeEmbeddedMaxWidth={(maxWidth) => maxWidth - 40}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    html_container: {
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default CustomHtml;
