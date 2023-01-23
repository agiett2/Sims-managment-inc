import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public copyright: string = `Copyright ${new Date().getFullYear()} SIMS MANAGMENR INC.`

  constructor() { }

  ngOnInit(): void {
  }

}
