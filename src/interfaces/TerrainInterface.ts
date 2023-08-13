export interface Terrain {
    id: number;
    attributes: {
        utilisateursTerrain: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        heureDebut: string;
        heureFin: string;
        typeJeu: string;
        firstTeam?: string;
        secondTeam?: string;
        trainer?: string;
        jour: string;
        ferme: boolean;
        terrain: string;
        raisonsFermeture: string;
    };
}

export interface TerrainInformationsCardInterface {
    terrain: Terrain;
}

export interface TerrainInformationsInterface {
    terrains: Terrain[];
    activeDate: Date;
    activeMonth: number;
    activeYear: number;
}
