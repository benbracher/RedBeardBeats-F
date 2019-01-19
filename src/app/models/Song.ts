export interface Song {
    SongEntityId: number;
    SongArtist: string;
    SongTitle: string;
    SongGenre: string;
    SongLength: string;
    SongAlbum: string;
    DateAdded?: Date;
    UploadedFile?: FormData;
}