export interface Song {
    SongArtist: string;
    SongTitle: string;
    SongGenre: string;
    SongLength: number;
    SongAlbum: string;
    DateAdded?: Date;
    oid: number;
}