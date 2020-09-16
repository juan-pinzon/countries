import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() darkMode: boolean
  @Output() toggleMode = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  changeMode(): void {
    this.darkMode = !this.darkMode
    this.toggleMode.emit(this.darkMode)
  }

}
