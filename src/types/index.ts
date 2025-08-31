type Block = {
    _id: string;
    blocks_set_id: string;
    name?: string;
    description?: string;
    color: {
        holds: string;
        tag: string;
    };
    /** Dificultad: V6, 6b, Rosa, etc. */
    difficulty: string;
    /** Datos del setter */
    setter: User;

    //_____ TORNEOS _ WIP _____

    /** @deprecated TORNEOS - WIP */
    juiciable: boolean;
    /** @deprecated TORNEOS - WIP */
    score?: number;
};

type BlocksSet = {
    _id: string;
    gym_id: string;
    ubication: {
        /** Sector del gimnasio.
         * @example Boulder arriba, Boulder abajo, Torre, etc.
         */
        sector: string;
        /** Tipo de sector.
         * @example Placa, Desplome, etc.
         */
        type: string;
    };
    blocks: Block[];
    since?: string;
    until?: string;
};

// TODO WIP //
//: ¿Diferenciar parametros de gimnasio y de aplicación?
type AppParameters = {
    blockScore: string;
    /** Habilita la visualización del leaderboard */
    liveLeaderboard: boolean;
    /** Indica el indice de refrezco del leaderboard en segundos */
    leaderboardRefreshRate: number;
    /** @deprecated TORNEOS - WIP - Necesaria para el logueo por QR */
    passphrase: string;
};

enum ROLE {
    /** Role base de usuario. Puede editar su progreso en bloques. */
    climber = "climber",
    /** Puede crear, editar y eliminar bloques y seteos. */
    setter = "setter",
    /** Puede administrar a nivel gimnasio. */
    staff = "staff",
    /** Puede administrar a nivel aplicación. */
    admin = "admin",
    /** Web master */
    master = "master",
}

type User = {
    _id: string;
    nick_name: string;
    first_name: string;
    last_name: string;
    email: string;
    picture: string;
    //TODO Retirar en front
    password_hash: string;
    role: ROLE[];
    /** Role aprovado */
    approved: string;
};

type UserProgress = {
    _id: string;
    user_id: string;
    history: {
        blocks_set: BlocksSet;
        completed_blocks: Block[];
    }[];
};

type Gym = {
    _id: string;
    /** Nombre del gimnasio */
    name: string;
    /** Dirección del gimnasio */
    location: string;
    /** Staff del gimnasio. ID de usuarios */
    staff: string[];
    /** Descripción libre del lugar */
    description?: string;
    /** URL. Imagen logo del gimnasio */
    logo?: string;
};

//_____ TORNEOS _ WIP _____

/** @deprecated TORNEOS - WIP */
type Competition = {
    _id: string;
    name: string;
    location: string;
    date: string;
    duration: number;
    extraTime: number;
    category: string;
    blocksTemplate: Block[];
    competitors: Competitor[];
};

/** @deprecated TORNEOS - WIP */
type Competitor = {
    name: string;
    dni: string;
    competitionId: string;
    blocks: Block[];
    score: number;
};
