import ImageConstants from '@assets/images/ImageConstants';
import Row from '@components/common/Row';
import SvgIcon from '@components/common/SvgIcon';
import { TERRAIN_COLOR_MAP } from '@constants/TerrainConstants';
import { TerrainInformationsCardInterface } from '@interfaces/TerrainInterface';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TerrainInformationCard: FC<TerrainInformationsCardInterface> = ({ terrain }) => {
    const { colors } = useTheme();
    const styles = terrainInformationsCardStyle(colors);
    return (
        <Row
            style={[
                styles.container,
                {
                    backgroundColor: terrain.attributes.closed
                        ? colors.borderOutline
                        : colors.primary
                }
            ]}
        >
            <View
                style={[
                    styles.terrainColor,
                    {
                        backgroundColor: terrain.attributes.closed
                            ? colors.onBorderOutline
                            : TERRAIN_COLOR_MAP[terrain.attributes.terrain]
                    }
                ]}
            />
            {terrain.attributes.closed ? (
                <View style={styles.informations}>
                    <Text style={[styles.terrainText]}>
                        {I18n.t('Terrain')} {terrain.attributes.terrain}
                    </Text>
                    <Text style={styles.text}>{I18n.t('Unavailable')}</Text>
                    <Text style={styles.text}>
                        {I18n.t('Reason')}: {terrain.attributes.closedReason}
                    </Text>
                </View>
            ) : (
                <View style={styles.informations}>
                    <Text style={styles.terrainText}>
                        {I18n.t('Terrain')} {terrain.attributes.terrain}
                    </Text>
                    <Row style={styles.row}>
                        <SvgIcon
                            source={ImageConstants.Clock}
                            size={20}
                            color={colors.onPrimary}
                        />
                        <Text style={styles.text}>
                            {terrain.attributes.start.slice(0, 5)} {I18n.t('To')}{' '}
                            {terrain.attributes.end.slice(0, 5)}
                        </Text>
                    </Row>
                    <Row style={styles.row}>
                        <SvgIcon
                            source={ImageConstants.VolleyballBall}
                            size={16}
                            color={colors.onPrimary}
                        />
                        <Text style={styles.text}>
                            {terrain.attributes.sessionType} {terrain.attributes.users}
                        </Text>
                    </Row>
                    {terrain.attributes.firstTeam && terrain.attributes.secondTeam && (
                        <Row style={styles.row}>
                            <SvgIcon
                                source={ImageConstants.Team}
                                size={16}
                                color={colors.onPrimary}
                            />
                            <Text style={styles.text}>
                                {terrain.attributes.firstTeam} {I18n.t('Versus')}{' '}
                                {terrain.attributes.secondTeam}
                            </Text>
                        </Row>
                    )}
                    {terrain.attributes.trainer && (
                        <Row style={styles.row}>
                            <SvgIcon
                                source={ImageConstants.User}
                                size={16}
                                color={colors.onPrimary}
                            />
                            <Text style={styles.text}>
                                {I18n.t('Trainer')}: {terrain.attributes.trainer}
                            </Text>
                        </Row>
                    )}
                </View>
            )}
        </Row>
    );
};

const terrainInformationsCardStyle = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            alignItems: 'center',
            elevation: 1
        },
        terrainColor: {
            height: '100%',
            width: 20,
            borderRadius: 20
        },
        text: {
            color: colors.onPrimary,
            fontSize: 14,
            marginLeft: 10
        },
        informations: {
            flex: 1,
            marginLeft: 10
        },
        terrainText: {
            color: colors.onPrimary,
            fontSize: 18,
            fontWeight: 'bold'
        },
        row: {
            marginTop: 5,
            marginBottom: 5
        }
    });

export default TerrainInformationCard;
