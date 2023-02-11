import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
   
    const nonSelectedGenres: genreDTO[] = [{id: 2, name: 'Drama'}]
    const selectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]
   
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 2, name: 'Cineplex-PZ'}]
    const selectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'Cineplex-PR'}]

    const selectedActors: actorMovieDTO[] = [{
        id: 1, name: 'Uma Thurman', character: 'Mia Wallace', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Uma_Thurman_Cannes_2017_%28cropped%29.jpg/330px-Uma_Thurman_Cannes_2017_%28cropped%29.jpg'

    }]

    return (
        <>
            <h3> Edit Movie</h3>
            <MovieForm model={{title: 'Toy Story 4', inTheaters: true, trailer: 'url',
            releaseDate: new Date('2019-01-01T00:00:00')    
        }} 
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}

                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={selectedMovieTheaters}
                selectedActors={selectedActors}
            />
        </>
    )
}