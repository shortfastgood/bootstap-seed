import {Component, OnInit} from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  standalone: false
})
export class NavbarComponent implements OnInit {

  isSmallMenuHidden!: boolean;

  smallMenuClass!: string;

  hideSmallMenu(): void {
    this.isSmallMenuHidden = true;
    this.smallMenuClass = 'hide-small-menu';
  }

  ngOnInit(): void {
    this.hideSmallMenu();
  }

  switchSmallMenuState(): void {
    if (this.isSmallMenuHidden) {
      this.isSmallMenuHidden = false;
      this.smallMenuClass = 'navbar-small flex-column';
    } else {
      this.hideSmallMenu();
    }
  }

}
