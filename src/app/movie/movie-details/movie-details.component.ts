import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IMovie } from "@app/core/services/entities/movie/movie.model";
import { MovieService } from "@app/core/services/entities/movie/movie.service";
import { Observable } from "rxjs";
import { getGenres } from "../movie.utils";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<IMovie | null>;
  getGenres = getGenres;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    const id = +this.route.snapshot.params.id;
    this.movieService.setCurrentMovieId(id);
    this.movie$ = this.movieService.currentMovie$;
  }

  ngOnInit(): void {}
}