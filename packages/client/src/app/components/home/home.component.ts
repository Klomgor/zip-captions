import { Component } from '@angular/core';
import { AppState } from '../../models/app.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { volumeSelector } from '../../selectors/audio-stream.selector';
import { loadingSelector } from '../../selectors/app.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public loading$: Observable<boolean>;
  public vol$: Observable<number>;
  constructor(private store: Store<AppState>) { 
    this.loading$ = this.store.pipe(select(loadingSelector));
    this.vol$ = this.store.pipe(select(volumeSelector))
  }
}
