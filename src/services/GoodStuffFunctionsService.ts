import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicClientApplication, AccountInfo } from '@azure/msal-browser';
import {environment} from '../environments/environment';

declare const window: any;

@Injectable({ providedIn: 'root' })
export class GoodStuffFunctionsService {
  private msalInstance: PublicClientApplication;
  private account: AccountInfo | null = null;

  constructor(private http: HttpClient) {
    // get MSAL instance created in main.ts
    this.msalInstance = (window as any)['msalInstance'] ?? (window as any)['msal']?.msalInstance;
    // If you didn't attach it globally, create local quick instance:
    if (!this.msalInstance) {
      this.msalInstance = new PublicClientApplication({
        auth: {
          clientId: environment.azure.clientId,
          authority: environment.azure.authority,
          redirectUri: environment.azure.redirectUri
        }
      });
    }
    // try to set account from cache
    const accounts = this.msalInstance.getAllAccounts();
    this.account = accounts.length ? accounts[0] : null;
  }

  async ensureLogin(): Promise<void> {
    if (!this.account) {
      // interactive login
      const loginRes = await this.msalInstance.loginPopup({ scopes: [] });
      this.account = loginRes.account;
    }
  }

  private async acquireTokenForAF(): Promise<string> {
    // scope must match the delegated scope defined on AF app (e.g. api://<AF_CLIENT_ID>/user_impersonation)
    const scope = `api://${environment.afAppId}/user_impersonation`;
    const silentRequest = {
      account: this.account ?? undefined,
      scopes: [ scope ]
    };

    try {
      const result = await this.msalInstance.acquireTokenSilent(silentRequest);
      return result.accessToken;
    } catch (e) {
      // fallback to interactive
      const result = await this.msalInstance.acquireTokenPopup({ scopes: [scope] });
      this.account = result.account;
      return result.accessToken;
    }
  }

  // example API call
  async getProducts(): Promise<any> {
    await this.ensureLogin(); // optional: if you have SSO and want silent flow, adjust
    const token = await this.acquireTokenForAF();

    // call AF via proxy (local) or real url (prod)
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${environment.afUrl}/products`, { headers, responseType: 'json' }).toPromise();
  }
}
