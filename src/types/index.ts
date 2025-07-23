type Block = {
    competitionId: string;
    number: number;
    score: number;
    category: string;
    juiciable: boolean;
    attempts: number;
    top: boolean;
    zone: boolean;
};

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

type Competitor = {
    name: string;
    dni: string;
    competitionId: string;
    blocks: Block[];
    score: number;
};

type AppParameters = {
    blockScore: string;
    /** Necesaria para el logueo por QR */
    passphrase: string;
    liveLeaderboard: boolean;
    leaderboardRefreshRate: number;
};
