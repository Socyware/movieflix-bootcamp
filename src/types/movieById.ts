import { Genres } from "./genres";

export type MovieById ={

    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genres[];
}