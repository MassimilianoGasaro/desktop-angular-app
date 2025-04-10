import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemInfoService } from './core/services/system-info.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desktop-app-client';

  version = '';

  constructor(private sys: SystemInfoService) {}

  async ngOnInit() {
    this.version = await this.sys.getAppVersion();
  }
}
