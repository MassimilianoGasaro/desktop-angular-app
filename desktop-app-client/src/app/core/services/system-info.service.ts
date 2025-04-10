import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class SystemInfoService {
  async getAppVersion(): Promise<string> {
    return await (window as any).electronAPI.getVersion();
  }
}
