import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
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
        <Row style={[styles.container, { backgroundColor: terrain.attributes.ferme ? colors.borderOutline : colors.primary }]}>
            <View
                style={[
                    styles.terrainColor,
                    { backgroundColor: terrain.attributes.ferme ? colors.onBorderOutline : TERRAIN_COLOR_MAP[terrain.attributes.terrain] }
                ]}
            />
            {terrain.attributes.ferme ? (
                <View style={styles.informations}>
                    <Text style={[styles.terrainText]}>
                        {I18n.t('Terrain')} {terrain.attributes.terrain}
                    </Text>
                    <Text style={styles.text}>{I18n.t('Unavailable')}</Text>
                    <Text style={styles.text}>
                        {I18n.t('Reason')}: {terrain.attributes.raisonsFermeture}
                    </Text>
                </View>
            ) : (
                <View style={styles.informations}>
                    <Text style={styles.terrainText}>
                        {I18n.t('Terrain')} {terrain.attributes.terrain}
                    </Text>
                    <Row style={styles.row}>
                        <ImageIcon
                            source={ImageConstants.clock}
                            size={16}
                            color={colors.onPrimary}
                        />
                        <Text style={styles.text}>
                            {terrain.attributes.heureDebut.slice(0, 5)} {I18n.t('To')} {terrain.attributes.heureFin.slice(0, 5)}
                        </Text>
                    </Row>
                    <Row style={styles.row}>
                        <ImageIcon
                            source={ImageConstants.volleyballBall}
                            size={16}
                            color={colors.onPrimary}
                        />
                        <Text style={styles.text}>
                            {terrain.attributes.typeJeu} {terrain.attributes.utilisateursTerrain}
                        </Text>
                    </Row>
                    {terrain.attributes.firstTeam && terrain.attributes.secondTeam && (
                        <Row style={styles.row}>
                            <ImageIcon
                                source={ImageConstants.team}
                                size={16}
                                color={colors.onPrimary}
                            />
                            <Text style={styles.text}>
                                {terrain.attributes.firstTeam} {I18n.t('Versus')} {terrain.attributes.secondTeam}
                            </Text>
                        </Row>
                    )}
                    {terrain.attributes.trainer && (
                        <Row style={styles.row}>
                            <ImageIcon
                                source={ImageConstants.defaultUser}
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
            borderRadius: 20,
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
