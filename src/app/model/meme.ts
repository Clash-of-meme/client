export interface Meme {
    id: number;
    name: string;
    url: string;
    elo: number;
    creation_date: string;
    in_queue: boolean;
    in_match: boolean;
    match_count: number;
    winrate: number;
    id_user: number;
}
