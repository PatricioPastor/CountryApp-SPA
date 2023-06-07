import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import {Subject, debounceTime, Subscription} from 'rxjs'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private onDebounce:Subject<string> = new Subject<string>();
  private debouncerSubcription?: Subscription;

  @Input()
  public placeholder: string = '';


  @Output()
  public onValue = new EventEmitter<string>();

  ngOnInit(): void {
      this.debouncerSubcription = this.onDebounce.
      pipe(
        debounceTime(300)
      )
      .subscribe(value => this.onValue.emit(value));
  }

  ngOnDestroy(): void {
    this.debouncerSubcription?.unsubscribe();
  }

  onKeyPress( searchTerm:string ): void {
    this.onDebounce.next( searchTerm )
  }

}
