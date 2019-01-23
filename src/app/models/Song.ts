export interface Song {
    ownerId?: number;
    songEntityId: number;
    songArtist: string;
    songTitle: string;
    songGenre: string;
    songLength: string;
    songAlbum: string;
    dateAdded?: Date;
    uploadedFile?: FormData;
}