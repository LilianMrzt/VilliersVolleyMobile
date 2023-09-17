import TerrainInformationCard from '@components/calendar/TerrainInformationCard';
import { COLOR_ORDER } from '@constants/TerrainConstants';
import { TerrainInformationsInterface } from '@interfaces/TerrainInterface';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TerrainInformations: React.FC<TerrainInformationsInterface> = ({
    terrains,
    activeDate,
    activeMonth,
    activeYear
}) => {
    const { colors } = useTheme();
    const styles = terrainInformationsStyle(colors);

    // On trie les terrains par l'ordre des couleurs définit
    const sortedTerrains = terrains?.sort((a, b) => {
        const colorA = a?.attributes.terrain;
        const colorB = b?.attributes.terrain;
        return COLOR_ORDER.indexOf(colorA) - COLOR_ORDER.indexOf(colorB);
    });

    return (
        <View style={styles.container}>
            {sortedTerrains?.length > 0 ? (
                <Fragment>
                    {activeMonth === activeDate.getMonth() &&
                        activeYear === activeDate.getFullYear() &&
                        sortedTerrains?.map((terrain) => (
                            <TerrainInformationCard
                                key={terrain.id}
                                terrain={terrain}
                            />
                        ))}
                </Fragment>
            ) : (
                <View>
                    <Text style={styles.noTraining}>
                        {activeMonth === activeDate.getMonth() &&
                            activeYear === activeDate.getFullYear() &&
                            I18n.t('NoAvailableTerrain')}
                    </Text>
                </View>
            )}
        </View>
    );
};

const terrainInformationsStyle = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding: 10
        },
        text: {
            color: 'black'
        },
        infoCard: {
            borderRadius: 10,
            padding: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            marginTop: 5
        },
        noTraining: {
            flex: 1,
            textAlign: 'center',
            fontSize: 18,
            color: colors.onBackground
        }
    });

export default TerrainInformations;
