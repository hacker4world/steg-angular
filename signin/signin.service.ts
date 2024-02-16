import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SigninService {
  public serverLink =
    "https://super-silver-production.up.railway.app/compte/login";

  constructor(private readonly httpClient: HttpClient) {}

  public login(email: string, password: string) {
    return this.httpClient.post(this.serverLink, { email, password });
  }
}
