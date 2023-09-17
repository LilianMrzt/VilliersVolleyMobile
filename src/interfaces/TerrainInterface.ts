export interface Terrain {
    id: number;
    attributes: {
        users: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        start: string;
        end: string;
        sessionType: string;
        firstTeam?: string;
        secondTeam?: string;
        trainer?: string;
        day: string;
        closed: boolean;
        terrain: string;
        closedReason: string;
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
